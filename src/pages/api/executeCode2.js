var fs = require('fs');
const { uuid } = require('uuidv4');
const { promisify } = require('util');
const { exec } = require('child_process');
const execAsync = promisify(exec);


import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};


async function execCommand(command) {
  try {
    const { stdout } = await execAsync(command);
    return stdout;
  } catch (error) {
    throw new Error(`Error executing command: ${error}`);
  }
}

// Usage example
async function run(cmd) {
  try {
    const output = await execCommand(cmd);
    console.log(`Command output: ${output}`);
    return output;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields) => {
      if (err) {
        console.error('Error parsing form data:', err);
        res.status(400).json({ message: 'Error parsing form data' });
        return;
      }

      // Access the form data
      const { lng,ver,code } = fields;

      // Perform any necessary processing with the form data
      // For this example, we'll simply log the data
      console.log('lng:', lng);
      console.log('ver:', ver);
      console.log('code:', code);

      var filename = uuid()+'.py';//
      var path = `./usertest/${filename}`

      fs.appendFile(path, code, async function (err) {
        if (err) throw err;
        //console.log('Saved!');
        var cmd = `docker cp ${path} anj_cont1:/app`;
        let response1 = await run(cmd);
        console.log('response1: ',response1);



        var cmd = `docker exec anj_cont1 python ./${filename}`;
        let response2 = await run(cmd);
        console.log('response2: ',response2);

        var cmd = `docker exec anj_cont1 rm -rf ./${filename}`;
        let response3 = await run(cmd);
        console.log('file deleted from container');

        fs.unlink( path, ()=>{
          console.log('file deleted from host');
        } )

        // Send a response indicating successful form submission
        const html = `${response2}`;
         
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(html); 
      });
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
import { NextResponse } from 'next/server';
const { promisify } = require('util');
const { exec } = require('child_process');

const execAsync = promisify(exec);


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


export async function GET(request) {
    
    const { searchParams } = new URL(request.url);
    const lng = searchParams.get('lng');
    const ver = searchParams.get('ver');
    const code = searchParams.get('code').replace(/"/g, '\\"');

    //console.log(code);
    //var cmd = `winpty docker exec -it ani_cont_py3 python -c '"${code}"' `;
    //var cmd = `docker exec -it ani_cont_py3 python -c 'print("Hello, World!")'`;
    const cmd = `docker exec ani_cont_py3 python -c "${code}"`;
    
    let response = await run(cmd);

    return NextResponse.json({ data:response });
}
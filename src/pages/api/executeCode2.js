export default function handler(req, res) {
    const html = `<pre>
                    Hello, World1!
                    Hello, World2!
                    Hello, World3!
                    Hello, World4!
                    Hello, World5!
                    Hello, World6!
                </pre>`;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
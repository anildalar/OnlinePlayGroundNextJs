export default function handler(req, res) {
    const html = `
    <pre>Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
</pre>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
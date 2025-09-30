const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/soma')) {
    const q = url.parse(req.url, true).query;
    const a = Number(q.a);
    const b = Number(q.b);
    const resultado = { soma: a + b };
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(resultado));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Página não encontrada');
  }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));
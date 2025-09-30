const http = require('http');
let contador = 0;

const server = http.createServer((req, res) => {
  if (req.url === '/visitas') {
    contador++;
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`Esta rota foi acessada ${contador} vezes`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Página não encontrada');
  }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/node') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Minha Página Node.js</h1><p>Esta é uma página de teste</p>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Página não encontrada');
    }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));
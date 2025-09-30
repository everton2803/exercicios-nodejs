const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.url === '/ifc') {
        res.writeHead(302, { 'Location': 'https://www.videira.ifc.edu.br' });
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Página não encontrada');
    }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));
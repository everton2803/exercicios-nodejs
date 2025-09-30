const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.url === '/usuario') {
        const usuario = {
            nome: 'Everton',
            idade: 30
        };
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(usuario));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Página não encontrada');
    }

});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.url === '/hora') {
        const agora = new Date();
        const hora = agora.toLocaleTimeString('pt-BR', { hour12: false });
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(hora);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Página não encontrada');
    }

});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));
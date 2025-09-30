const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/saudacao')) {
        const q = url.parse(req.url, true).query;
        const nome = q.nome || 'visitante';
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`Olá, ${nome}!`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Página não encontrada');
    }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));
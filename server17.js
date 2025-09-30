const http = require('http');

let usuarios = [];
let produtos = [];

const server = http.createServer((req, res) => {
  const { url, method } = req;

  // Rota /usuarios
  if (url === '/usuarios') {
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(usuarios));
    } else if (method === 'POST') {
      let body = '';
      req.on('data', chunk => body += chunk.toString());
      req.on('end', () => {
        try {
          const novoUsuario = JSON.parse(body);
          usuarios.push(novoUsuario);
          res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ sucesso: true, mensagem: 'Usuário cadastrado' }));
        } catch (err) {
          res.writeHead(400);
          res.end('JSON inválido');
        }
      });
    }

  // Rota /produtos
  } else if (url.startsWith('/produtos')) {
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(produtos));
    } else if (method === 'POST') {
      let body = '';
      req.on('data', chunk => body += chunk.toString());
      req.on('end', () => {
        try {
          const novoProduto = JSON.parse(body);
          produtos.push(novoProduto);
          res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ sucesso: true, mensagem: 'Produto adicionado' }));
        } catch (err) {
          res.writeHead(400);
          res.end('JSON inválido');
        }
      });
    } else if (method === 'PUT') {
      let body = '';
      req.on('data', chunk => body += chunk.toString());
      req.on('end', () => {
        try {
          const atualizacao = JSON.parse(body);
          const index = produtos.findIndex(p => p.id === atualizacao.id);
          if (index !== -1) {
            produtos[index] = atualizacao;
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ sucesso: true, mensagem: 'Produto atualizado' }));
          } else {
            res.writeHead(404);
            res.end('Produto não encontrado');
          }
        } catch (err) {
          res.writeHead(400);
          res.end('JSON inválido');
        }
      });
    } else if (method === 'DELETE') {
      let body = '';
      req.on('data', chunk => body += chunk.toString());
      req.on('end', () => {
        try {
          const { id } = JSON.parse(body);
          const index = produtos.findIndex(p => p.id === id);
          if (index !== -1) {
            produtos.splice(index, 1);
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ sucesso: true, mensagem: 'Produto removido' }));
          } else {
            res.writeHead(404);
            res.end('Produto não encontrado');
          }
        } catch (err) {
          res.writeHead(400);
          res.end('JSON inválido');
        }
      });
    }

  // Rota não encontrada
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Página não encontrada');
  }
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));

//adicionar usuario
//curl -X POST http://localhost:3000/usuarios -H "Content-Type: application/json" -d "{\"nome\":\"Maria\",\"idade\":25}"

//listar usuarios
//curl http://localhost:3000/usuarios

//adicionar produto
//curl -X POST http://localhost:3000/produtos -H "Content-Type: application/json" -d "{\"id\":1,\"nome\":\"Teclado\",\"preco\":120}"

//atualizar produto
//curl -X PUT http://localhost:3000/produtos -H "Content-Type: application/json" -d "{\"id\":1,\"nome\":\"Teclado Gamer\",\"preco\":150}"

//remover produto
//curl -X DELETE http://localhost:3000/produtos -H "Content-Type: application/json" -d "{\"id\":1}"

//listar produtos
//curl http://localhost:3000/produtos
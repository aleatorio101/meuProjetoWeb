// const http = require("http");

// const port = 3000;

// const server = http.createServer ((request, response) => {
//     response.setHeader("content-type", "text/html; charset=utf-8");
//     response.writeHead(200);
//     response.write("Olá <strong>HTTP</strong>!");
//     response.end();
// });

// server.listen(3000, () => {
//     console.log("Servidor iniciado na porta: ", port)
// })

const express = require("express");
const port = 3000;
const server = express();

//boddy-parser
server.use(express.json());

server.use((request, response, next) => {
    const token = request.headers.token;
    if (token == 'meu-token') {
    next();
    } else {
    response.status(403);
    response.send();
    }
    });

server.get("/", (request, response) => {
    response
        .status(200)
        .contentType("text/html; charset=utf-8")
        .send("<html><body>Olá NodeJS</body></html>");
});

server.get("/help", (request, response) => {
    response
        .status(200)
        .contentType("text/html; charset=utf-8")
        .send("<html><body>Help page!</body></html>");
});

server.get("/user/:userId", (request, response) => {
    const userId = request.params.userId;

    response
        .status(200)
        .contentType("text/html; charset=utf-8")
        .send("<html><body>User " + userId + "</body></html>");
});

server.post('/usuarios/', (request, response) => {
    const usuario = request.body;
    console.log('Usuários recebido:', usuario);
    response.status(201).send();
    });    

server.listen(port, () => {
    console.log("Servidor iniciado na porta", port);
});

const http = require("http");

const port = 3000;

const server = http.createServer();

server.listen(3000, () => {
    console.log("Servidor iniciado na porta: ", port)
})
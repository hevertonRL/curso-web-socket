import express from "express";
import http from "http";

const app = express();
const server = http.Server();

app.get('/', (req, res) => {
    res.json({status: true});
});

app.get('/teste', (req, res) => {
    res.send('AULA TESTE');
});

server.listen(3333, () => {
    console.log("SERVIDOR INICIADO PORTA", 3333)
});

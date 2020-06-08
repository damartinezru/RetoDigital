const express = require('express');
const server = express();

server.use(express.json());

server.listen(3000,() => {
    console.log("Corriendo en el puerto 3000");
});
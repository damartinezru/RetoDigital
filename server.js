const express = require('express');
const server = express();
const router = require("../RetoDigital/services/network/routes");

server.use(express.json());

router(server);

server.listen(3000,() => {
    console.log("Corriendo en el puerto 3000");
});
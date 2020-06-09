const location = require("../api/1. network/locationNetwork");
const config = require("../lib/config");

const routes = (server) => {
    server.use(`/${config.version}/location`, location);
}   

module.exports = routes;
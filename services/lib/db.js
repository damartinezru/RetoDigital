const config = require('../lib/config');
const Sequelize = require('sequelize');
const DB_NAME = config.postgresDb;


class PostgresSQL{
    constructor(){
        if (!PostgresSQL.connection) {
            PostgresSQL.connection = new Sequelize(`${config.postgresDb}`, `${config.postgresUser}`, `${config.postgresPassword}`, {
                dialect : 'postgres',
                host: config.dbHost
            })
            console.log(`[DB] DB ${config.postgresDb} conectada con exito`);
        }
    }
    
    connect() {
        return PostgresSQL.connection;
    }

}

module.exports = PostgresSQL;
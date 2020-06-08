require("dotenv").config();

const config = {
  dbHost: process.env.DB_HOST,
  redisHost: process.env.REDIS_HOST,
  port: process.env.PORT,
  host: procees.env.HOST,
  postgresPassword: procees.env.POSTGRES_PASSWORD,
  postgresUser: procees.env.POSTGRES_USER,
  postgresDb: procees.env.POSTGRES_DB,
};

module.exports = config;

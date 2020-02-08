require('dotenv').config();

module.exports = {
    development: {
      dialect: "postgres",
      username: "postgres",
      password: null,
      database:"burgerqueen",
      host: "db",
      define: {
        timestamps: false
      }
    },
    test: {
      dialect: "postgres",
      username: "postgres",
      password: null,
      database:"burgerqueen",
      host: "localhost",
      define: {
        timestamps: false
      }
    },
    production: {
      dialect: 'postgres',
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
      define: {
        timestamps: false
      }
    }
  };
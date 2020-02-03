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
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
      dialect: 'mysql',
      use_env_variable: 'DATABASE_URL',
      define: {
        timestamps: false
      }
    }
  };
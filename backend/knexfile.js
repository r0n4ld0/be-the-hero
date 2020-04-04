// Update with your config settings.

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      user: "OmniStack",
      password: "AbC_123456789",
      database: "OmniStack"
    },
    migrations: {
      directory: "./src/database/migrations"
    }
  },

  test: {
    client: "mysql",
    connection: {
      host: "localhost",
      user: "OmniStack",
      password: "AbC_123456789",
      database: "OmniStackTest"
    },
    migrations: {
      directory: "./src/database/migrations"
    }
  },
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};

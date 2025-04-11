import type { Knex } from 'knex'

interface IKnexConfig {
  [key: string]: Knex.Config
}

const config: IKnexConfig = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || {
      host: 'localhost',
      port: 5432,
      user: 'liamsimpson',
      password: 'Jemaine96',
      database: 'liamsimpson',
    },
    migrations: {
      extension: 'ts',
      directory: './migrations',
    },
    seeds: {
      extension: 'ts',
      directory: './seeds',
    },
  },
}

export default config

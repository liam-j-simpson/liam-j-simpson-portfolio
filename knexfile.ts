import type { Knex } from 'knex'

interface IKnexConfig {
  [key: string]: Knex.Config
}

const config: IKnexConfig = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.PGHOST || 'localhost',
      port: process.env.PGPORT || 5432,
      user: process.env.PGUSER || 'liamsimpson',
      password: process.env.PGPASSWORD || 'Jemaine96',
      database: process.env.POSTGRES_DB || 'liamsimpson',
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

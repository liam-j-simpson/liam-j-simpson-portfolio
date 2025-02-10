import * as Path from 'node:path'
import * as URL from 'node:url'
import dotenv from 'dotenv'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

dotenv.config({ path: Path.join(__dirname, '../../.env') })

const developmentConfig = {
  host: process.env.DEV_DATABASE_HOST || 'localhost',
  port: process.env.DEV_DATABASE_PORT || 3306,
  user: process.env.DEV_DATABASE_USER || 'root',
  password: process.env.DEV_DATABASE_PASSWORD,
  database: process.env.DEV_DATABASE_NAME || 'portfolio_dev',
}

export default {
  development: {
    client: 'mysql2',
    connection: developmentConfig,
    migrations: {
      directory: Path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: Path.join(__dirname, 'seeds'),
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  test: {
    client: 'mysql2',
    connection: {
      host: process.env.TEST_DATABASE_HOST || 'localhost',
      port: process.env.TEST_DATABASE_PORT || 3306,
      user: process.env.TEST_DATABASE_USER || 'root',
      password: process.env.TEST_DATABASE_PASSWORD || '',
      database: process.env.TEST_DATABASE_NAME || 'portfolio_test',
    },
    migrations: {
      directory: Path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: Path.join(__dirname, 'seeds'),
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  production: {
    client: 'mysql2',
    connection: {
      host: process.env.MYSQLHOST || process.env.RAILWAY_DATABASE_HOST,
      port: process.env.MYSQLPORT || process.env.RAILWAY_DATABASE_PORT,
      user: process.env.MYSQLUSER || process.env.RAILWAY_DATABASE_USER,
      password:
        process.env.MYSQLPASSWORD || process.env.RAILWAY_DATABASE_PASSWORD,
      database:
        process.env.MYSQLDATABASE ||
        process.env.RAILWAY_DATABASE_NAME ||
        'railway',
    },
    migrations: {
      directory: Path.join(__dirname, 'migrations'),
    },
    seeds: {
      directory: Path.join(__dirname, 'seeds'),
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
}

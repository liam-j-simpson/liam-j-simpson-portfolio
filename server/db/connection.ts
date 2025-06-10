import knex from 'knex'
import config from '../../knexfile.ts'

type Environment = 'development' | 'production' | 'test'
const env = (process.env.NODE_ENV as Environment) || 'development'

const connection = knex(config[env])
console.log(connection)

console.log('NODE_ENV:', process.env.NODE_ENV)
console.log('Selected config:', config)

export default connection

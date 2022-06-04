import { IdbConfig } from "../contracts/IdbConfig"

require('dotenv').config()

export const dbConfig: IdbConfig = {
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT || '5432'),
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT || 'postgres',
}
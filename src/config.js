import { config } from "dotenv";
config()

export const DBHOST = process.env.DBHOST
export const DBUSER = process.env.DBUSER
export const DBPASSWORD = process.env.DBPASSWORD
export const DBPORT = process.env.DBPORT
export const DBNAME = process.env.DBNAME
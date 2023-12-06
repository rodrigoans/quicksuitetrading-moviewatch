import { pool } from './../db.js'

export const ping = async (req, res) => {
    const RESULT = await pool.query('SELECT "PONG" AS Result')
    return res.json(RESULT[0]) }
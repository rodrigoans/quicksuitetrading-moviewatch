import { pool } from '../db.js'

export const getAllMovies = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Movies')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({ error: "Algo falló", error })
    }
}

export const getMovieById = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Movies WHERE id_movie = ?', req.params.id)
        console.log(rows)
        if (rows.length <= 0) return res.status(404).json({ error: 'Movie not found' })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ error: "Algo falló" })
    }
}
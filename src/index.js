import express from 'express'
import moviesRoutes from './routes/movies.routes.js'
import indexRoutes from './routes/index.routes.js'
import './config.js'

const app = express()

app.use( '/api', indexRoutes )
app.use( '/api', moviesRoutes )


app.use( (req, res, next ) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})


app.listen(3000)



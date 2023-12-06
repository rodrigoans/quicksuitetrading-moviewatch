import { Router } from "express";
import { getAllMovies, getMovieById } from "../controllers/movies.controller.js";

const router = Router()


router.get('/movies/getAll', getAllMovies)
router.get('/movies/getById/:id', getMovieById)


export default router
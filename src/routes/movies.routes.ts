import { Router } from "express";
import { fetchPopularMovies } from "../services/getMovies.service";

export const moviesRoutes = Router()

moviesRoutes.get('/popular', async (req, res) => {
    try {
        const movies = await fetchPopularMovies()
        console.log(movies)
        res.json(movies)
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error')
    }
})

export default moviesRoutes
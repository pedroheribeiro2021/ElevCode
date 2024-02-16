// services/tmdb.service.ts
import fetch from 'node-fetch';

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Yzc4MzU5YTkxMzE0ZmNjZDJmZTFiZWI1NmNjNzU0MyIsInN1YiI6IjY1Y2Y1ZjU4ZWE4NGM3MDE4NjgxMTYwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I0GY13dEwcYlzWI0wLmuB0T5v-yFNeUrdPwfjUhdVbs'

const BASE_URL = 'https://api.themoviedb.org/3/authentication'

export const fetchPopularMovies = async () => {
    const url = `${BASE_URL}/${API_KEY}`
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch popular movies')
    }
    const data = await response.json()
    return data
}

import { get } from "./api.js";

export async function getMovies() {
    const moviesData = await get('data/movies');
    return moviesData;
}

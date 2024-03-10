import { showHome } from "../views/home.js";
import { del } from "./api.js";

export async function deleteMovie(e) {
    const id = e.target.parentElement.parentElement.parentElement.parentElement.dataset.movieId;

    await del(`data/movies/${id}`);
    showHome();
}
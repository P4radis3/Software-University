import { createMoviePreview } from "../components/moviePreview.js";
import { post } from "../data/api.js";
import { showHome } from "./home.js";

export async function add(event) {
    event.preventDefault();

    const { title, description, img } = Object.fromEntries(new FormData(event.target).entries());

    if (title == '' || description == '' || img == '') {
        return alert('All fields are required!');
    }

    const movieData = await post('data/movies', { title, description, img });

    document.getElementById('movies-list').appendChild(createMoviePreview(movieData));
    showHome();
}
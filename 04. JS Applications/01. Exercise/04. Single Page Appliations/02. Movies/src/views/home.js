import { createMoviePreview } from "../components/moviePreview.js";
import { getMovies } from "../data/getMovies.js";
import { showSection, showWelcomeMessage } from "../util.js";

export async function showHome() {

    const user = JSON.parse(sessionStorage.getItem('user'));

    showSection('home-page');

    const moviesData = await getMovies();
    document.getElementById('movies-list').replaceChildren(...moviesData.map(movieData => createMoviePreview(movieData, user)))

    document.getElementById('movie').style.display = 'block';

    if (user) {
        document.getElementById('add-movie-button').style.display = 'block';
        showWelcomeMessage(user.email);
    }
}
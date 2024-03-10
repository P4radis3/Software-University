import { showDetails } from "../components/moviePreview.js";
import { get, put } from "../data/api.js";
import { showSection } from "../util.js";

const form = document.querySelector('#edit-movie form');

async function edit(e, id) {
    e.preventDefault();

    const { title, description, img } = Object.fromEntries((new FormData(e.target)).entries());

    const movieData = await put(`data/movies/${id}`, { title, description, img });
    form.reset();

    showDetails(movieData);
}

export async function loadForEdit(e) {

    showSection('edit-movie');
    const id = e.target.parentElement.parentElement.parentElement.parentElement.dataset.movieId;
    const movieData = await get(`data/movies/${id}`);


    const titleElement = document.querySelector('#edit-movie #title');
    const descriptionElement = document.querySelector('#edit-movie [name="description"]');
    const imgElement = document.querySelector('#edit-movie #imageUrl');

    form.addEventListener('submit', (e) => edit(e, movieData._id));

    //loading info for editing
    titleElement.value = movieData.title;
    descriptionElement.value = movieData.description;
    imgElement.value = movieData.img;
}
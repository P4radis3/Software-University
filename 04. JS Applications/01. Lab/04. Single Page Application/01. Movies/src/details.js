import { request } from './request.js';

export async function showDetailsView(movieID) {
    displayDetails({

        title: '',
        img: '',
        description: '',

    })

    const movie = await getMovieById(movieID);
    displayDetails(movie);

}

function displayDetails(movie) {

    const section = document.getElementById('details-view');
    section.querySelector('h1').textContent = movie.title;
    section.querySelector('img').src = movie.img;
    section.querySelector('p').textContent = movie.description;

}
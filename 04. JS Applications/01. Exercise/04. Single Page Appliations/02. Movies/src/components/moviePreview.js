import { createFullMovie } from "./movieDetails.js";

export function createMoviePreview(movieData, user) {
    const li = document.createElement('li');
    li.className = 'card mb-4';
    li.innerHTML = `<img class="card-img-top" src=${movieData.img} alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">${movieData.title}</h4>
        </div>
        ${user
            ? `<div class="card-footer">
                <a href="#/details/CUtL9j4qI0XVhn9kTUsx">
                    <button type="button" data-id="movieDetailsBtn" data-movie-id=${movieData._id} class="btn btn-info">Details</button>
                 </a>
              </div>`
            : ''}`;

    if (user) {
        li.querySelector('button').addEventListener('click', showDetails.bind(null, movieData));
    }

    return li;
}



export async function showDetails(movieData) {

    document.querySelectorAll('section').forEach(section => section.style.display = 'none');
    document.getElementById('container').appendChild(await createFullMovie(movieData));
}
import { get } from "../data/api.js";
import { onNavigate } from "../links.js";
import { isLikedByUser } from "../util.js";

export async function createFullMovie(movieData) {

  const user = JSON.parse(sessionStorage.getItem('user'));

  const likesCount = (await get('data/likes')).filter(like => like.movieId === movieData._id).length;

  const movieElement = document.createElement('section');
  movieElement.className = 'view-section';
  movieElement.id = 'movie-example';

  movieElement.dataset.movieId = movieData._id;


  movieElement.innerHTML = `
    <div class="container">
    <div class="row bg-light text-dark">
      <h1>Movie title: ${movieData.title}</h1>

      <div class="col-md-8">
        <img class="img-thumbnail" src="${movieData.img}"
          alt="Movie" />
      </div>
      <div class="col-md-4 text-center">
        <h3 class="my-3">Movie Description</h3>
        <p>${movieData.description}</p>
        ${user._id === movieData._ownerId
      ? `<a class="btn btn-danger" href="/delete">Delete</a>
          <a class="btn btn-warning" href="/edit">Edit</a>`
      : ``
    }
    ${await isLikedByUser(movieData)
      ? `<span class="enrolled-span">Liked ${likesCount}</span>`
      : `<a class="btn btn-primary" href="/like">Like</a>`}
      </div>
    </div>
  </div>`;

  movieElement.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', onNavigate);
  })

  return movieElement;
}
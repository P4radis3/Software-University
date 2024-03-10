import { get, post } from "./api.js";

export async function likeMovie(e) {
    const id = e.target.parentElement.parentElement.parentElement.parentElement.dataset.movieId;

    const userId = JSON.parse(sessionStorage.getItem('user'))._id;

    //a user cannot like his own movie
    if (userId === id) {
        return;
    }

    await post('data/likes', { movieId: id });

    const likesCount = (await get('data/likes')).filter(like => like.movieId === id).length;

    const likesEl = document.createElement('span');
    likesEl.className = 'enrolled-span';
    likesEl.textContent = `Liked ${likesCount}`;

    document.querySelector('[href="/like"]').replaceWith(likesEl);
}


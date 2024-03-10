import { get } from "./data/api.js";

export function showSection(id) {
    updateNav();

    document.querySelectorAll('section').forEach(section => section.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

export function updateNav() {
    const user = sessionStorage.getItem('user');

    document.querySelectorAll('.user').forEach(el => el.style.display = user ? 'block' : 'none');
    document.querySelectorAll('.guest').forEach(el => el.style.display = user ? 'none' : 'block');
}

export function showWelcomeMessage(email) {
    const messageElement = document.getElementById('welcome-msg');
    messageElement.textContent = `Welcome, ${email}`;
}

export async function isLikedByUser(movieData) {
    const userId = JSON.parse(sessionStorage.getItem('user'))._id;
    const movieCreatorId = movieData._ownerId;

    const likesForThisMovie = (await get(`data/likes`)).filter(like => like.movieId === movieData._id);

    return likesForThisMovie.some(like => like._ownerId === userId) || userId === movieCreatorId;
}
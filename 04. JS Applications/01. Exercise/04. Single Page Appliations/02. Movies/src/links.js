import { deleteMovie } from "./data/deleteMovie.js";
import { likeMovie } from "./data/likeMovie.js";
import { showSection } from "./util.js";
import { loadForEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { logout } from "./views/logout.js";

export const links = {
    '/': showHome,
    '/login': showSection.bind(null, 'form-login'),
    '/register': showSection.bind(null, 'form-sign-up'),
    '/logout': logout,
    '/addMovie': showSection.bind(null, 'add-movie'),
    '/edit': loadForEdit,
    '/like': likeMovie,
    '/delete': deleteMovie
};

export function onNavigate(event) {
    event.preventDefault();

    const path = event.target.pathname;
    links[path](event);
}
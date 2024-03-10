import { onNavigate } from "./links.js";
import { add } from "./views/addMovie.js";
import { showHome } from "./views/home.js";
import { login } from "./views/login.js";
import { register } from "./views/register.js";


showHome();

document.getElementById('login-form').addEventListener('submit', login);
document.getElementById('register-form').addEventListener('submit', register);

document.querySelector('#add-movie-form').addEventListener('submit', add);

document.querySelectorAll('a').forEach(link => {
    if (link.id == 'welcome-msg') {
        return;
    }
    link.addEventListener('click', onNavigate);
})
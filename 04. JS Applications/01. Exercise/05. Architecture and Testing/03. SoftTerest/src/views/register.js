import * as  api from '../api/api.js';
import { homeSection, showHome } from './home.js';

const section = document.getElementById('registerPage');

export function showRegister(context) {
    context.showSection(section);
}

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', onRegister);

async function onRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password, repeatPassword } = Object.fromEntries(formData.entries());

    console.log(email, password, repeatPassword);
    if (!email || !password || !repeatPassword) {
        alert('All input fields are required!');
        return;
    } else if (password !== repeatPassword) {
        alert('Passwords do not match');
        return;
    } else if (email.length < 3 || password.length < 3) {
        alert('Email and password must be at least 3 characters long each');
        return;
    }
    registerForm.reset();

    const data = await api.post('users/register', { email, password });
    localStorage.setItem('user', JSON.stringify(data));
    document.getElementById('root').replaceChildren(homeSection);

    (function updateNav() {
        const nav = document.querySelector('nav');
        nav.querySelectorAll('.user').forEach(el => el.style.display = 'block');
        nav.querySelectorAll('.guest').forEach(el => el.style.display = 'none');
    })();
}
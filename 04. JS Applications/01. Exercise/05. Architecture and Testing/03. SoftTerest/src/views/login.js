import * as  api from '../api/api.js';
import { homeSection, showHome } from './home.js';
const section = document.getElementById('loginPage');

export function showLogin(context) {
    context.showSection(section);
}

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', onLogin);
async function onLogin(e) {
    
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());
    if (!email || !password) {

        alert('All input fields are required!');
        return;
        
    }

    const data = await api.post('users/login', { email, password });
    localStorage.setItem('user', JSON.stringify(data));
    document.getElementById('root').replaceChildren(homeSection);
    loginForm.reset();

    (function updateNav() {

        const nav = document.querySelector('nav');
        nav.querySelectorAll('.user').forEach(el => el.style.display = 'block');
        nav.querySelectorAll('.guest').forEach(el => el.style.display = 'none');
        
    })();
}
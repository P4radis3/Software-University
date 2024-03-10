import * as api from './api/api.js';
import { ideasSection, showCatalog } from './views/catalog.js';
import { context } from './router.js';

const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', onLogout);

export async function onLogout() {

    if (localStorage.getItem('user')) {
        await api.get('users/logout');
        localStorage.removeItem('user');
        showCatalog(context);

        (function updateNav() {
            const nav = document.querySelector('nav');
            nav.querySelectorAll('.user').forEach(el => el.style.display = 'none');
            nav.querySelectorAll('.guest').forEach(el => el.style.display = 'block');
        })();
    }
}
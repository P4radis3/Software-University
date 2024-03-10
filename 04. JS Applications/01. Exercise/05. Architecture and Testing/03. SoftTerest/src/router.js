import { onLogout } from './utils.js';
import { ideasSection, showCatalog } from './views/catalog.js';

export let context = null;
export function initialize(routes) {

    const nav = document.querySelector('nav');
    nav.addEventListener('click', onNavigate);

    const context = {
        goTo,
        showSection,
        updateNav,
    };
    context = context;

    function showSection(section) {
        document.getElementById('root').replaceChildren(section);
    }

    function onNavigate(event) {
        let target = event.target;

        if (target.tagName === 'IMG') {
            target = target.parentElement;
        }

        if (target.tagName == 'A') {
            event.preventDefault();

            const url = new URL(target.href);

            goTo(url.pathname);

            if (url.pathname == '/logout') {
                onLogout();
                showCatalog(context);
            }
        }
    }

    function goTo(name) {

        const handler = routes[name];
        if (typeof handler == 'function') {
            handler(context);
        }
    }


    function updateNav() {
        const user = localStorage.getItem('user');

        nav.querySelectorAll('.user').forEach(el => el.style.display = user ? 'block' : 'none');
        nav.querySelectorAll('.guest').forEach(el => el.style.display = user ? 'none' : 'block');
    }
    return context;
}
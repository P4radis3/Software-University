import page from 'page';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import { showDashboard, showDashboardView } from './views/dashboardView.js';

const root = document.querySelector("div[data-id='root']");
const userNav = document.getElementById('user');
const guestNav = document.getElementById('guest');

page(updateContext)
page('/', updateContext, showDashboardView),
page("/dashboard", showDashboardView);

page("/create", () => console.error("create"));
page("/details:id", () => console.error("details"));
page("/edit:id", () => console.error("edit"));
page("/myFurniture", () => console.error("myFurniture"));
page("/login", () => console.error("login"));
page("/register", showRegisterView);
page("/logout", () => console.error("logout"));
page.start();
updateNav()

function renderer(page) {
    render(page, root);
}

function updateContext(context, next) {
    context.render = renderer;
    next();
}
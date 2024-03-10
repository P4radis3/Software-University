import { showHome } from "./views/home.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";

import { initialize } from "./router.js";
document.querySelector('.footer').style.display = 'block';
const routes = {
    '/': showHome,
    '/register': showRegister,
    '/login': showLogin,
    '/catalog': showCatalog,
    '/details': showDetails,
    '/create': showCreate
};

document.getElementById('views').remove();
const router = initialize(routes);
router.goTo('/');
router.updateNav();
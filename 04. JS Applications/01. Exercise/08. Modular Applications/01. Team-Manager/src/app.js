import page from './node_modules/page/page.mjs';
import { showBrowseTeam } from './view/browseTeamView.js';
import { showHome } from './view/homeView.js';
import { showLoginView } from './view/loginView.js';
import { showRegisterView } from './view/registerView.js';


page('/', showHome);
page('/home', showHome);
page('/browse-team', showBrowseTeam);
page('/my-team', () => { console.log('my team') });
page('/login', showLoginView);
page('/register', showRegisterView);
page('/logout', logout);
page('/create', () => { console.log('logout') });
page.start();


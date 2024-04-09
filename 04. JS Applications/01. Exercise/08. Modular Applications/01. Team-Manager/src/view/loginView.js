import { html } from '../../node_modules/lit-html/lit-html.js';

const loginTemp = (hasErr) => html`
    <section id="login">
        <article class="narrow">
            <header class="pad-med">
                <h1>Login</h1>
            </header>
            <form id="login-form" class="main-form pad-large">
            ${hasErr ? html`<div class="error">${hasErr}</div>` : ''}
                <label>E-mail: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <input class="action cta" type="submit" value="Sign In">
            </form>
            <footer class="pad-small">Don't have an account? <a href="#" class="invert">Sign up here</a>
            </footer>
        </article>
    </section>
`;

export function showLoginView() {
    render(loginTemp());
}

async function onsubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData.entries(event.target));

    if (!email || !password) {
        return render(loginTemp('All fields are required!'));
    }

    const userData = await userService.login({ email, password });
    userHelper.setUserData(userData);
    goTo('/home');
}
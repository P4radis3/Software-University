import { html } from "../../node_modules/lit-html/lit-html.js"
import { userService } from "../api/userService.js";
import { render } from "../common/render.js";
import { userHelper } from "../common/userHelper.js";

const registerTemp = (hasErr) => html`
    <section id="register">
        <article class="narrow">
            <header class="pad-med">
                <h1>Register</h1>
            </header>
            <form @submit=${onsubmit} id="register-form" class="main-form pad-large">
                ${hasErr ? html`<div class="error">Error message.</div>` : ''}
                <label>E-mail: <input type="text" name="email"></label>
                <label>Username: <input type="text" name="username"></label>
                <label>Password: <input type="password" name="password"></label>
                <label>Repeat: <input type="password" name="repass"></label>
                <input class="action cta" type="submit" value="Create Account">
            </form>
            <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
            </footer>
        </article>
    </section>
`;

export function showRegisterView() {
    render(registerTemp());
}

async function onsubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { username, email, password, repass } = Object.fromEntries(formData.entries(formData));
    // add regex
    /*if(!RegExp.test(email)){
        return render(registerTemp("Invalid email"));
    }*/

    if (username.length < 3 || password < 3 || password !== repass) {
        return render(registerTemp("Invalid username or password"));
    }

    userService.register({ username, email, password });
    const userData = await userService.register({ username, email, password });
    userHelper.setUserData(userData);
    goTo('/home');

}
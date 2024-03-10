import { post } from "../data/api.js";
import { showWelcomeMessage, updateNav } from "../util.js";
import { showHome } from "./home.js";

export async function register(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const { email, password, repeatPassword } = Object.fromEntries(formData.entries());

    if (email == '' || password == '' || repeatPassword == '') {
        return alert('All fields are required!');
    } else if (password !== repeatPassword) {
        return alert('Passwords must match!');
    }

    const responseData = await post('users/register', { email, password });

    sessionStorage.setItem('user', JSON.stringify(responseData));

    showHome();
    updateNav();
    showWelcomeMessage(email);
}
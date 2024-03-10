import { post } from "../data/api.js";
import { showWelcomeMessage, updateNav } from "../util.js";
import { showHome } from "./home.js";

export async function login(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const { email, password } = Object.fromEntries(formData.entries());

    if (email == '' || password == '') {
        return alert('All fields are required!');
    }

    const responseData = await post('users/login', { email, password });

    sessionStorage.setItem('user', JSON.stringify(responseData));

    showHome();
    updateNav();
    showWelcomeMessage(email);
}
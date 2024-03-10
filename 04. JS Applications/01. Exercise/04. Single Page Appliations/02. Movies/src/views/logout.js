import { get } from "../data/api.js";
import { showSection } from "../util.js";

export async function logout() {
    await get('users/logout');
    sessionStorage.removeItem('user');
    showSection('form-login');
}
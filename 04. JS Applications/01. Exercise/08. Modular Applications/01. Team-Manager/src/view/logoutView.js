import { userService } from "../api/userService";


export async function logout() {
    try {
        await userService.logout();
        alert('Successfully logged out');
        this.redirect('#/login');
    } catch (error) {
        alert(error.message);
    }
}
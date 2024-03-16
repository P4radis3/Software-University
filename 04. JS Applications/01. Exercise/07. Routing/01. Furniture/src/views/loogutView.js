import { userService } from "../service/userService"
import { userHelper } from "../utility/userHelper";

export async function showLogoutView(ctx) {
    await userService.logout();
    userHelper.clearUserData();
    ctx.updateNav('/');
}
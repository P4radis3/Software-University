import { api } from './requester.js';
const BASE = 'http://localhost:3030/';
const endPoints = {
    login: 'users/login',
    register: 'users/register',
    logout: 'users/logout'
};

async function login(data) {
    return await api.post(BASE + endPoints.login, data);
}

async function register(data) {
    return await api.post(BASE + endPoints.register, data);
}

async function logout() {
    return await api.get(BASE + endPoints.logout);
}

export const userService = { login, register, logout }
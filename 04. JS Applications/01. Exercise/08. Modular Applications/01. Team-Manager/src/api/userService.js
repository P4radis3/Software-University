import api from './requester.js';

const host = 'http://localhost:3030';
const endPoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

async function login(data) { return await api.post(host + endPoints.login, { data }); }
async function register(data) { return await api.post(host + endPoints.register, { data }); }
async function logout() { return await api.get(host + endPoints.logout); }
export const userService = { login, register, logout, }
import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllSolutions() { return await api.get(host + "/data/solutions?sortBy=_createdOn%20desc"); }
export async function addSolution(fact) { return await api.post(host + "/data/solutions", fact); }
export async function getSolutionById(id) { return await api.get(host + `/data/solutions/${id}`); }
export async function editSolutionById(id, data) { return await api.put(host + `/data/solutions/${id}`, data); }
export async function deleteSolution(id) { return await api.del(host + `/data/solutions/${id}`); }
export async function like(solutionId) { return await api.post(host + `/data/likes/`, { solutionId }); }
export async function getTotalLikesCount(solutionId) { return await api.get(host + `/data/likes?where=solutionId%3D%22${solutionId}%22&distinct=_ownerId&count`); }
export async function getUserLikesCount(solutionId, userId) { return await api.get(host + `/data/likes?where=solutionId%3D%22${solutionId}%22%20and%20_ownerId%3D%22${userId}%22&count`); }

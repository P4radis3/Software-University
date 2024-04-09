import api from './requester.js';
const host = 'http://localhost:3030';
const endPoints = { teams: '/data/teams', members: '/data/members', };

async function getAllTeams() { return await api.get(host + endPoints.teams); }
async function createNewTeam(data) { return await api.post(host + endPoints.teams, data); }
async function getSingleTeam(id) { return await api.get(host + endPoints.teams + id); }
async function editTeam(id, data) { return await api.put(`${host}${endPoints.teams}/${id}`, data); }
async function getListOfMembers() { return await api.get(host + endPoints.members); }
export const dataService = { getAllTeams, createNewTeam, getSingleTeam, editTeam }
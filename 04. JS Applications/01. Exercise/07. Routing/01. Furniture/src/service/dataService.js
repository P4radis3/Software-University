import api from '../utility/requester.js';
const BASE = 'http://localhost:3030/data';
const endPoints = {
    myFurniture: '/catalog?where',
    furniture: '/catalog?where=_ownerId%3D%22{userId}%22',
}

async function createFurniture(data) { return await api.post(BASE + endPoints.furniture, data); }
async function getAllFurniture() { return await api.get(BASE + endPoints.furniture); }
async function delFurniture(id) { return await api.get(BASE + endPoints.furniture + `/${id}`); }
async function getFurnitureDetails() { return await api.get(BASE + endPoints.furniture + `/${id}`); }
async function getMyFurniture(userId) { return await api.get(BASE + endPoints.myFurniture + `=_ownerId%3D%22${userId}%22`); }
async function updateFurniture(id, data) { return await api.put(BASE + endPoints.furniture + `/${id}`, data); }
export const dataService = { createFurniture, getAllFurniture, delFurniture, getFurnitureDetails, getMyFurniture, updateFurniture }
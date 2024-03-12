import { del, get, post, put } from './api.js';

const endpoints = {

    allCars: '/data/cars?sortBy=_createdOn%20desc',
    create: '/data/cars',
    byId: '/data/cars/',
    byName: (query) => `/data/cars?where=model%20LIKE%20%22${query}%22`

};

export async function getAllCars() {
    return get(endpoints.allCars);
}

export async function createCar(data) {
    return post(endpoints.create, data);
}

export async function getById(id) {
    return get(endpoints.byId + id);
}

export async function deleteCar(id) {
    return del(endpoints.byId + id);
}

export async function updateCar(id, data) {
    return put(endpoints.byId + id, data);
}

export function getCarsByName(query) {
    return get(endpoints.byName(query));
}
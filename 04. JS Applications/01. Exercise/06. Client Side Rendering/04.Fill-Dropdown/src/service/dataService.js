const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
import { dataApi } from './requester.js';

async function getAllOption() {
    return await dataApi.get(url);
}

async function postNew(data) {
    return await dataApi.post(url, data);
}

export const dataService = {
    getAllOption,
    postNew
}

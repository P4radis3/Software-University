import * as api from "../api/api.js";
import { context } from "../router.js";
import { showCatalog } from "./catalog.js";

const section = document.getElementById('createPage');

export function showCreate(context) {
    context.showSection(section);

    const createForm = document.querySelector('#createPage form');
    createForm.addEventListener('submit', onCreate);
}

export async function onCreate(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { title, description, imageURL } = Object.fromEntries(formData.entries());

    if (title.length < 6) {
        alert('Title must be at least 6 characters long');
        return;
    } else if (description.length < 10) {
        alert('Description must be at least 10 characters long');
        return;
    } else if (imageURL.length < 5) {
        alert('Image URL must be at least 5 characters long');
        return;
    }

    await api.post('data/ideas', {
        title,
        description,
        img: imageURL
    });

    e.target.reset();
    showCatalog(context);
}
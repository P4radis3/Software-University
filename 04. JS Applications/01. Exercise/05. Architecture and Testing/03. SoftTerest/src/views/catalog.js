import { getAllIdeas } from "../api/data.js";
import * as api from '../api/api.js';
import { context } from "../router.js";

export const ideasSection = document.getElementById('dashboard-holder');

export async function showCatalog(context) {
    context.showSection(ideasSection);

    const ideas = await getAllIdeas();

    const ideasElements = ideas.map(createIdeaPreview);
    ideasSection.replaceChildren(...ideasElements);
}

function createIdeaPreview(idea) {

    const div = document.createElement('div');
    div.className = 'card overflow-hidden current-card details';
    div.style.width = '20rem';
    div.style.height = '18rem';

    div.innerHTML = `
    <div class="card-body">
        <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src="${idea.img}" alt="Card image cap">`;


    const detailsBtn = document.createElement('a');
    detailsBtn.classList.add('btn');
    detailsBtn.href = "";
    detailsBtn.textContent = 'Details';
    detailsBtn.dataset.id = idea._id;
    detailsBtn.addEventListener('click', showDetails);

    div.appendChild(detailsBtn);

    return div;
}

async function showDetails(e) {
    e.preventDefault();

    const detailsBtn = e.target;
    const recipe = await api.get(`data/ideas/${detailsBtn.dataset.id}`);

    const element = document.createElement('div');
    element.id = 'detailsPage';
    element.className = 'container home some';

    if (!recipe) {
        recipe.innerHTML = `<h1>No ideas yet! Be the first one :)</h1>`;
    } else {
        element.innerHTML = `
        <img class="det-img" src="${recipe.img}" />
        <div class="desc">
            <h2 class="display-5">${recipe.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${recipe.description}</p>
        </div>`;
    }

    const deleteBtn = document.createElement('a');
    deleteBtn.className = 'btn detb';
    deleteBtn.href = "";
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteRecipe);

    const deleteBtnWrapper = document.createElement('div');
    deleteBtnWrapper.classList.add('text-center');
    deleteBtnWrapper.appendChild(deleteBtn);

    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user._id == recipe._ownerId) {
        element.appendChild(deleteBtnWrapper);
    }
    document.getElementById('root').replaceChildren(element);

    async function deleteRecipe(e) {
        e.preventDefault();

        console.log(detailsBtn.dataset.id);
        await api.del(`data/ideas/${detailsBtn.dataset.id}`);

        showCatalog(context);
    }
}

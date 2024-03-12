import { html, render } from "../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";
console.log(cats);

const allCatsSection = document.getElementById('allCats');

const catCardsTemplate = (cats) => html`
<ul>
    ${cats.map(cat => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${toggleStatus.bind(null, cat.id)}>Show status code</button>
            <div class="status" style="display: none" id="${cat.id}">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`)}
</ul>`;

function toggleStatus(id) {

    const statusDiv = document.getElementById(id);
    const button = statusDiv.parentElement.querySelector('.showBtn');

    if (statusDiv.style.display == 'none') {
        statusDiv.style.display = 'block';
        button.textContent = 'Hide status code';
    } else {
        statusDiv.style.display = 'none';
        button.textContent = 'Show status code';
    }
}

render(catCardsTemplate(cats), allCatsSection);
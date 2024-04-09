import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../utils.js';
import { getCarsByName } from '../data/cars.js';

const searchTemplate = (onSearch, foundCars) => html`

<section id="search">
    <div class="form">
    <h4>Search</h4>
    <form class="search-form">
        <input 
        type="text"
        name="search"
        id="search-input" 
        />
        <button @click=${onSearch} class="button-list">Search</button>
    </form>
</div>
<div class="search-result">
    ${foundCars.length > 0
        ? html`${foundCars.map((car) => foundCarCard(car))}`
        : html`<h2 class="no-avaliable">No result.</h2>`
    }

</div>
</section>
`;

const foundCarCard = (car) => html`

<div class="car">
    <img src=${car.imageUrl} alt="example1"/>
    <h3 class="model">${car.model}</h3>
    <a class="details-btn" href="/catalog/${car._id}">More Info</a>
</div>
`;

export async function searchPage(context) {
    let foundCars = [];
    const userData = getUserData();

    context.render(searchTemplate(onSearch, foundCars));

    async function onSearch(element) {

        element.preventDefault();
        const name = document.getElementById('search-input').value;
        if (name == '') {
            return alert('The field is required');
        }

        foundCars = await getCarsByName(name);
        console.log(foundCars);
        context.render(searchTemplate(onSearch, foundCars));

    }
}
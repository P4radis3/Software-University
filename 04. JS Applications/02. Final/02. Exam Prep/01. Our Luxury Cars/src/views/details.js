import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../utils.js';
import { deleteCar, getById } from '../data/cars.js';

const detailsTemplate = (car, onDelete) => html`
    <section id="details">
        <div id="details-wrapper">
        <img id="details-img" src=${car.imageUrl} alt="example1" />
        <p id="details-title">${car.model}</p>
        <div id="info-wrapper">
            <div id="details-description">
            <p class="price">Price: €${car.price}</p>
            <p class="weight">Weight: ${car.weight} kg</p>
            <p class="top-speed">Top Speed: ${car.speed} kph</p>
            <p id="car-description">${car.about}</p>
            </div>
            
            ${car.canEdit
                ? html`
                    <div id="action-buttons">
                        <a href="/catalog/${car._id}/edit" id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                    </div>
                `
                : null
            }

        </div>
        </div>
    </section>
`;

export async function detailsPage(ctx) {

    const id = ctx.params.id;
    const car = await getById(id);
    const userData = getUserData();

    if (userData) {
        if (userData._id == car._ownerId) {
            car.canEdit = true;
        }
    }

    ctx.render(detailsTemplate(car, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteCar(id);
            ctx.page.redirect('/catalog');
        }
    }
}
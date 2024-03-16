import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../service/userService.js';


const registerTemp = (onSubmit) => html`











`;

let context = null;
export function showRegisterView(ctx) {
    context = ctx;
    context.render(registerTemp(onSubmit));
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { make, model, year, description, price, img, material } = Object.fromEntries(formData);
    let error = {};
    let hasError = false
    year = Number(year);
    if (make.length < 4) {
        error.make = true
        hasError = true;
    }
    if (model.length < 4) {
        error.model = true
        hasError = true;
    }
    if (year.length < 1950 || year >= 2050) {
        error.year = true
        hasError = true;
    }
    if (description.length < 10) {
        error.description = true
        hasError = true;
    }
    if (!price || Number(price) < 0) {
        error.price = true
        hasError = true;
    }
    if (!img) {
        error.img = true
        hasError = true;
    }
    if (hasError) {
        return context.render(registerTemp(onSubmit, error, { make, model, year, description, price, img, material }))
    }

    price = Number(price);
}
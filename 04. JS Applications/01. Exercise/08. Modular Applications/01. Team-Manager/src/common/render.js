import { render } from '../../node_modules/lit-html/lit-html.js';
const main = document.querySelector("main");

export function render(template) {
    render(template, main)
}


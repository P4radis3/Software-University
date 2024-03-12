import { html, render } from '../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

document.querySelector('button').addEventListener('click', search);

const inputReference = document.getElementById('searchText');
const resultRoot = document.getElementById('result');
const townsRoot = document.getElementById('towns');

update(null);
function update(match) {
   render(ulTemplate(towns, match), townsRoot);
}

function ulTemplate(towns, match) {
   return html`<ul>${towns.map(town => createLiTemplate(town, match?.includes(town)))}</ul>`
};

function createLiTemplate(town, isActive) { return html`<li class=${isActive ? 'active' : ''}>${town}</li>` };

function search() {

   const searchText = inputReference.value;
   const match = towns.filter(t => t.toLowerCase().includes(searchText));
   update(match);
   renderMatchCount(match.length);

}

function renderMatchCount(count) {
   render(html`${count} matches found`, resultRoot);
}
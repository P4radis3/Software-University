import { html, render } from ("../node_modules/lit-html/lit-html.js");
const root = document.getElementById('root');
document.querySelector('form').addEventListener('submit', addItem);
const url = 'http://localhost:3030/jsonstore/advanced/dropdown'

onLoad();
async function onLoad() {

    const response = await fetch(url);
    const data = await response.json();
    const option = Object.values(data).map(x => optionTemplate(x));
    update(option);

}

function optionTemplate(data) {
    return html`<option values=${data._id}>${data.text}</option>`
}

function update(data) {
    render(data, root)
}


function addItem(event) {

    event.preventDefault();
    const inputRef = document.getElementById('itemText');
    const text = inputRef.value;
    inputRef.value = '';
    addItemDb({ text });

}


async function addItemDb(data){

    const response = await fetch(url, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    onLoad();
}
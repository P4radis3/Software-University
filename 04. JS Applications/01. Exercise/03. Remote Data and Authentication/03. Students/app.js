const url = 'http://localhost:3030/jsonstore/collections/students';
const form = document.querySelector('#form');
const body = document.querySelector('tbody');
window.addEventListener('load', loadStudents);
form.addEventListener('submit', submitHandler);

async function loadStudents() {

    body.innerHTML = '';
    const request = await fetch(url);
    const data = await request.json();
    Object.values(data).forEach(item => {
        let inner = '<tr>';
        inner += `<td>${item.firstName}</td>`;
        inner += `<td>${item.lastName}</td>`;
        inner += `<td>${item.facultyNumber}</td>`;
        inner += `<td>${Number(item.grade).toFixed(2)}</td>`;
        body.innerHTML += inner + '</tr>';

    });
}

async function submitHandler(e) {
    e.preventDefault();
    const first = form.elements['firstName'].value;
    const last = form.elements['lastName'].value;
    const faculty = form.elements['facultyNumber'].value;
    const grade = form.elements['grade'].value;

    if (!first || !last || !faculty || !grade) {
        return;
    }

    await fetch(url, {

        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            'firstName': first,
            'lastName': last,
            'facultyNumber': faculty,
            'grade': grade
        })
    });

    form.reset();
    loadStudents();

}
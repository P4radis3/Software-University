async function getInfo() {

    const stop = document.getElementById('stopId');
    const stopId = stop.value;
    const stopName = document.getElementById('stopName');
    const list = document.getElementById('buses');

    stopName.tabIndex = '';
    list.innerHTML = '';
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        stopName.textContent = data.name;
        appendChild(Object.entries(data.buses));

    } catch (error) {
        stopName.textContent = 'Error';
    }

    function appendChild(data) {
        for ([bus, time] of data) {
            let li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${time} minutes`;
            buses.appendChild(li);
        }
    }
}
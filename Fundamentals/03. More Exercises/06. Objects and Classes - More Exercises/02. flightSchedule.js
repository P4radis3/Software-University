function flightSchedule(input) {
    let flights = {};
    input[0].forEach(line => {
        let [numberFly, destination] = line.split(' ')
        flights[numberFly] = {
            Destination: destination,
            Status: 'Ready to fly'
        }
    });
    input[1].forEach(line => {
        let [numberFly, status] = line.split(' ');
        if (flights.hasOwnProperty(numberFly)) {
            flights[numberFly].Status = status;
        }
    });
    for (let fly in flights) {
        if (flights[fly].Status === String(input[2])) {
            console.log(flights[fly]);
        }
    }
}

function houseParty(array) {

    let guestList = [];

    array.forEach(tokens => {

        let first = tokens.split(' ');
        let names = first[0];

        if (tokens.includes('not')) {
            if (guestList.includes(names)) {
                guestList.splice(guestList.indexOf(names), 1);
            } else {
                console.log(`${names} is not in the list!`);
            }
        } else {
            if (guestList.includes(names)) {
                console.log(`${names} is already in the list!`);
            } else {
                guestList.push(names);
            }
        }
    });

    guestList.forEach(element => {
        console.log(element);
    });

}
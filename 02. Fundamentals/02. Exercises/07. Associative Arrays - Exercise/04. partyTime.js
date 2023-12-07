function partyTime(guests) {
    let array = guests.splice(0, guests.indexOf('PARTY'));
    let listOfGuests = new Map();
    listOfGuests.set('VIP', []);
    listOfGuests.set('regular', []);
    guests.splice(1, guests.length - 1).forEach(x => {
        if (array.includes(x)) { array.splice(array.indexOf(x), 1) }
    });

    listOfGuests.set('VIP', listOfGuests.get('VIP').concat(array.filter(x => !isNaN(x[0]))));
    listOfGuests.set('regular', listOfGuests.get('regular').concat(array.filter(x => isNaN(x[0]))));

    console.log(listOfGuests.get('VIP').length + listOfGuests.get('regular').length);
    [...listOfGuests].map(x => console.log(x[1].join('\n')));


}
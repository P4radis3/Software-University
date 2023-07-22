function skiHotel(input) {

    let daysTrip = Number(input[0]);
    let rooms = input[1];
    let note = input[2];
    let price = 0;
    daysTrip -= 1;

    switch(rooms){
        case "room for one person":
            price = daysTrip * 18;
            break;
            
        case "apartment":
            price = daysTrip * 25;
        if (daysTrip < 10) {
            price = 0.7 * price;
        } else if (daysTrip <= 15) {
            price = 0.65 * price;
        } else {
            price = 0.5 * price;
        } break

        case "president apartment":
            price = daysTrip * 35;
        if (daysTrip < 10) {
            price = 0.9 * price;
        } else if (daysTrip <= 15) {
            price = 0.85 * price;
        } else {
            price = 0.8 * price;
        }
    }

    if (note === "positive") {
        price += price * 0.25;
    } else if (note === "negative") {
        price -= price * 0.1;
    }

        console.log(`${(price).toFixed(2)}`);

}
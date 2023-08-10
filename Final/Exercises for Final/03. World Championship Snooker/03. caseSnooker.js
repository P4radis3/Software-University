function snooker(input) {

    let stage = input[0];
    let ticketType = input[1];
    let ticketCount = Number(input[2]);
    let photo = input[3];

    let ticketPrice = 0;
    let totalPrice = 0;

    switch (stage) {

        case "Quarter final": {
            if (ticketType === "Standard") {
                ticketPrice = 55.50;
            } else if (ticketType === "Premium") {
                ticketPrice = 105.20;
            } else if (ticketType === "VIP") {
                ticketPrice = 118.90;
            }
            break;
        }


        case "Semi final": {
            if (ticketType === "Standard") {
                ticketPrice = 75.88;
            } else if (ticketType === "Premium") {
                ticketPrice = 125.22;
            } else if (ticketType === "VIP") {
                ticketPrice = 300.40;
            }
            break;
        }


        case "Final": {
            if (ticketType === "Standard") {
                ticketPrice = 110.10;
            } else if (ticketType === "Premium") {
                ticketPrice = 160.66;
            } else if (ticketType === "VIP") {
                ticketPrice = 400;
            }
            break;
        }
    }

    totalPrice = ticketPrice * ticketCount;

    if (totalPrice > 4000) {
        totalPrice = totalPrice * 0.75;
        photo = 'N';
    } else if (totalPrice > 2500) {
        totalPrice = totalPrice * 0.9;
    }

    if (photo === 'Y') {
        totalPrice += ticketCount * 40;
    }
    console.log(totalPrice.toFixed(2));
}

snooker(["Quarter final",
    "Standard",
    "11",
    "N"])

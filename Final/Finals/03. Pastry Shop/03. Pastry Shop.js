function calculateCakePrice(input) {

    let sweetType = input[0];
    let quantity = Number(input[1]);
    let dayOfMonth = Number(input[2]);

    let pricePerCake = 0;

    switch (sweetType) {
        case "Cake":
            if (dayOfMonth <= 15) {
                pricePerCake = 24;
            } else {
                pricePerCake = 28.70;
            }
            break;

        case "Souffle":
            if (dayOfMonth <= 15) {
                pricePerCake = 6.66;
            } else {
                pricePerCake = 9.80;
            }
            break;

        case "Baklava":
            if (dayOfMonth <= 15) {
                pricePerCake = 12.60;
            } else {
                pricePerCake = 16.98;
            }
            break;
    }

    let totalPrice = pricePerCake * quantity;

    if (dayOfMonth <= 22) {
        if (totalPrice >= 100 && totalPrice <= 200) {
            totalPrice -= totalPrice * 0.15;
        }
        else if (totalPrice > 200) {
            totalPrice -= totalPrice * 0.25;
        }
    }
    if (dayOfMonth <= 15) {
        totalPrice -= totalPrice * 0.10;
    }
    
    console.log(totalPrice.toFixed(2));
}

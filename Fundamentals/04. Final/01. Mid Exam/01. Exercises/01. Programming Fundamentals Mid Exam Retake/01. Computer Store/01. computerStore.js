function computerStore(input) {

    let priceWithoutTax = 0;
    let clientType = input.pop().toLowerCase();
    let tax = 0;
    let price = 0;

    for (price of input) {

        const currentPrice = Number(price);

        if (price > 0) {
            priceWithoutTax += currentPrice;
        } else {
            console.log('Invalid price!');
            continue;
        }
    }

    if (priceWithoutTax === 0) {

        return "Invalid order!";

    }

    tax = priceWithoutTax * 0.2;
    price = tax + priceWithoutTax;


    //ClientType check;
    if (clientType === 'special') {

        price = price - (price * 0.1);

    }

    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${priceWithoutTax.toFixed(2)}$`);
    console.log(`Taxes: ${tax.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${price.toFixed(2)}$`);

}
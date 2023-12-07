function order(product, quantity) {

    let prices = {

        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00,

    }

    let total = prices[product] * quantity;
    return total.toFixed(2);

}
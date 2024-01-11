function fruit(type, grams, priceKilo) {

    let weightKilo = grams / 1000;
    let totalMoney = weightKilo * priceKilo;
    let weight = weightKilo.toFixed(2);

    let neededMoney = totalMoney.toFixed(2);
    console.log(`I need $${neededMoney} to buy ${weight} kilograms ${type}.`);

}
function petShop(input) {

    let dogFoodPrice = 2.50;
    let catFoodPrice = 4;

    let calculatedDogPrice = input[0] * dogFoodPrice;
    let calculatedCatPrice = input[1] * catFoodPrice;

    let sum = calculatedDogPrice + calculatedCatPrice;

    console.log(`${sum} lv.`)

}

petShop();
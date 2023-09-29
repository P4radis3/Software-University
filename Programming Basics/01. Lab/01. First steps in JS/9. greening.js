function greening(input) {

    let price = 7.61;

    let squareMeter = input;
    let totalSquareMeterPrice = squareMeter * price;

    let calculatedSquareMeterPrice = totalSquareMeterPrice * (18/100);

    let totalDiscount = totalSquareMeterPrice - calculatedSquareMeterPrice;

    console.log(`The final price is: ${totalDiscount} lv.`)
    console.log(`The discount is: ${calculatedSquareMeterPrice} lv.`)
}

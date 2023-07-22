function fishingBoat(input){

    let budget = Number(input[0]);
    let season = input[1];
    let numberOfPeople = Number(input[2]);

    let price = 0;

    if (season === "Spring") {
        price = 3000;
        if (numberOfPeople <= 6) {
            price = price * 0.90;
        } else if (numberOfPeople > 6 && numberOfPeople <= 11){
            price = price * 0.85;
        } else {
            price = price * 0.75;
        }
    } else if (season === "Summer" || season === "Autumn"){
        price = 4200;
        if (numberOfPeople <= 6) {
            price = price * 0.90;
        } else if (numberOfPeople > 6 && numberOfPeople <= 11) {
            price = price * 0.85;
        } else {
            price = price * 0.75;
        }
    } else {
        price = 2600;
        if (numberOfPeople <= 6) {
            price = price * 0.90;
        } else if (numberOfPeople > 6 && numberOfPeople <= 11) {
            price = price * 0.85;
        } else {
            price = price * 0.75;
        }
    }

    if (numberOfPeople % 2 === 0 && season !== "Autumn") {
        price = price * 0.95;
    }

    let difference = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left. `)
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
    }
}
function newHouse(input){

    let type = input[0]; 
    let amount = input[1] 
    let budget = input[2]; 

    let priceTag = 0;

    switch (type){

        case "Roses":
            priceTag = amount * 5;
            if (amount > 80){
                priceTag = priceTag * 0.90;
            } 
        break;

        case "Dahlias":
            priceTag = amount * 3.80;
            if (amount > 90){
                priceTag = priceTag * 0.85;
            } 
        break;

        case "Tulips":
            priceTag = amount * 2.80;
            if (amount > 80){
                priceTag = priceTag * 0.85;
            } 
        break;

        case "Narcissus":
            priceTag = amount * 3.00;
            if (amount < 120){
                priceTag = priceTag * 1.15;
            } 
        break;

        case "Gladiolus":
            priceTag = amount * 2.50;
            if (amount < 80){
                priceTag = priceTag * 1.20;
            } 
        break;
    }

    let difference = Math.abs(priceTag - budget);

    if (budget >= priceTag) {
        console.log(`Hey, you have a great garden with ${amount} ${type} and ${difference.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`)
    }
}
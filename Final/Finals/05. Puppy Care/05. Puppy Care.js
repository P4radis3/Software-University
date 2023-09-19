function puppyFood(input) {

    let foodAmountKg = Number(input[0]);
    let totalFoodGrams = foodAmountKg * 1000;

    let command = 1;
    let ate = input[command];

    let sum = 0;

    while (ate !== "Adopted") {
        let eaten = Number(ate);
        sum += eaten;

        command++;
        ate = input[command];
    }

    if (sum <= totalFoodGrams) {
        let leftovers = totalFoodGrams - sum;
        console.log(`Food is enough! Leftovers: ${leftovers} grams.`);
    } else {
        let neededFood = sum - totalFoodGrams;
        console.log(`Food is not enough. You need ${neededFood} grams more.`);
    }
}

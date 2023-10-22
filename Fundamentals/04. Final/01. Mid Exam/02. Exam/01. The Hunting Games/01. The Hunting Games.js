function theHuntingGames(input) {

    let days = Number(input.shift());
    let people = Number(input.shift());
    let totalEnergy = Number(input.shift());


    let water = Number(input.shift());
    let food = Number(input.shift());
    let totalWater = days * people * water;
    // console.log(totalWater);
    // console.log('----');
    let totalFood = days * people * food;
    // console.log(totalFood);

    let currentDay = 1;

    for (let index = 0; index < days; index++) {

        let wastedEnergy = Number(input.shift());
        totalEnergy -= wastedEnergy;
        if (totalEnergy <= 0) {
            break;
        }

        if (currentDay % 2 === 0) {
            totalWater -= totalWater * 0.3;
            totalEnergy += totalEnergy * 0.05;
        }

        if (currentDay % 3 === 0) {
            totalFood -= (totalFood / people);
            totalEnergy += totalEnergy * 0.1;
        }

        currentDay++
    }

    if (totalEnergy <= 0) {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    } else {
        console.log(`You are ready for the quest. You will be left with - ${totalEnergy.toFixed(2)} energy!`);
    }
}

function carWash(input) {

    let startingPoint = 0;

    let soap = x => x + 10;
    let water = x => x + x * 0.2;
    let vacuumCleaner = x => x + x * 0.25;
    let mud = x => x - x * 0.10;

    for (let index = 0; index < input.length; index++) {

        if (input[index] === 'soap') {
            startingPoint = soap(startingPoint);
        } else if (input[index] === 'water') {
            startingPoint = water(startingPoint);
        } else if (input[index] == 'vacuum cleaner') {
            startingPoint = vacuumCleaner(startingPoint);
        } else {
            startingPoint = mud(startingPoint);
        }
    }

    console.log(`The car is ${startingPoint.toFixed(2)}% clean.`);

}
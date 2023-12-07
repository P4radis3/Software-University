function solve(input) {

    let peopleInWagons = Number(input.shift());
    let totalWagons = input.toString().split(" ").map((x) => Number(x));



    for (let index = 0; index < totalWagons.length; index++) {
        let wagons = totalWagons[index];
        let booleanForSpaces = false;
        let booleanForPeople = false;

        if (wagons < 4 && peopleInWagons > 0) {
            for (let singleSeats = 0; singleSeats <= 3; singleSeats++) {

                peopleInWagons -= 1;
                wagons++;
                totalWagons[index] = wagons;

                if (peopleInWagons == 0 && totalWagons.some(w => w < 4)) {

                    console.log(`The lift has empty spots!`);
                    booleanForSpaces = true;
                    break;

                } else if (peopleInWagons == 0) {

                    booleanForPeople = true;
                    break;

                }
                if (wagons == 4) {
                    break;
                }
            }

            if (booleanForSpaces || booleanForPeople) {
                break;
            }
        }
    }

    if (peopleInWagons > 0 && totalWagons.every(w => w === 4)) {

        console.log(`There isn't enough space! ${peopleInWagons} people in a queue!`);

    }

    console.log(totalWagons.join(" "));

}
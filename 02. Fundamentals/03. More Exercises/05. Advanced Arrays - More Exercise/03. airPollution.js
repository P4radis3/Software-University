function airPollution(matrixes, firstForces) {

    let map = matrixes.map(rows => rows.split(' ').map(Number));
    let pollution = [];

    for (let secondForce of firstForces) {

        let [command, value] = secondForce.split(' ');

        if (command == 'breeze') {
            let firstIndex = value;

            for (let secondIndex = 0; secondIndex < 5; secondIndex++) {
                map[secondIndex][firstIndex] = Math.max(0, map[secondIndex][firstIndex] - 20);

            }
        } else if (command == 'smog') {
            let increase = value;

            for (let firstIndex = 0; firstIndex < 5; firstIndex++) {
                for (let secondIndex = 0; secondIndex < 5; secondIndex++) {
                    map[firstIndex][secondIndex] += increase;
                }
            }
        }
    }

    for (let firstIndex = 0; firstIndex < 5; firstIndex++) {
        for (let secondIndex = 0; secondIndex < 5; secondIndex++) {
            if (map[firstIndex][secondIndex] >= 50) { 
                pollution.push(`${firstIndex}-${secondIndex}`);
            }
        }
    }

    if (pollution.length > 0){

        return `Polluted areas: ${pollutedBlocks.join(', ')}`;

    } else { 

        return 'No polluted areas';

    }
}
function juiceFlavors(input) {

    let juices = {};
    let bottles = {};
    for (let line of input) {

        let [juice, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (!juices.hasOwnProperty(juice)) {

            juices[juice] = 0;

        }

        juices[juice] += quantity;

        if (juices[juice] >= 1000) {
            if (!bottles.hasOwnProperty(juice)) {

                bottles[juice] = 0;

            }

            let newBottles = Math.floor(juices[juice] / 1000);
            bottles[juice] += newBottles;
            juices[juice] -= 1000 * newBottles;

        }
    }

    for (let key in bottles) {
        console.log(`${key} => ${bottles[key]}`);
    }
}

juiceFlavors(['Orange => 2000',

    'Peach => 1432',

    'Banana => 450',

    'Peach => 600',

    'Strawberry => 549']);

// Orange => 2
// Peach => 2
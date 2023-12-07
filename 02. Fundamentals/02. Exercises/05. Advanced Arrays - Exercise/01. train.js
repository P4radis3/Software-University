function train(array) {

    let wagons = array[0].split(' ').map(Number);
    let wagonsCapacity = Number(array[1]);

    for (let index = 2; index < array.length; index++) {

        let cmd = array[index];
        let tokens = cmd.split(' ');

        if (tokens[0] == 'Add') {

            let passengers = Number(tokens[1]);
            wagons.push(passengers);

        } else {

            let passengers = Number(tokens[0]);

            for (let index = 0; index < wagons.length; index++) {

                if (wagons[index] + passengers <= wagonsCapacity) {

                    wagons[index] += passengers;
                    break;

                }
            }
        }
    }

    console.log(wagons.join(' '));

}
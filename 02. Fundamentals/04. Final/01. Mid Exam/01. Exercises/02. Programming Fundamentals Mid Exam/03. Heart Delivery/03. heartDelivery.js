function heartDelivery(input = []) {

    let houses = input.shift().split('@').map(Number);
    let cmd = input.shift();
    let index = 0;

    while (cmd !== 'Love!') {
        let token = cmd.split(' ');
        let jump = +token[1];

        index += jump;

        if (index >= houses.length) {
            index = 0;
        }

        if (houses[index] == 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            houses[index] -= 2;
            if (houses[index] == 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }

        cmd = input.shift();

    }

    console.log(`Cupid's last position was ${index}.`);

    let boolean = true;
    let counter = 0;

    for (let count of houses) {
        if (count != 0) {
            boolean = false;
            counter++;
        }
    }

    if (boolean) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${counter} places.`);
    }
}
function addAndRemove(commands) {

    let numbers = 1;
    let numbersOfArrays = [];

    for (let command of commands) {
        if (command === 'add') {

            numbersOfArrays.push(numbers);

        } else if (command === 'remove') {
            if (numbersOfArrays.length > 0) {

                numbersOfArrays.pop();

            }
        }

        numbers++;
    }

    if (numbersOfArrays.length === 0) {

        return 'Empty';
        
    } else {

        return numbersOfArrays.join(' ');

    }
}


function distinctArray(numbers) {

    let newArray = [];
    newArray[0] = numbers[0];

    for (let number of numbers) {

        if (newArray.includes(number)) {
            continue;
        } else {

            newArray.push(number);

        }
    }

    console.log(newArray.join(' '));

}


/*
function distinctArray(startingArray) {

    let secondArray = [];

    for (let index = 0; index < startingArray.length; index++) {
        if (secondArray.indexOf(startingArray[index]) === -1) {
            secondArray.push(startingArray[index]);
        }
    }

    return secondArray.join(' ');

}
*/


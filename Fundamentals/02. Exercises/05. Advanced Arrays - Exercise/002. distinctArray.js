
function distinctArray(startingArray) {

    let secondArray = [];

    for (let index = 0; index < startingArray.length; index++) {
        if (secondArray.indexOf(startingArray[index]) === -1) {
            secondArray.push(startingArray[index]);
        }
    }

    return secondArray.join(' ');

}
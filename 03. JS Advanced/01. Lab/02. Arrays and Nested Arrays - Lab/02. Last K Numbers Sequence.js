function lastKNumbers(first, second) {

    let array = [1];
    for (let index = 1; index < first; index++) {
        array.push(array.slice(-second).reduce((third, fourth) => third + fourth, 0));
    }

    return array;

}
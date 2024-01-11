function processOddNumbers(array) {

    const result = array

        .filter((array, index) => index % 2 == 1)
        .map(index => 2 * index)
        .reverse();

    console.log(result.join(' '));

}
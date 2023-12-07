function smallestTwoNumbers(array) {

    array.sort((a, b) => a - b);
    const result = array.slice(0, 2)
    return result.join(' ');

}
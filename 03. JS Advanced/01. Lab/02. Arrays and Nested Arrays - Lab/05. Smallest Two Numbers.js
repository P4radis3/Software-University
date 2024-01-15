function smallestTwoNumbers(array){

    return array.sort((x, y) => x - y).slice(0, 2).join(' ');

}
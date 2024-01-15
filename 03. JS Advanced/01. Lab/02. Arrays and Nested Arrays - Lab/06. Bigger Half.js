function biggerHalf(array){

    return array.sort((x, y) => x - y).slice(-Math.ceil(array.length / 2));

}
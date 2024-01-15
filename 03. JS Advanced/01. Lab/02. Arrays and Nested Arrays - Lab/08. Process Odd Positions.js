function processOddPositions(array){

    return array.filter((_, index) => index % 2 !== 0).map(x => x * 2).reverse();
    
}
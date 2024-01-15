function sumFirstLast(array){

    array = array.map(Number);
    return array[0] + array[array.length - 1];
    
}
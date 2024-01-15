function evenPositionElements(array){

    array = array.filter((_, index) => index % 2 === 0)
    console.log(array.join(' '));
    
}
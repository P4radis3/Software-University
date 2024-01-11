function validatyChecker(word) {
    
    return word.match(/\w+/g)
    .join(", ")
    .toLocaleUpperCase();

}
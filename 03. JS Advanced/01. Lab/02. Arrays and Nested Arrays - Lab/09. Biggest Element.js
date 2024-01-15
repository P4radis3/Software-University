function biggestElement(array){

    return array.reduce((first, second) => (first = Math.max(...second) > first ? Math.max(...second) : first), -Infinity)
    
}
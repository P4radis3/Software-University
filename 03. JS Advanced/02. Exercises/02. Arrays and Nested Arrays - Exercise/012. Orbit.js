function orbit(array) {
    
    let matrix = new Array(array[0]).fill(new Array(array[1]).fill(''))
    return matrix
        .map((first, second) => first.map((temp, third) => Math.max(Math.abs(third - array[3]), Math.abs(second - array[2])) + 1))
        .map(x => x.join(" "))
        .join("\n");

}
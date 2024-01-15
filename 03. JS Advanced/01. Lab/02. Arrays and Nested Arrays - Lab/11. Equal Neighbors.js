function equalNeighbors(array){

    let result = 0
    array.forEach(x =>
        x.reduce((first, second) => {
            if (first === second) {
                result += 1
            }
            return second
        })
    )

    for (let index = 0; index < array.length - 1; index++) {
        array[index].forEach((_, j) => {
            if (array[index][j] === array[index + 1][j]) {
                result += 1
            }
        })
    }
    
    return result

}
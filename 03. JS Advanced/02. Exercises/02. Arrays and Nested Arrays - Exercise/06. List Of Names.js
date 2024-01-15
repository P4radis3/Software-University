function listOfNames(array) {

    array = array.sort((first, second) => first.localeCompare(second))
    array.forEach((x, y) => console.log(`${y + 1}.${x}`))

}
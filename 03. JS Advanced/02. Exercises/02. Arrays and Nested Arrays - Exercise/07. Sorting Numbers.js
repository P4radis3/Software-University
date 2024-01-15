function sortingNumbers(array) {

    let index = array.length - 1
    return array

        .sort((first, second) => first - second)
        .reduce((first, fourth, _, temporary) => {
            first.push(fourth)
            first.push(temporary[index--])
            return first

        },
            []
        )

        .slice(0, array.length);

}
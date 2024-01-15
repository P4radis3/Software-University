function magicMatrices(array) {

    return [
        ...array.map(x => x.reduce((a, b) => a + b, 0)),
        ...array.reduce((first, temp, second) => {
            first.push(array.reduce((third, fourth) => third + fourth[second], 0))
            return first
        },
            []
        ),

    ].every((x, _, arr) => x === arr[0])

}
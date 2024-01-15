function extractIncreasingSubsequenceFromArray(array) {

    return array.reduce((first, second) => {
        if (second >= (first[first.length - 1] || array[0])) {

            first.push(second);

        }

        return first;

    },
        []
    )
}
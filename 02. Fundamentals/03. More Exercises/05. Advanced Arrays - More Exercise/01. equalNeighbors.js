function equalNeighbors(array) {

    let equalCounter = 0;

    for (let firstIndex = 0; firstIndex < array.length; firstIndex++) {
        let rows = array[firstIndex];

        for (let secondIndex = 0; secondIndex < rows.length; secondIndex++) {
            let columns = rows[secondIndex];


            if (firstIndex !== array.length - 1) {
                if (columns === rows[secondIndex + 1]) {
                    equalCounter++;
                }

                if (columns === array[firstIndex + 1][secondIndex]) {
                    equalCounter++;
                }
            }

            else if (columns === rows[secondIndex + 1] || columns === array[firstIndex][secondIndex + 1]) {
                equalCounter++;
            }
        }
    }

    return equalCounter;

}
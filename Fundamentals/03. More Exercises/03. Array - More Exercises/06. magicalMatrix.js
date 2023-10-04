function magicMatrices(matrix) {

    let rows = matrix[0].reduce((a, b) => a + b);
    let columns = 0;

    matrix.forEach((row) => {

        columns += row[0];
        
    });

    let result = true;

    for (let index = 0; index < matrix.length; index++) {

        let currentRows = matrix[index].reduce((acc, item) => acc + item);
        let currentColumns = 0;

        for (let j = 0; j < matrix.length; j++) {

            let num = matrix[j][index];
            currentColumns += num;

        }

        if (currentRows !== rows || currentColumns !== columns) {

            result = false;
            break;

        }
    }

    return result;

}

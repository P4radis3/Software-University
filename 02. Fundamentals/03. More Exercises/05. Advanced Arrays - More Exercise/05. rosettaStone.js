function rosettaStone(array) {

    let rows = Number(array[0]);
    let matrixes = [];
    let columns = 0;
    let counter = 0;

    for (let index = 1; index <= rows; index++) {

        counter++;
        matrixes.push(array[index].split(' ').map(Number));
    }
    
    columns = matrixes[0].length;
    counter = 0;
    let messageMatrix = [];
    let messageCol = 0;

    for (let index = rows + 1; index < array.length; index++) {

        counter++;
        messageMatrix.push(array[index].split(' ').map(Number));

    }

    messageCol = messageMatrix[0].length;
    counter = 0;

    let matrix = messageMatrix;
    let output = '';
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            matrix[row][col] += matrixes[row % rows][col % columns];

        }
    }

    for (let firstIndex = 0; firstIndex < matrix.length; firstIndex++) {
        for (let secondIndex = 0; secondIndex < matrix[firstIndex].length; secondIndex++) {
            
            let numbers = matrix[firstIndex][secondIndex] % 27;

            if (numbers != 0) {

                matrix[firstIndex][secondIndex] = String.fromCharCode(numbers + 64);

            } else {

                matrix[firstIndex][secondIndex] = ' ';

            }
        }
    }

    for (let firstIndex = 0; firstIndex < matrix.length; firstIndex++) {
        for (let secondIndex = 0; secondIndex < matrix[firstIndex].length; secondIndex++) {

            output += matrix[firstIndex][secondIndex];

        }
    }

    console.log(output);

}
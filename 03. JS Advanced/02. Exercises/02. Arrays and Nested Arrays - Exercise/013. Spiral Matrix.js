function spiralMatrix(width, height) {

    let matrix = new Array(height).fill(new Array(width).fill([]))
    matrix = matrix.map(x => x.map(y => ""))
    let [startRow, endRow, startColumn, endColumn, counter] = [0, height - 1, 0, width - 1, 0]

    while (startColumn <= endColumn && startRow <= endRow) {
        for (let index = startColumn; index <= endColumn; index++) {
            matrix[startRow][index] = ++counter
        }
        
        startRow++
        for (let index = startRow; index <= endColumn; index++) {
            matrix[index][endColumn] = ++counter
        }
        
        endColumn--
        for (let index = endColumn; index >= startColumn; index--) {
            matrix[endRow][index] = ++counter
        
        }
        endRow--
        for (let index = endRow; index >= startRow; index--) {
            matrix[index][startColumn] = ++counter
        
        }
        startColumn++
    }

    return matrix.map(x => x.join(" ")).join("\n");

}

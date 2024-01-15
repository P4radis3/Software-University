function diagonalAttack(array) {

    array = array.map(x => x.split(" ").map(Number));
    let getDiagSum = array => array.reduce((first, second, index) => first + second[index], 0);
    let mapToSum = (array, sum) => array.map((x, i) => x.map((y, j) => (j === i || j === x.length - i - 1 ? y : sum)))
    let print = array => array.map(x => x.join(" ")).join("\n");

    let [reversed, result] = [array.reverse(), array.reverse()];

    return getDiagSum(result) === getDiagSum(reversed)
        ? print(mapToSum(result, getDiagSum(result)))
        : print(result)

}
function stringLength(firstArray, secondArray, thirdArray){

    let sumLength;
    let averageLength;

    let firstLength = firstArray.length;
    let secondLength = secondArray.length;
    let thirdLength = thirdArray.length;

    sumLength = firstLength + secondLength + thirdLength;
    averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);

}
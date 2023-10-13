function searchForANumber(firstArray, secondArray) {

    let firstNumber = secondArray[0];
    let secondNumber = secondArray[1];
    let numberToSearch = secondArray[2];

    let elements = firstArray.slice(0, firstNumber);
    elements.splice(0, secondNumber);
  
    let count = elements.filter(number => number === numberToSearch).length;
    return `Number ${numberToSearch} occurs ${count} times.`;
  
}
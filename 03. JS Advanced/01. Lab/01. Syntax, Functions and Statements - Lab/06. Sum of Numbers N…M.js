function sumNumbersInRange(n, m) {

    let firstNumber = Number(n);
    let secondNumber = Number(m); 
    let result = 0;

    for (let index = firstNumber; index <= secondNumber; index++) {
        
        result += index;

    }

    return result;

}

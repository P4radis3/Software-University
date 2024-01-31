function fibonacci() {

    let firstNumber = 0;
    let secondNumber = 1;

    return function () {

        let result = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = result;
        return firstNumber;

    }
}

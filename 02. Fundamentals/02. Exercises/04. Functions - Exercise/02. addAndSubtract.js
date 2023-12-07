function addSubtract(num1, num2, num3) {

    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let firstResult = sum(num1, num2);
    let secondResult = subtract(firstResult, num3);
    console.log(secondResult)

}
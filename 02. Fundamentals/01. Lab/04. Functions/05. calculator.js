function calculation(nOne, nTwo, operation) {

    let words = ['multiply', 'add', 'divide', 'subtract'];
    let signs = ["*", "+", "/", "-"];

    let calc = nOne + signs[words.indexOf(operation)] + nTwo;
    return eval(calc);

}
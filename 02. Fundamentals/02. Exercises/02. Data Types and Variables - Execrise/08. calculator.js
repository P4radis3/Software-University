function calculator(number, operator, secondNumber) {

    let operatorAsString = String(operator);

    let final = 0;

    if (operatorAsString == '+'){
        final = number + secondNumber; 
    } else if (operatorAsString == '-'){
        final = number - secondNumber; 
    } else if (operatorAsString == '/'){
        final = number / secondNumber; 
    } else if (operatorAsString == '*'){
        final = number * secondNumber; 
    } 

    console.log(final.toFixed(2));

}

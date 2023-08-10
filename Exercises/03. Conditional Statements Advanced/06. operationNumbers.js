function operationNumbers(input){

    let n1 = Number(input[1]);
    let n2 = Number(input[2]);
    let operator = input[3];
    let result = 0;

    if (operator === "+" || operator === "-" || operator === "*"){
        if (operator === "+"){
            result = n1 + n2;
        } else if (operator === "-"){
            result = n1 - n2;
        } else {
            result = n1 * n2;
        }
    
        if (result % 2 === 0){
            console.log(`${n1} ${operator} ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
        }
    } else if (n2 === 0){
        console.log(`Cannot divide ${n1} by zero`);
    } else if (operator === "/"){
        result = n1 / n2;
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    } else {
        result = n1 % n2;
        console.log(`${n1} % ${n2} = ${result}`);
    }
}
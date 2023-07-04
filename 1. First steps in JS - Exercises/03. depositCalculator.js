function calculator(input) {

    let depositSum = Number(input[0]);
    let period = Number(input[1]);
    let InterestRate = Number(input[2]);

    let finalSum = depositSum + period * ((depositSum * InterestRate / 100 ) / 12 );
    
    console.log(finalSum)

}

calculator()
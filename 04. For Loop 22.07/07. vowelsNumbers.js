function vowelsNumbers(input){

    let numAsString = input[0];
    let sum = 0;


    for(let i = 0; i < numAsString.length; i++){
        let character = Number(numAsString[i]); 
        sum = sum + character;
    }
        console.log("The sum of the digits is:" + sum);
}

vowelsNumbers([1234])
function equalSumsEvenOddPosition(input){

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let printer = "";

    for(let input = firstNumber; input <= secondNumber; input++){
        let currentNumber = "" + input;
        
        let odd = 0;
        let even = 0;

            for(let j = 0; j < currentNumber.length; j++){
                let current = Number(currentNumber.charAt(j));
                if(j % 2 === 0){
                    even += current;
                } else {
                    odd += current;
                }
        }
            if (odd === even){
                printer += `${input} `;
            } 
    }
    console.log(printer);
}

equalSumsEvenOddPosition(["123456", "124000"])
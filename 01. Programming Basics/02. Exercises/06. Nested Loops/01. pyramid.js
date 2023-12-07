function pyramid(input){
    
    let number = Number(input[0]);
    let printer = 1;
    let finish = false

    for(let row = 1; row <= number; row++){
        let logger = "";
        for(let col = 1; col <= row; col++){
            logger += `${printer} `;
                if(printer === number){
                    finish = true;
                    break;
                }
            printer++;
        }
        console.log(logger);
        if(finish){
            break
        }
    }
}

pyramid('15')
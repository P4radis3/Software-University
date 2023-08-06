function specialNumbers(input){

    let number = Number(input[0]);

    for(let x1 = 1; x1 < 9; x1++){
        if(number % x1 === 0){
            for(let x2 = 1; x2 < 9; x2++){
                if(number % x2 === 0){
                    for(let x3 = 1; x3 < 9; x3++){
                        if(number % x3 === 0){
                            for(let x4 = 1; x4 < 9; x4++){
                                if(number % x4 === 0){
                                    console.log(...`${x1}${x2}${x3}${x4} `);
                                } 
                            }
                        }
                    }
                }
            }
        }
    }
}

specialNumbers((["3"]))
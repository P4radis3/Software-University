function sumOfTwoNumbers(input){

    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNumber = Number(input[2]);
    let isFound = false;
    let counter = 0;

    for (let x = startInterval; x <= endInterval; x++){
        for (let y = startInterval; y <= endInterval; y++){
            counter++;
                if(x + y === magicNumber){
                    console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`);
                        isFound = true;
                        break;
                }
        }

        if (isFound){
            break;
        }
    }
        if (!isFound){
            console.log(`${counter} combinations - neither equals ${magicNumber}`)
        }
    }
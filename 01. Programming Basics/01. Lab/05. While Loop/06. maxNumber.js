function maxNumber(input){

    let index = 0;
    let maxNumber = Number.MIN_SAFE_INTEGER;

    let string = input[index]; 
    index++;

    while(string !== "Stop"){
        let number = Number(string); 

        if(maxNumber < number){
            maxNumber = number;
        }

        string = input[index];
        index++;

    }

    console.log(maxNumber)
}
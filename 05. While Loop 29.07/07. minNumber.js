function minNumber(input){

    let index = 0;
    let maxNumber = Number(input[1]);

    let string = input[index]; 
    index++;

    while(string !== "Stop"){
        let number = Number(string); 

        if(maxNumber > number){
            maxNumber = number;
        }

        string = input[index];
        index++;

    }

    console.log(maxNumber)
}

minNumber(["100",
"99",
"80",
"70",
"Stop"])

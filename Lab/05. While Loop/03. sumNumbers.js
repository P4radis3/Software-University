function sumNumbers(input){

    let number = 0;
    let neededNumber = Number(input[number]);
    number++; 

    let total = 0;

    while(total < neededNumber){
        let current = Number(input[number]);
        number++

        total += current;
    }

        console.log(total);

}

sumNumbers(["100",
"10",
"20",
"30",
"40"])

function numbersDivisibleByNine(input){

    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let sum = 0;
    let numbers = "";

    for (let i = startInterval; i <= endInterval; i++){
        if(i % 9 === 0){
            sum += i;
            numbers += i + "\n";
        }
    }

    console.log(`The sum: ${sum}`);
    console.log(numbers)

}

numbersDivisibleByNine((["100", "200"]))
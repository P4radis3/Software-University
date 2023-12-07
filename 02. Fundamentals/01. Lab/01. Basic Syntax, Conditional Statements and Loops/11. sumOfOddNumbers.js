function sumOfOddNumbers(numbers){

    let sum = 0;
    let counter = 0;

    for (let index = 1; counter < numbers; index += 2){
        console.log(index);
        sum += index;
        counter++;
    }

    console.log(`Sum: ${sum}`);

}
function printing(start, end){

    let numberString = '';
    let sum = 0;

    for (let num = start; num <= end; num++){
        numberString += num + ' ';
        sum += num;
    }

    console.log(numberString);
    console.log(`Sum: ${sum}`);

}




// function triangle(numbers) {
//     for (let index = 1; index <= numbers; index++) {
//         let rows = '';


//         for (let j = 1; j <= index; j++) {
//             rows += j + ' ';
//         }
//         console.log(rows);
//     }
// }
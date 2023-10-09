function oddAndEven(number){

    let even = 0;
    let odd = 0;

    let numberAsString = number.toString();

    for (let character of numberAsString){

        let digits = Number(character);

        if (digits % 2 == 0){

            even += digits;

        } else {

            odd += digits;

        }
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`);

}
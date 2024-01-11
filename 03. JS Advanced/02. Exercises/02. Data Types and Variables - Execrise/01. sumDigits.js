function sumDigits(num) {

    let numAsString = String(num);

    for (let index = 0; index < numAsString.length; index++) {
        console.log(numAsString[index]);
        sum += numAsString[index];
    }

    console.log(sum);

}
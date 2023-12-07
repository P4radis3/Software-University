function sumEvenNumbers(array) {

    for (let index = 0; index < array.length; index++) {

        array[index] = Number(array[index]);

    }

    let total = 0;

    for (let number of array) {
        if (number % 2 == 0) {
            total += number;
        }
    }

    console.log(total);

}
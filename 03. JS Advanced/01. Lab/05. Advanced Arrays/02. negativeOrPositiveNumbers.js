function negativeOrPositiveNumbers(array) {

    const result = [];

    for (let index = 0; index < array.length; index++) {

        if (array[index] < 0) {

            result.unshift(array[index]);

        } else {

            result.push(array[index]);

        }

    }

    console.log(result.join('\n'));

}
function condenseArrayToNumber(array) {

    while (array.length > 1) {

        let condensed = [];
        for (let index = 0; index < array.length - 1; index++) {

            condensed.push(array[index] + array[index + 1]);

        }

        array = condensed;

    }

    console.log(array);

}
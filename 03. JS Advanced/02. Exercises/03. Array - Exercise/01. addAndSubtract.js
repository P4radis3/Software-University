function addAndSubtract(array) {

    let originalSum = 0;
    let modifiedSum = 0;

    let modified = [];

    for (let index = 0; index < array.length; index++) {

        if (array[index] % 2 === 0) {

            modified.push(array[index] + index);
        } else {

            modified.push(array[index] - index);

        }

        originalSum += array[index];
        modifiedSum += modified[index];
    }

    console.log(modified);
    console.log(originalSum);
    console.log(modifiedSum);

}
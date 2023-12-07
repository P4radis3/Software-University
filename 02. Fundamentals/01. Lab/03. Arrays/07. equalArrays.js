function equalArrays(array1, array2) {

    let equals = 0;

    for (let index = 0; index < array1.length; index++) {

        if (array1[index] !== array2[index]) {

            console.log(`Arrays are not identical. Found difference at ${index} index`);
            return;

        }

        equals += Number(array1[index]);
    }

    console.log(`Arrays are identical. Sum: ${equals}`);
}

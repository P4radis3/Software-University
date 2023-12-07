function reverseInPlace(array) {

    for (let index = 0; index < array.length / 2; index++) {

        let first = array[index];

        let previousIndex = array.length - 1 - index;

        array[index] = array[previousIndex];

        array[previousIndex] = first;

    }

    console.log(array.join(' '));

}
function commonElements(array1, array2) {

    for (let elements of array1) {

        if (array2.includes(elements)) {
            
            console.log(elements);

        }
    }
}
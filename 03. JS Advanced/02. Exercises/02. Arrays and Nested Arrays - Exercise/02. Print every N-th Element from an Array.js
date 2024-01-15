function printEveryNthElementFromAnArray(array, first) {

    let result = [];
    for (let index = 0; index < array.length; index += first) {
        
        result.push(array[index]);

    }

    return result;

}
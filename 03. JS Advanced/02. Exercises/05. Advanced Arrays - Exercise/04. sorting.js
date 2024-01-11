function sorting(array) {

    let result = [];
    firstArray = array.sort((a, b) => a - b);

    while (firstArray.length !== 0) {

        result.push(firstArray[firstArray.length - 1] && array.pop());
        result.push(firstArray[0]) && array.shift();
    }

    console.log(result.join(' '));

}
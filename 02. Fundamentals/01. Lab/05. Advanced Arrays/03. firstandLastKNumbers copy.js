function firstAndLastKNumbers(input) {

    let counter = input[0];
    let firstArray = input.slice(1);
    let secondArray = input.slice(1);

    const firstResult = firstArray.splice(0, counter);
    const secondResult = secondArray.splice(secondArray.length - counter);

    console.log(firstResult.join(' '));
    console.log(secondResult.join(' '));

}
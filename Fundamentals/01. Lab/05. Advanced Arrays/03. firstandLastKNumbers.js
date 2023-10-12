function firstAndLastKNumbers(input) {

    const counter = input[0];
    const firstArray = input.slice(1);
    const secondArray = input.slice(1);

    const firstResult = firstArray.splice(0, counter);
    const secondResult = secondArray.splice(secondArray.length - counter);

    console.log(firstResult.join(' '));
    console.log(secondResult.join(' '));

}
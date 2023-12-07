function solve(input) {

    let array = input[0]
    .split(' ')
    .map(Number);

    for (let index = 1; index < input.length; index++) {

        let [givenCommand, firstIndex, secondIndex] = input[index].split(' ');
        firstIndex = Number(firstIndex);
        secondIndex = Number(secondIndex);

        if (givenCommand === 'swap') {
            let firstNumber = array[firstIndex];
            let secondNumber = array[secondIndex];
            array[firstIndex] = secondNumber;
            array[secondIndex] = firstNumber;
        }
        if (givenCommand === 'multiply') {
            let firstNumber = array[firstIndex];
            let secondNumber = array[secondIndex];
            array[firstIndex] = firstNumber * secondNumber;
        }
        if (givenCommand === 'decrease') {

            array = array.map(element => element - 1);

        }
    }

    return array.join(', ');
}
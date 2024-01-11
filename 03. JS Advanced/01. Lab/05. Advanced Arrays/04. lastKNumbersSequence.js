function lastKNumbersSequence(firstNumber, secondNumber) {

    let result = [1];

    for (let index = 1; index < firstNumber; index++) {

        let startingIndex = Math.max(0, index - secondNumber);
        let currentIndex = result.slice(startingIndex, startingIndex + secondNumber).reduce((a, b) => a + b, 0);
        result.push(currentIndex);

    }

    console.log(result.join(' '));

}
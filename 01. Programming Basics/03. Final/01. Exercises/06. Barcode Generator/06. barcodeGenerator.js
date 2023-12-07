function printNumbers(firstNumber, secondNumber) {
    let numbers = "";

    for (let i = firstNumber[0]; i <= secondNumber[0]; i++) {
        if (i % 2 !== 0) {
            for (let j = firstNumber[1]; j <= secondNumber[1]; j++) {
                if (j % 2 !== 0) {
                    for (let k = firstNumber[2]; k <= secondNumber[2]; k++) {
                        if (k % 2 !== 0) {
                            for (let m = firstNumber[3]; m <= secondNumber[3]; m++) {
                                if (m % 2 !== 0) {
                                    numbers += `${i}${j}${k}${m} `;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(numbers);
}

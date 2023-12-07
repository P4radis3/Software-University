function magic(firstNumber, secondNumber) {

    for (let index = 0; index < firstNumber.length - 1; index++) {

        for (let j = index + 1; j < firstNumber.length; j++) {

            if (Number(firstNumber[index]) + Number(firstNumber[j]) === Number(secondNumber)) {
                console.log(firstNumber[index] + ` ` + firstNumber[j]);

            }
        }
    }
}
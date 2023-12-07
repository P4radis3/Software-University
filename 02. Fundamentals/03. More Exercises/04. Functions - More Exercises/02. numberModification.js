
function modificateNumber(number) {
    let numbersToBeFound = number.toString();
    let calculations = 0;

    let appends = n => (numbersToBeFound += n);

    while (calculations / numbersToBeFound.length <= 5) {

        for (let index = 0; index < numbersToBeFound.length; index++) {
            let secondNumberToBeFound = Number(numbersToBeFound[index]);
            calculations += secondNumberToBeFound;
        }

        if (calculations / numbersToBeFound.length <= 5) {

            appends(9);
            calculations = 0;

        }
    }

    console.log(numbersToBeFound);

}

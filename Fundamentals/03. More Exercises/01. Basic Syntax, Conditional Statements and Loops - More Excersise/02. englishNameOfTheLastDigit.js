function englishNameOfTheLastDigit(numberAsDigit) {

    let input = numberAsDigit % 10;

    if (input < 0) {
        input = Math.abs(input);
    }

    let englishNameOfDigit = '';

    switch (inputtedDigit) {

        case 0:
            englishNameOfDigit = 'zero';
            break;

        case 1:
            englishNameOfDigit = 'one';
            break;

        case 2:
            englishNameOfDigit = 'two';
            break;

        case 3:
            englishNameOfDigit = 'three';
            break;

        case 4:
            englishNameOfDigit = 'four';
            break;

        case 5:
            englishNameOfDigit = 'five';
            break;

        case 6:
            englishNameOfDigit = 'six';
            break;

        case 7:
            englishNameOfDigit = 'seven';
            break;

        case 8:
            englishNameOfDigit = 'eight';
            break;

        case 9:
            englishNameOfDigit = 'nine';
            break;

    }
    console.log(englishNameOfDigit);
}

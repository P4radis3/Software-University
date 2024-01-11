function passwordValidator(password) {

    let checkForLength = false;
    let checkForLettersAndDigits = false;
    let checkForTwoDigits = false;
    let arrayedPassword = password.split("");
    let array = arrayedPassword.length;
    let number = 0;

    if (array >= 6 && array <= 10) {
        checkForLength = true;
    }
    for (let index = 0; index < array; index++) {

        let currentCharacter = arrayedPassword[index];
        let currentAsciiCharacter = currentCharacter.charCodeAt();

        if (currentAsciiCharacter >= 48 && currentAsciiCharacter <= 57) {

            number++;
            if (number >= 2) {
                checkForTwoDigits = true;

            }
        }

        if (

            (currentAsciiCharacter >= 48 && currentAsciiCharacter <= 57) ||
            (currentAsciiCharacter >= 65 && currentAsciiCharacter <= 90) ||
            (currentAsciiCharacter >= 97 && currentAsciiCharacter <= 122)

        ) {

            checkForLettersAndDigits = true;

        } else {

            checkForLettersAndDigits = false;
            break;

        }
    }

    if (checkForLength && checkForTwoDigits && checkForLettersAndDigits) {

        console.log(`Password is valid`);

    }
    if (!checkForLength) {

        console.log("Password must be between 6 and 10 characters");

    }

    if (!checkForLettersAndDigits) {

        console.log("Password must consist only of letters and digits");

    }

    if (!checkForTwoDigits) {

        console.log("Password must have at least 2 digits");

    }
}
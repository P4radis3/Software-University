function threeLetters(numberInput) {

    const number = Number(numberInput);

    function asciLetter(number) {
        return String.fromCharCode(number + 97)
    }

    for (let index = 0; index < number; index++) {
        for (let j = 0; j < number; j++) {
            for (let k = 0; k < number; k++) {
                console.log(`${asciLetter(index)}${asciLetter(j)}${asciLetter(k)}`);
            }
        }
    }
}
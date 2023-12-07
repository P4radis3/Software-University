function charactersInRange(character1, character2) {

    let firstCharacter = character1.charCodeAt(0);
    let secondCharacter = character2.charCodeAt(0);

    let min = Math.min(firstCharacter, secondCharacter);
    let max = Math.max(firstCharacter, secondCharacter);


    let result = '';

    for (let current = min + 1; current < max; current++){
        let currentCharacter = String.fromCharCode(current);
        result += currentCharacter + ' ';
    }

    console.log(result);

}
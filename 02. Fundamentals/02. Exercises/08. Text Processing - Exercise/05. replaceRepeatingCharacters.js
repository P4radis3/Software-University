function replaceRepeatingCharacters(string) {

    let notRepeating = '';
    let previous = '';

    for (let currentCharacter of string){
        if(currentCharacter !== previous){
            notRepeating += currentCharacter;
            previous = currentCharacter;
        }
    }

    console.log(notRepeating);

}
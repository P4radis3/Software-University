function asciiSumator(input) {

    let [firstCharacter, secondCharacter, string, sum] = [input[0], input[1], input[2], 0];

    let start = Math.min(firstCharacter.charCodeAt(0), secondCharacter.charCodeAt(0));
    let end = Math.max(firstCharacter.charCodeAt(0), secondCharacter.charCodeAt(0));

    for (let index = 0; index < string.length; index++) {

        let current = string.charCodeAt(index);
        if (current > start && current < end) {

            sum += current;

        }
    }

    console.log(sum);

}
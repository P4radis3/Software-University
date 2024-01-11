function passwordGenerator(input) {

    let [pass, word, vowels] = [(input[0] + input[1]).split(''), input[2].toUpperCase(), ['a', 'e', 'i', 'o', 'u']];
    let index = 0;

    pass.forEach((first, second) => {

        index = index % word.length;
        vowels.includes(first.toLowerCase()) ? [pass[second] = word[index], index += 1]: null;

        }
    )

    console.log(`Your generated password is ${pass.reverse().join('')}`)

}

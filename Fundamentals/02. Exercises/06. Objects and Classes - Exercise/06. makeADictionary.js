function makeADictionary(array) {

    class Terms {
        constructor(words, definitions) {
            this.words = words;
            this.definitions = definitions;
        }
    }

    let words = [];
    let definitions = [];
    array.forEach(element => {
        let currentTerms = JSON.parse(element);
        let currentWord = Object.keys(currentTerms)[0];
        let currentDefinition = Object.values(currentTerms)[0];
        let word = words.indexOf(currentWord);
        if (word > -1) {
            definitions[word] = currentDefinition;
        } else {
            word.push(currentWord);
            definitions.push(currentDefinition);
        }
    });

    let terms = [];

    for (let index = 0; index < words.length; index++) {
        terms.push(new Terms(words[index], definitions[index]));
    }

    terms.sort((a, b) => a.word.localeCompare(b.word));
    terms.forEach(element => {
        console.log(`Term: ${element.word} => Definition: ${element.definition}`);

    })
}
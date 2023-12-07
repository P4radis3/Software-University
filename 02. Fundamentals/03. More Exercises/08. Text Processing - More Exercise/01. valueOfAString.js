function valueOf(str) {

    let sum = 0;
    let word = str.shift().split('')
        .filter(x => x.charCodeAt(x) >= 65 && x.charCodeAt(x) <= 90 || x.charCodeAt(x) >= 97 && x.charCodeAt(x) <= 122);

    let command = str.shift().split('').join('');

    if (command === 'LOWERCASE') {

        word = word.filter(x => x.charCodeAt(x) >= 97 && x.charCodeAt(x) <= 122);
        for (let element of word) {

            element = element.charCodeAt();
            sum += element;

        }
    }

    if (command === 'UPPERCASE') {

        word = word.filter(x => x.charCodeAt(x) >= 65 && x.charCodeAt(x) <= 90);
        for (let element of word) {

            element = element.charCodeAt();
            sum += element;
            
        }
    }

    return `The total sum is: ${sum}`;

}
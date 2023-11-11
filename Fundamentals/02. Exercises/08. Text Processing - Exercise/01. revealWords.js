function revealWords(...input) {
    let words = input[0];
    let text = input[1].split(' ');
    let collection = '';

    for (let index = 0; index < text.length; index++) {
        if (text[index].includes('*')) {
            let length = text[index].length;
            words.split(', ').forEach(elements => elements.length == length ? text[index] = elements : null);
        }

        collection += text[index] + ' ';
    }

    return collection;
}
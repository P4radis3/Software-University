function hardWord(array) {

    let [letter, wordsArray] = array;
    let words = letter.split(' ');
    let missed = words.filter(word => word.includes('_'));

    for (let slot of missed) {
        if (!slot.endsWith('_')) {
            slot = slot.slice(0, slot.length - 1);
        }

        let filled = wordsArray.find(word => word.length == slot.length);
        letter = letter.replace(slot, filled);
    }

    console.log(letter);

}
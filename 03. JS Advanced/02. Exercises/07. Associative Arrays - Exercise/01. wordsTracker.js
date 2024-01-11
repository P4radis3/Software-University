function wordsTracker(array) {

    let words = array.shift().split(' ');
    let occurrences = {};

    for (let searched of words) {
        occurrences[searched] = 0;
    }

    for (let searched of array) {
        if (searched in occurrences) {
            occurrences[searched]++;
        }
    }

    let entries = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);
    for (let [word, timeOfRepeat] of entries) {
        console.log(`${word} - ${timeOfRepeat}`);
    }

}
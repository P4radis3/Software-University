function treasureFinder(array) {

    let secret = array.shift().split(' ').map(Number);
    let secretLength = secret.length;

    let current = array.shift();
    while (current !== 'find') {

        let text = current.split('').map((x, i) => String.fromCharCode(x.charCodeAt(0) - secret[i % secretLength])).join('');
        let [item, loc] = [text.split('&')[1], text.split('<')[1].replace('>', '')]

        console.log(`Found ${item} at ${loc}`);
        current = array.shift();

    }
}
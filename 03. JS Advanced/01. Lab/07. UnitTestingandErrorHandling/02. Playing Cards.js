function playingCards(face, suit) {

    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['S', 'H', 'D', 'C'];
    if (!faces.includes(face)) {

        throw new Error('Invalid face!');

    }

    if (!suits.includes(suit)) {

        throw new Error('Invalid suit!');

    }

    let suitToChar = {

        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'

    }

    return {
        face, suit,
        toString() {

            return `${face}${suitToChar[suit]}`;

        }
    }
}
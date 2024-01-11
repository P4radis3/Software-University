function solve(array) {
    let players = {};
    let cards = {

        power: { "J": 11, "Q": 12, "K": 13, "A": 14, },
        type: { "S": 4, "H": 3, "D": 2, "C": 1, }

    }

    array.forEach(play => {

        let [player, cards] = play.split(": ");

        if (!players[player]) {
            players[player] = new Set(cards.split(", "));
        } else {
            cards.split(", ").forEach((card) => {
                players[player].add(card);
            })
        }

    });

    Object.keys(players).forEach(key => {

        console.log(`${key}: ${totalPower(players[key])}`);

    });

    function totalPower(cardSet) {
        let totalSum = 0;

        cardSet.forEach((card) => {
            let tokens = card.split("");
            let color = tokens.pop();
            let value = tokens.join('');
            let players = 0;

            if (!cards.power[value]) {
                players = Number(value);
            } else {
                players = cards.power[value];
            }

            totalSum += players * (cards.type[color]);

        })

        return totalSum;

    }
}
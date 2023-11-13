function counterStrike(input) {

    let wonGames = 0;
    let hpOfCharacter = Number(input.shift());

    for (let givenCmd of input) {

        if (givenCmd !== 'End of battle') {

            let energy = Number(givenCmd);
            if (hpOfCharacter - energy < 0) {
                console.log(`Not enough energy! Game ends with ${wonGames} won battles and ${hpOfCharacter} energy`);
                return;
            }

            hpOfCharacter -= energy;
            wonGames++;

        } else {
            console.log(`Won battles: ${wonGames}. Energy left: ${hpOfCharacter}`);
        }

        if (wonGames % 3 === 0) {

            hpOfCharacter += wonGames;

        }
    }
}
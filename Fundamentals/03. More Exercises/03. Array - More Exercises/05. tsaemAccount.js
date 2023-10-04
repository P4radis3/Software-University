function tseamAccount(input) {

    let games = input[0].split(' ');
    for (let index = 1; index < input.length; index++) {

        let current = input[index].split(' ');
        let command = current[0];
        let newGame = current[1];

        if (command === 'Play') {
            break;

        } else if (command === "Install") {
            let gameCounter = 0;

            for (let i = 0; i < games.length; i++) {
                if (games[i] === newGame) {

                    gameCounter++;
                    break;

                }
            }

            if (gameCounter === 0) {

                games.push(newGame);

            }
        } else if (command === 'Uninstall') {
            for (let i = 0; i < games.length; i++) {
                if (games[i] === newGame) {

                    games.splice(i, 1);
                    break;

                }
            }
        } else if (command === 'Update') {
            for (let i = 0; i < games.length; i++) {
                if (games[i] === newGame) {

                    games.splice(i, 1);
                    games.push(newGame);

                }
            }
        } else if (command === 'Expansion') {

            let expansion = newGame.split('-');
            let game = expansion[0];

            for (let i = 0; i < games.length; i++) {
                if (games[i] === game) {

                    let expansionOfGame = expansion.join(':');
                    games.splice(i + 1, 0, expansionOfGame);
                    break;

                }
            }
        }
    }

    console.log(games.join(' '));

}
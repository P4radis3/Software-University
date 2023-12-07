function dungeonDark(array) {
    let dungeon = array[0].split('|');
    let health = 100;
    let coins = 0;
    let counterRooms = 0;
    let allCoins = 0;

    for (let i = 0; i < dungeon.length; i++) {
        let currentRoom = dungeon[i].split(' ');
        let command = currentRoom[0];
        let numbers = Number(currentRoom[1]);
        counterRooms++;

        if (command === 'potion') {

            if (health + numbers > 100) {
                numbers = 100 - health;
                health = 100;
            } else {
                health += numbers;
            }
            console.log(`You healed for ${numbers} hp.`);
            console.log(`Current health: ${health} hp.`);


        } else if (command === 'chest') {
            coins = Number(numbers);
            allCoins += Number(numbers);
            console.log(`You found ${coins} coins.`);

        } else {
            health -= Number(numbers);
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${counterRooms}`);

                return;
            }

        }
    }

    console.log(`You've made it!`);
    console.log(`Coins: ${allCoins}`);
    console.log(`Health: ${health}`);
}
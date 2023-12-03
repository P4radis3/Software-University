function pianist(input) {

    let catalog = {};
    let music = Number(input.shift());

    for (let index = 0; index < music; index++) {
        let [name, composer, key] = input.shift().split('|');

        catalog[name] = {
            composer,
            key
        }
    }

    while (input[0] != 'Stop') {

        let token = input.shift().split('|');
        let cmd = token[0];
        let name = token[1];

        if (cmd == 'Add') {
            if (catalog[name] != undefined) {

                console.log(`${name} is already in the collection!`);

            } else {

                catalog[name] = {
                    composer: token[2],
                    key: token[3]
                };

                console.log(`${name} by ${token[2]} in ${token[3]} added to the collection!`);

            }
        } else if (cmd == 'Remove') {
            if (catalog[name] == undefined) {

                console.log(`Invalid operation! ${name} does not exist in the collection.`);

            } else {

                delete catalog[name];
                console.log(`Successfully removed ${name}!`);

            }

        } else if (cmd == 'ChangeKey') {
            if (catalog[name] == undefined) {

                console.log(`Invalid operation! ${name} does not exist in the collection.`);

            } else {

                catalog[name].key = token[2];
                console.log(`Changed the key of ${name} to ${token[2]}!`);

            }
        }
    }

    for (let [name, music] of Object.entries(catalog)) {
        
        console.log(`${name} -> Composer: ${music.composer}, Key: ${music.key}`);

    }
}
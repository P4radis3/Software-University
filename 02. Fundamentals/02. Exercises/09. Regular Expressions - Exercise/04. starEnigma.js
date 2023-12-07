function decryptMsg(array) {
    let msg = array.shift();
    let rgx = /@(?<planetName>[A-Za-z]+)([^@\-:!>]*):[\d]+([^@\-:!>]*)!(?<attackType>[AD])!([^@\-:!>]*)\->[\d]+([^@\-:!>]*)/;
    let attacked = [];
    let destroyed = [];

    for (let index = 0; index < msg; index++) {
        
        let decrpyted = array[index];
        let decrypt = decrpyted.match(/[star]/gi) && decrpyted.match(/[star]/gi).length;
        let decryptedMsg = [];
        
        for (let character of decrpyted) {

            let smbs = character.charCodeAt();
            smbs -= decrypt;
            smbs = String.fromCharCode(smbs);
            decryptedMsg.push(smbs);

        }

        decryptedMsg = decryptedMsg.join("");
        decryptedMsg = rgx.exec(decryptedMsg);

        if (decryptedMsg) {
            if (decryptedMsg.groups.attackType === "A") {

                attacked.push(decryptedMsg.groups.planetName);

            } else {

                destroyed.push(decryptedMsg.groups.planetName);

            }
        }
    }

    attacked.sort((a, b) => a.localeCompare(b))
    destroyed.sort((a, b) => a.localeCompare(b))

    console.log(`Attacked planets: ${attacked.length}`);
    attacked.forEach(planet => console.log(`-> ${planet}`));

    console.log(`Destroyed planets: ${destroyed.length}`)
    destroyed.forEach(planet => console.log(`-> ${planet}`));

}
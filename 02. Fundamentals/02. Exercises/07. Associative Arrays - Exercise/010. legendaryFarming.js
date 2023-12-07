function farming(string = '') {
    
    let array = string.toLowerCase().split(' ');
    let legendary = { fragments: 0, shards: 0, motes: 0 };
    let junk = {};
    let check = false;
    
    while (!check && array.length > 0) {
        let quantity = +array.shift();
        let material = array.shift();
        
        switch (material) {
            case 'shards':

                legendary[material] += quantity;
                if (legendary[material] >= 250) {
                    console.log(`Shadowmourne obtained!`);
                    legendary[material] -= 250;
                    check = true;

                }
                break;

            case 'fragments':

                legendary[material] += quantity;
                if (legendary[material] >= 250) {
                    console.log(`Valanyr obtained!`);
                    legendary[material] -= 250;
                    check = true;

                }

                break;
            case 'motes':

                legendary[material] += quantity;
                if (legendary[material] >= 250) {
                    console.log(`Dragonwrath obtained!`);
                    legendary[material] -= 250;
                    check = true;

                }

                break;
            default:

                if (!junk.hasOwnProperty(material)) {
                    junk[material] = 0;
                }

                junk[material] += quantity;
                break;

        }
    }

    let legendItems = Object.entries(legendary)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach((item) => {
            console.log(`${item[0]}: ${item[1]}`);

        }
        );

    let junkItems = Object.entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach((item) => {
            console.log(`${item[0]}: ${item[1]}`);

        }
        );
}
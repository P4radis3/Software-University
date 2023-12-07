function gladiatorInventory(array) {

    let currentInventory = array.shift().split(' ');

    for (let index = 0; index < array.length; index++) {

        let [command, item] = array[index].split(' ');
        switch (command) {
            case 'Buy':
                if (currentInventory.indexOf(item) === -1) {
                    currentInventory.push(item);
                }
                break;


            case 'Trash':
                if (currentInventory.includes(item)) {

                    currentInventory.splice(currentInventory.indexOf(item), 1);

                }
                break;

            case 'Repair':
                if (currentInventory.includes(item)) {

                    let durability = currentInventory.indexOf(item);
                    currentInventory.push(currentInventory[durability]);
                    currentInventory.splice(currentInventory.indexOf(item), 1);

                }
                break;


            case 'Upgrade':
                let string = item.replace('-', ' ').split(' ');

                let [equipment, upgrades] = string;
                if (currentInventory.includes(equipment)) {

                    let durability = currentInventory.indexOf(equipment);
                    currentInventory.splice(durability + 1, 0, `${equipment}:${upgrades}`);

                }
                break;
        }
    }

    console.log(currentInventory.join(' '));

}
function shoppingList(input) {

    let groceries = input.shift().split('!');
    let separateLine = input.shift();

    while (separateLine != 'Go Shopping!') {
        let [cmd, items, newItems] = separateLine.split(' ');

        switch (cmd) {

            case 'Urgent':
                urgent(groceries, items);
                break;
            case 'Unnecessary':
                unnecessary(groceries, items);
                break;
            case 'Correct':
                correct(groceries, items, newItems);
                break;
            case 'Rearrange':
                rearrange(groceries, items);
                break;
            default: break;

        }

        separateLine = input.shift();

    }

    console.log(groceries.join(', '));

    function urgent(listOfItems, items) {
        if (listOfItems.includes(items) == false) {

            listOfItems.unshift(items);

        }
    }

    function unnecessary(listOfItems, items) {

        if (listOfItems.includes(items) == true) {
            let index = listOfItems.indexOf(items);
            listOfItems.splice(index, 1);

        }
    }

    function correct(listOfItems, items, newItems) {

        if (listOfItems.includes(items) == true) {
            let index = listOfItems.indexOf(items);
            listOfItems[index] = newItems;

        }
    }

    function rearrange(listOfItems, items) {

        if (listOfItems.includes(items) == true) {
            let index = listOfItems.indexOf(items);
            listOfItems.splice(index, 1);
            listOfItems.push(items);

        }
    }
}
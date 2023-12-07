function arrayManipulations(commands) {

    let array = commands
        .shift()
        .split(' ')
        .map(Number);

    for (let index = 0; index < commands.length; index++) {

        let [command, firstNumber, secondNumber] = commands[index].split(' ');

        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);

        switch (command) {
            case "Add":
                add(firstNumber);
                break;
            case "Remove":
                remove(firstNumber);
                break;
            case "RemoveAt":
                removeAt(firstNumber);
                break;
            case "Insert":
                insert(firstNumber, secondNumber);
                break;
        }
    }

    function add(element) {
        array.push(element);
    }

    function remove(number) {
        array = array.filter(element => element !== number);
    }

    function removeAt(index) {
        array.splice(index, 1);
    }

    function insert(number, index) {
        array.splice(index, 0, number);
    }

    console.log(array.join(' '));

}
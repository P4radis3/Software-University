function arrayManipulator(array, commands) {

    for (let elements of commands) {

        let command = elements.split(' ');
        if (command[0] == 'add') {

            array.splice(Number(command[1]), 0, Number(command[2]));

        } else if (command[0] == 'addMany') {

            let index = Number(command[1]);
            command.splice(0, 2);

            let numbers = command.map(Number);
            array.splice(index, 0, ...numbers);

        } else if (command[0] == 'contains') {

            console.log(array.indexOf(Number(command[1])));

        } else if (command[0] === "remove") {

            array.splice(Number(command[1]), 1);

        } else if (command[0] === "shift") {

            let index = 0;
            while (index < Number(command[1])) {

                let element = array.shift();
                array.push(element);
                index++;

            }
        } else if (command[0] === "sumPairs") {

            let newArray = [];
            if (array.length % 2 !== 0) {

                array.push(0);

            }

            for (let index = 0; index < array.length; index += 2) {

                let sum = array[index] + array[index + 1];
                newArray.push(sum);

            }

            array = newArray;
        } else if (command[0] === "print") {

            console.log(`[ ${array.join(", ")} ]`);

        }

    }
}
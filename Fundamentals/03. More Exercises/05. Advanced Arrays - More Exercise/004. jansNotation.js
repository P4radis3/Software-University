function jansNotation(array) {

    let operations = {
        '+': function (a, b) {

            return a + b;

        },
        '-': function (a, b) {

            return a - b;

        },
        '*': function (a, b) {

            return a * b;

        },
        '/': function (a, b) {

            return a / b;
            
        }
    }

    let listOfOperations = [];

    for (let elements of array) {
        if (typeof elements === 'number') {
            listOfOperations.push(elements);
        } else {
            let operation = operations[elements];

            if (listOfOperations.length >= 2){
                let b = listOfOperations.pop();
                let a = listOfOperations.pop();
                listOfOperations.push(operation(a, b));
            } else { 
                return 'Error: not enough operands!';

            }
        }
    }

    if (listOfOperations.length > 1) {

        return 'Error: too many operands!';

    } else {

        return listOfOperations[0];

    }
}
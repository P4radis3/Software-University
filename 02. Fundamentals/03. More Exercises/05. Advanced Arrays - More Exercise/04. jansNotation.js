function jansNotation(arrays) {

    let listOfOperations = [];
    for (let operations of arrays) {
        if (typeof operations === 'number') {

            listOfOperations.push(operations);

        } else if (typeof operations === 'string') {
            if (listOfOperations.length < 2) {

                console.log("Error: not enough operands!");
                return;

            }

            let secondOperation = listOfOperations.pop();
            let firstOperation = listOfOperations.pop();
            let result;

            switch (operations) {
                case '+':
                    result = firstOperation + secondOperation;
                    break;

                case '-':
                    result = firstOperation - secondOperation;
                    break;
                    
                case '*':
                    result = firstOperation * secondOperation;
                    break;

                case '/':
                    if (secondOperation === 0) {

                        console.log("Error: division by zero!");
                        return;

                    }

                    result = Math.floor(firstOperation / secondOperation); // Ensure the result is an integer.
                    break;
                default:

                    console.log("Error: invalid operator");
                    return;

            }

            listOfOperations.push(result);

        }
    }

    if (listOfOperations.length === 1) {

        console.log(listOfOperations[0]);

    } else if (listOfOperations.length > 1) {

        console.log("Error: too many operands!");

    } else {

        console.log("Error: not enough operands!");

    }
}
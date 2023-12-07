function printNthElement(array) {
    
    let steps = Number(array.pop());
    let elements = [];

    for (let index = 0; index < array.length; index += steps) {

        elements.push(array[index]);

    }

    console.log(elements.join(' '));

}
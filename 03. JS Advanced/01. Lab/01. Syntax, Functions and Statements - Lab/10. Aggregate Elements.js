function aggregateElements(element) {

    aggregate(element, 0, (a, b) => a + b);
    aggregate(element, 0, (a, b) => a + 1 / b);
    aggregate(element, '', (a, b) => a + b);

    function aggregate(array, inputValue, func) {

        let value = inputValue;
        for (let index = 0; index < array.length; index++)

        value = func(value, array[index]);
        console.log(value);

    }
}

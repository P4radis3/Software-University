function calculator() {

    let first;
    let second;
    let result;

    function init(firstSelector, secondSelector, initialResult) {

        first = document.querySelector(firstSelector);
        second = document.querySelector(secondSelector);
        result = document.querySelector(initialResult);

    }

    function add() {

        result.value = Number(first.value) + Number(second.value);

    }

    function subtract() {

        result.value = Number(first.value) - Number(second.value);

    }


    return {
        init,
        add,
        subtract
    }
}
function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll("input[type='button']"))
    for (let btn of buttons) {
        btn.addEventListener('click', convertHandler);
    }

    function convertHandler(element) {

        let currentInput = element.currentTarget.parentElemenet.children[1];
        let currentValue = Number(currentInput.value);
        let unit = currentInput.id

        switch (unit) {
            case "days": propagateValue(currentValue); break;
            case "hours": propagateValue(currentValue / 24); break;
            case "minutes": propagateValue(currentValue / 24 / 60); break;
            case "seconds": propagateValue(currentValue / 24 / 60 / 60); break; // 24 : 120
        }
    }

    function propagateValue(time) {

        let input = document.querySelectorAll("input[type='text']");
        input[0].value = time;
        input[1].value = time * 24;
        input[2].value = time * 24 * 60;
        input[3].value = time * 24 * 60 * 60;

    }
}
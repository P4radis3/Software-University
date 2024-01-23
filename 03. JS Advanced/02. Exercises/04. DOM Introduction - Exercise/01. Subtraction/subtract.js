function subtract() {

    let html = {

        firstNum: document.getElementById('firstNumber'),
        secondNumber: document.getElementById('secondNumber'),
        result: document.getElementById('result'),

    };

    html.result.innerHTML = (Number(html.firstNum.value) || 0) - (Number(html.secondNumber.value) || 0)

}
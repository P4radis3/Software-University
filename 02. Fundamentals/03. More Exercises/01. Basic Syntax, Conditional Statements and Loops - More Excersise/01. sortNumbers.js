function sortingNumbers(number1, number2, number3) {

    let numbersToBeSorted = [number1, number2, number3];

    numbersToBeSorted.sort(function (a, b) {
        return (b - a);
    });

    numbersToBeSorted.forEach(function (numbers) {
        console.log(numbers);
    });
}
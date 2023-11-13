function numbers(string) {

    let numbers = string.split(' ').map(Number);
    let average = numbers.reduce((acc, value) => acc + value) / numbers.length;

    let top = numbers
        .filter(numbers => numbers > average)
        .sort((a, b) => b - a)
		.slice(0, 5);

    if (top.length == 0){
        console.log('No');
    } else {
        console.log(top.join(' '));
    }
}
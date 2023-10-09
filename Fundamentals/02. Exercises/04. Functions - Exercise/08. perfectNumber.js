function perfectNumber(number) {

    let divisors = 0;

    for (let divisor = 1; divisor < number; divisor++) {
        if (number % divisor == 0) {
            divisors += divisor;
        }
    }

    if (divisors == number) {
        console.log('We have a perfect number!');
    } else {
        console.log(`It's not so perfect.`);
    }
}
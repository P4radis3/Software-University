function softuniReception(input = []) {

    let firstEmployee = +input.shift();
    let secondEmployee = +input.shift();
    let thirdEmployee = +input.shift();
    let toBeAnswered = +input.shift();

    let hourlyAnswers = firstEmployee + secondEmployee + thirdEmployee;
    let hoursNeededToAnswer = 0;

    while (toBeAnswered > 0) {
        toBeAnswered -= hourlyAnswers;
        hoursNeededToAnswer++;

        if (hoursNeededToAnswer % 4 === 0) {
            hoursNeededToAnswer++;
        }
    }

    console.log(`Time needed: ${hoursNeededToAnswer}h.`);

}
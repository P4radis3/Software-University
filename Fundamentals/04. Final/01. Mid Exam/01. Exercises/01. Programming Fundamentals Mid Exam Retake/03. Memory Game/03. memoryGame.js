function solve(input) {

    const numbers = input
        .shift()
        .trim()
        .split(' ');

    let moves = 0;


    while (numbers.length > 1 && input[0].toLowerCase() !== 'end') {

        let [firstIndex, secondIndex] = input
            .shift()
            .split(' ');

        firstIndex = Number(firstIndex);
        secondIndex = Number(secondIndex);
        moves++;

        
        if (firstIndex < 0 || firstIndex >= numbers.length || firstIndex === secondIndex || secondIndex < 0 || secondIndex >= numbers.length) {

            const currentIndex = Math.trunc(numbers.length / 2);
            const symbols = '-' + moves + 'a';

            numbers.splice(currentIndex, 0, symbols, symbols);
            console.log('Invalid input! Adding additional elements to the board')

        }

        else {

            const firstNumber = numbers[firstIndex];
            const secondNumber = numbers[secondIndex];

            if (firstNumber === secondNumber) {

                numbers.splice(firstIndex, 1);
                secondIndex = numbers.indexOf(secondNumber);
                numbers.splice(secondIndex, 1);
                console.log(`Congrats! You have found matching elements - ${firstNumber}!`);

            } else if (firstNumber !== secondNumber) {

                console.log('Try again!');

            }
        }
    }

    if (numbers.length === 0 || numbers.length === 1) {

        console.log(`You have won in ${moves} turns!`);

    } else {

        console.log(`Sorry you lose :(`);
        console.log(`${numbers.join(' ')}`);

    }
}
function solve(input) {

    let coffees = input.shift().split(' ');

    function include(coffee) {
        coffees.push(coffee);
    }

    function removeFirst(number) {
        coffees = coffees.slice(number);
    }

    function removeLast(number) {
        coffees = coffees.slice(0, -number);
    }

    function prefer(firstI, secondI) {

        if (firstI >= 0 && firstI < coffees.length && secondI >= 0 && secondI < coffees.length) {
            let chPlace = coffees[firstI];
            coffees[firstI] = coffees[secondI];
            coffees[secondI] = chPlace;

        }
    }

    function reverse() {
        coffees = coffees.reverse();
    }

    for (let index = 0; index < input.length; index++) {
        let [command, firstArr, secondArr] = input[index].split(' ');

        if (command === 'Include') {

            include(firstArr);

        } else if (command === 'Remove') {

            let number = Number(secondArr);
            if (firstArr === 'first') {
                removeFirst(number);
            } else if (firstArr === 'last') {
                removeLast(number);
            }
            
        } else if (command === 'Prefer') {

            let firstIndex = Number(firstArr);
            let secondIndex = Number(secondArr);
            prefer(firstIndex, secondIndex);

        } else if (command === 'Reverse') {
            reverse();
        }
    }

    console.log(`Coffees: \n${coffees.join(' ')}`);

}

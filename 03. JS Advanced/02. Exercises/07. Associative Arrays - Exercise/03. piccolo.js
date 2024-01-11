function solve(input) {
    let hold = {};

    hold = input.reduce((first, current) => {
        let [command, number] = current.split(', ');

        if (first.hasOwnProperty(number)) {

            if (command === 'OUT') {

                first[number] = 'out';

            } else if (command === 'IN') {

                first[number] = 'parked';

            }

        } else {

            if (command === 'IN') {
                first[number] = 'parked';

            }
        }

        return first;
    }, 
    {}
    );

    hold = Object.entries(hold)
        .filter(([carNumber, status]) => {

            if (status === 'parked') {
                
                return carNumber;

            }
        }
    )

        .map(el => el[0])
        .sort((a, b) => a.localeCompare(b))

    if (hold.length > 0) {

        console.log(hold.join('\n'));

    } else {

        console.log('Parking Lot is Empty');

    }
}
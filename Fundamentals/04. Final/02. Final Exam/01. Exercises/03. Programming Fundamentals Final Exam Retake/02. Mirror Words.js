function solve([input]) {

    let pattern = /(#|@)([A-Za-z]{3,})\1\1([A-za-z]{3,})\1/gi;
    let match = pattern.exec(input);
    let result = [];
    let count = 0;


    while (match) {
        count++

        let first = match[2];
        let second = match[3];

        if (first == second.split('').reverse().join('')) {
            result.push(`${first} <=> ${second}`);
        }

        match = pattern.exec(input);

    }

    if (count == 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${count} word pairs found!`);
    }

    if (result.length == 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(result.join(', '));
    }
}
function lettersChangeNumbers(input) {

    let letters = input.split(' ')
    let result = []

    for (let x of letters) {
        if (x.length === 0) continue;
        x = x.split('');

        let [start, end, number] = [x.shift(), x.pop(), Number(x.join(''))];
        let first = start === start.toUpperCase() ? '/' : '*' ;
        let second = end === end.toUpperCase() ? '-' : '+';
        let lFirstPos = start.toLowerCase().charCodeAt(0) - 96;
        let lSecondPos = end.toLowerCase().charCodeAt(0) - 96;

        result.push(eval(`${number}${first}${lFirstPos}${second}${lSecondPos}`));

    }

    console.log(`${eval(result.join('+')).toFixed(2)}`)

}
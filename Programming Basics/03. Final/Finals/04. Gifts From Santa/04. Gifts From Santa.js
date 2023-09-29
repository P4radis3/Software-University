function santaAddresses(input) {
    let N = Number(input[0]);
    let M = Number(input[1]);
    let S = Number(input[2]);

    let result = '';

    for (let i = M; i >= N; i--) {
        if (i % 2 === 0 && i % 3 === 0 && i !== S) {
            if (result !== '') {
                result += ' ';
            }
            result += i;
        }

        if (i === S) {
            break;
        }
    }

    console.log(result);
}

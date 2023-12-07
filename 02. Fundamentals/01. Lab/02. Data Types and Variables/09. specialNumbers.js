function specialNumbers(number) {
    let isSpecialNumber = ''

    for (let index = 1; index <= number; index++) {
        const checker = parseInt((index / 10) + (index % 10))
        if (checker == 5 || checker == 7 || checker == 11) {
            isSpecialNumber = 'True'
        } else {
            isSpecialNumber = 'False'
        }
        console.log(`${index} -> ${isSpecialNumber}`);
    }
}
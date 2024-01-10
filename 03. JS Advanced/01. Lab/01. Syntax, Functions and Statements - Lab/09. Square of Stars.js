function squareOfStars(size) {

    for (let index = 0; index < size; index++) {
        let row = '';

        for (let j = 0; j < size; j++) {
            row += '* ';
        }

        console.log(row);

    }
}
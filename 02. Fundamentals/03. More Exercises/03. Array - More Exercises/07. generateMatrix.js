function generateMatrix(numbers) {

    let total = numbers * numbers;
    let result = [];

    for (let index = 0; index < numbers; index++) {

        let rs = [];

        for (let j = 0; j < numbers; j++) {

            rs.push(0);

        }

        result.push(rs);
    }

    let x = 0;
    let y = 0;
    let step = 0;

    for (let index = 0; index < total;) {
        while (y + step < numbers) {

            index++;
            result[x][y] = index;
            y++;

        }

        y--;
        x++;

        while (x + step < numbers) {

            index++;
            result[x][y] = index;
            x++;
        }
        x--;
        y--;

        while (y >= step) {
            index++;
            result[x][y] = index;
            y--;
        }
        y++;
        x--;
        step++;

        while (x >= step) {
            index++;
            result[x][y] = index;
            x--;
        }
        x++;
        y++;
    }

    result.forEach(row => console.log(row.join(' ')));

}
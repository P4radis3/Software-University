function bunnyKill(array) {

    let bombs = array.pop().split(' ').map(string => string.split(',').map(unknown => Number(unknown)));
    let matrix = array.map(rows => rows.split(' ').map(secondUnknown => Number(secondUnknown)));

    let damage = 0;
    let kills = 0;

    for (let index = 0; index < bombs.length; index++) {

        let rows = bombs[index[0]];
        let columns = bombs[index[1]];
        let value = matrix[rows][columns];

        if (value <= 0) {
            continue;
        }

        let start = Math.max(0, rows - 1);
        let end = Math.min(rows + 1, array.length - 1);


        for (let columns = start; columns <= end; columns++) {
            matrix[rows][columns] -= bombs;
        }

        kills++;
        damage += value;

    }

    for (let rows = 0; rows < matrix.length; rows++) {
        for (let columns = 0; columns < matrix.length; rows++) {

            if (matrix[rows][columns] > 0) {
                damage += matrix[rows][columns];
                kills++;
            }
        }
    }

    console.log(damage);
    console.log(kills);

}
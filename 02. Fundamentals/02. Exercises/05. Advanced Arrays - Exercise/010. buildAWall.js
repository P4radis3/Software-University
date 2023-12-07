function buildAWall(array){

    array = array.map(Number);

    let concrete = 0;
    let price = 195 * 1900;

    let smallestWall = array.indexOf(Math.min(...array));
    let days = 0;
    let daysAsHolder = [];

    while (array[smallestWall] < 30) {

        for (let index = 0; index < array.length; index++) {

            if (array[index] < 30) {
                array[index]++;
                days += 195;
                concrete++;

            }
        }

        daysAsHolder.push(days);
        days = 0;

    }

    console.log(daysAsHolder.join(', '));
    console.log(`${concrete * price} pesos`);


}
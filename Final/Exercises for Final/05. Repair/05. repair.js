function repair(input) {

    let heightWall = Number(input[0]);
    let widthWall = Number(input[1]);
    let percentToNotPaint = Number(input[2]);

    let index = 3;
    let command = input[index];
    index++

    let toPaint = heightWall * widthWall * 4;
    let wallsForPainting = toPaint * percentToNotPaint / 100;
    let totalPainting = toPaint - wallsForPainting;

    while (true) {
        let litersPaint = Number(command);
        totalPainting -= litersPaint;

        command = input[index];
        index++;

        if (command === "Tired!") {
            console.log(`${totalPainting} quadratic m left.`);
            break;
        }
 
        if (totalPainting === 0) {
            console.log(`All walls are painted! Great job, Pesho!`);
            break;
        }
 
        if (totalPainting < 0) {
            console.log(`All walls are painted and you have ${Math.abs(totalPainting)} l paint left!`);
            break;
        }
        


    }
 
}


repair(["2",
"3",
"25",
"6",
"7",
"8"])






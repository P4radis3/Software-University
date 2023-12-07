function pointsValidation([x1, y1, x2, y2]) {

    let firstPoint = () => Math.sqrt(x1 ** 2 + y1 ** 2);
    let secondPoint = () => Math.sqrt(x2 ** 2 + y2 ** 2);
    let thirdPoint = () => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    let checkFirstPoint = firstPoint();
    let checkSecondPoint = secondPoint();
    let checkThirdPoint = thirdPoint();

    if (checkFirstPoint % 1 === 0) {

        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);

    } else {

        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);

    }

    if (checkSecondPoint % 1 === 0) {

        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);

    } else {

        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);

    }

    if (checkThirdPoint % 1 === 0) {

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);

    } else {

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

    }
}
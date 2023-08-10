function mountainRun(input) {

    let record = Number(input[0]);
    let meters = Number(input[1]);
    let time = Number(input[2]);

    let totalTime = meters * time;
    let delayedTime = Math.floor(meters / 50) * 30;

    let totalTimeWithDelay = totalTime + delayedTime;

    if (totalTimeWithDelay < record) {
        console.log(`Yes! The new record is ${totalTimeWithDelay.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(totalTimeWithDelay - record).toFixed(2)} seconds slower.`);
    }
}

mountainRun(["1377",
    "389",
    "3"])


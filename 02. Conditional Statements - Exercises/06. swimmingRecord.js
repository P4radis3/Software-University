function swimmingRecord(input){

    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeOneMeter = Number(input[2]);

    let totalTimeNeeded = distanceInMeters * timeOneMeter
    let delay = Math.floor(distanceInMeters / 15) * 12.5;

    let totalTimeNeededWithDelay = totalTimeNeeded + delay;

    if(totalTimeNeededWithDelay < recordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${totalTimeNeededWithDelay.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(totalTimeNeededWithDelay - recordInSeconds).toFixed(2)} seconds slower.`)
    }
}

swimmingRecord(["10464",
"1500",
"20"])


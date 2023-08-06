function walking(input){

    let targetSteps = 10000;
    let steps = 0
    let index = 0;

    let row = input[index];
  
    while (row !== "Going home"){
        let stepsNeeded = Number(row);
        steps += stepsNeeded;

        if(steps >= targetSteps){
            console.log(`Goal reached! Good job!`);
            console.log(`${steps - targetSteps} steps over the goal!`);
            break;
}
    index++;
    row = input[index]; 
}
    if(row === "Going home"){
        let homeSteps = Number(input[index + 1]);

        steps += homeSteps;
        if(steps >= targetSteps){
            console.log(`Goal reached! Good job!`);
            console.log(`${steps - targetSteps} steps over the goal!`);
        } else {
            console.log(`${targetSteps - steps} more steps to reach goal.`);
        }
    }
}



walking(["1000",
"1500",
"2000",
"6500"])


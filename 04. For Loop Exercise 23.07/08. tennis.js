function tennis(input){

    let tournaments = Number(input[0]);
    let points = Number(input[1]);
    let winningPoints = 0;
    let wins = 0;
    

    for(let i = 2; i < input.length; i++){

        let currentStage = input[i];

        switch(currentStage){

            case "W": winningPoints += 2000; wins++; break; 
            case "F": winningPoints += 1200;  break;
            case "SF": winningPoints += 720; break;
        }
    }

    let = avgPoints = winningPoints / tournaments;

    console.log(`Final points: ${points + winningPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${(wins / tournaments * 100).toFixed(2)}%`)
}

tennis(["4",
"750",
"SF",
"W",
"SF",
"W"])

function oscars(input){

    let actorsName = input[0];
    let points = Number(input[1]);
    let judges = Number(input[2]); 

    for(let i = 3; i < input.length; i++){

        let judgeName = input[i];
        i++
        
        let judgePoints = Number(input[i]);
        let currentPoints = judgeName.length * judgePoints / 2;

        points += currentPoints;

        if(points > 1250.5){
            console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    }

    if(points <= 1250.5){
        console.log(`Sorry, ${actorsName} you need ${(1250.5 - points).toFixed(1)} more!`);
    }
}






oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

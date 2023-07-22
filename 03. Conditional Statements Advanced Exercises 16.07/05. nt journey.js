function journey(input){
    
    let budget = Number(input[0]);
    let season = input[2];

    let res = 0;
    let type = "";
    let destination = "";
    
    if (season === "summer") {
        type = "Camp";
    } else {
        type = "Hotel";
    }



    if (budget <= 100){
        destination = "Bulgaria";
        if (season === "summer"){
            res = budget * 0.30;
        } else {
            res = budget * 0.70;
        }


    } else if (budget <= 1000){
        destination = "Balkans";
        if (season === "summer"){
            res = budget * 0.40;
        } else {
            res = budget * 0.80;
        }
    } else {
        destination = "Europe";
        res = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${res.toFixed(2)}`);

}

journey("50", "summer")
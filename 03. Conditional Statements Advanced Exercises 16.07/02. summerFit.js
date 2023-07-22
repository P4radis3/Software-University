function summerFit(input){

    let degrees = input[0];
    let outfit = input[1];
    let shoes = input[2];
    let time = input[3];
    
    if (degrees >= 10 && degrees <= 18){
        if (time === "Morning"){
            outfit = "Sweatshirt";
            shoes = "Sneakers";            
        }
    } else if (time === "Afternoon" || time === "Evening"){
          outfit = "Shirt";
          shoes = "Moccasins";
        }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerFit(["22",
"Afternoon"])

function GodzillaVersusKong(input){

    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothes = Number(input[2]);

    let decor = budget * 0.10;
    let extrasPrice = extras * clothes;

    if (extras > 150){
        extrasPrice *= 0.90;
    }
    
    let sum = decor + extrasPrice;

    if (budget >= sum) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - sum).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(sum - budget).toFixed(2)} leva more.`);
    }
}
GodzillaVersusKong(["9587.88",
"222",
"55.68"])




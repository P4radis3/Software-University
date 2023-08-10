function shopping(input){

    let budget = Number(input[0]);
    let GPU = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);

    let moneyGPU = GPU * 250;
    let moneyCPU = (moneyGPU * 0.35) * CPU;
    let moneyRAM = (moneyGPU * 0.10) * RAM;

    let sum = moneyCPU + moneyGPU + moneyRAM;

    if(GPU > CPU) {
        sum *= 0.85;
    }

    if(sum <= budget) {
        console.log(`You have ${(budget - sum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva more!`);
    }
}

shopping(["900",
"2",
"1",
"3"])




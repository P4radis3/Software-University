function coins(input){

    let bills = Number(input[0]);
    let coins = bills * 100;
    let change = 0;

    while (coins > 0){
        if (coins >= 200){
            coins -= 200;
            change++;
        } else if (coins >= 100){
            coins -= 100;
            change++;
        } else if (coins >= 50){
            coins -= 50;
            change++;
        } else if (coins >= 20){
            coins -= 20;
            change++;
        } else if (coins >= 10){
            coins -= 10;
            change++;
        } else {
            break;
        }   
    }
console.log(change)
}

coins(["2"])
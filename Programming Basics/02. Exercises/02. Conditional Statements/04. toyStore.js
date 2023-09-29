function toyStore(input){

    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlesPrice = puzzles * 2.60;
    let dollsPrice = dolls * 3;
    let bearsPrice = bears * 4.10;
    let minionsPrice = minions * 8.20;
    let trucksPrice = trucks * 2;

    let totalToysPrice = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;
    let totalToysCount = puzzles + dolls + bears + minions + trucks;

    if(totalToysCount >= 50){
        totalToysPrice = totalToysPrice * 0.75;
    }

        totalToysPrice = totalToysPrice * 0.90;

    if(totalToysPrice >= tripPrice){
        console.log(`Yes! ${(totalToysPrice - tripPrice).toFixed(2)} lv left.`)
    }else{
        console.log(`Not enough money! ${(tripPrice - totalToysPrice).toFixed(2)} lv needed.`)
    }
}

toyStore((["40.8",
"20",
"25",
"30",
"50",
"10"])
)
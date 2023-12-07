function vacation(input){

    let neededMoney = Number(input[0]);
    let availableMoney = Number(input[1]);

    let days = 0;
    let spentDays = 0;

    let index = 2;
    let currentRow = input[index];

    while(availableMoney >= 0 ){ // can be with true as well while (availablemoney // true)//
        days++;
        index++;

        if(currentRow === "spend"){
            let spentMoney = Number(input[index]);
            availableMoney -= spentMoney;
            if(availableMoney < 0){
                availableMoney = 0;}
            spentDays++;

            if (spentDays === 5){
                console.log("You can't save the money.");
                console.log(days);
                break;
            }

        } else if (currentRow === "save"){
            spentDays = 0;
            let savedMoney = Number(input[index]);
            availableMoney += savedMoney;

            if (availableMoney >= neededMoney){
                console.log(`You saved the money for ${days} days.`);
                break;
            }
        }

        index++;
        currentRow = input[index];
    
    }
}

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])

function traveling(input) {
 
    let destination = input[0];
    let budget = Number(input[1]);
    let savedMoney = 0;
    let index = 1;
 
    while(destination !== "End"){
        index++;
 
        while(savedMoney < budget){
            savedMoney += Number(input[index]);
            index++;
        }

        console.log(`Going to ${destination}!`);
        destination = input[index++];
        budget = Number(input[index]);
        savedMoney = 0;

    }
}


traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])
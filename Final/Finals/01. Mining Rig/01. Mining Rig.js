function one(input){

    let cardAmount = Number(input[0]);
    let prehodnikAmount = Number(input[1]);

    let cardPrice = cardAmount * 13;
    let prehodnikPrice = prehodnikAmount * 13;
    let secondHand = 1000;

    let totalSum = cardPrice + prehodnikPrice + secondHand;

    let commisionForDay = Number(input[2])
    let sumForDay = Number(input[3]);
    let comissionPlusSum = sumForDay - commisionForDay;

    let totalSumFromCards = 13 * comissionPlusSum;  

    let days = totalSum / totalSumFromCards;

    console.log(totalSum)
    console.log(Math.ceil(days))

}
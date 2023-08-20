function one(input){

    let GPUAmount = Number(input[0]);
    let adaptorAmount = Number(input[1]);

    let GPUPrice = GPUAmount * 13;
    let adaptorPrice = adaptorAmount * 13;
    let secondHand = 1000;

    let totalSum = GPUPrice + adaptorPrice + secondHand;

    let commisionForDay = Number(input[2])
    let sumForDay = Number(input[3]);
    let comissionPlusSum = sumForDay - commisionForDay;

    let totalSumFromCards = 13 * comissionPlusSum;  

    let days = totalSum / totalSumFromCards;

    console.log(totalSum)
    console.log(Math.ceil(days))

}
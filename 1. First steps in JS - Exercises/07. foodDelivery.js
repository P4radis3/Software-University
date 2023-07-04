function foodDelivery(input) {
 
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veggieMenu = Number(input[2]);
    let delivery = 2.50;
 
    let chickenMenuPrice = chickenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let veggieMenuPrice = veggieMenu * 8.15;
    
    let totalMenu = chickenMenuPrice + fishMenuPrice + veggieMenuPrice;
    
    let dessert = totalMenu * 0.20;
    let totalSum = totalMenu + dessert + delivery;
 
    console.log(totalSum);
 
}
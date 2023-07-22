function schoolSuplies (input) {

    let pensPack = Number(input[0]);
    let markersPack = Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3]);
    let discountPercents = discount / 100;

    
    let pensPrice = pensPack * 5.80;
    let markersPrice = markersPack * 7.20;
    let detergentPrice = detergent * 1.20;

    let totalPrice = pensPrice + markersPrice + detergentPrice;
    let priceDiscount = totalPrice - (totalPrice * discountPercents);

    console.log(priceDiscount)
}
function repainting(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinnerPaint = Number(input[2]);
    let hours = Number(input[3]);
    let bags = 0.40;

    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint  * 1.1) * 14.50;
    let thinnerPrice = thinnerPaint * 5;
    let materials = nylonPrice + paintPrice + thinnerPrice + bags;
    
    let workMoney = (materials * 0.30) * hours
    let totalSum = materials + workMoney

    console.log(totalSum);
    
}
function tradeCommissions(input){

    let town = input[0];
    let sales = Number(input[1]);
    let commission = 0;

    if (town === "Sofia") {
        if (sales > 0 && sales <= 500) {
            commission = 0.05 * sales;
        } else if (sales > 500 && sales <= 1000) {
            commission = 0.07 * sales;
        } else if (sales > 1000 && sales <= 10000) {
            commission = 0.08 * sales;
        } else if (sales > 10000) {
            commission = 0.12 * sales;
        }

    } else if (town === "Varna") {
        if (sales > 0 && sales <= 500) {
            commission = 0.045 * sales;
        } else if (sales > 500 && sales <= 1000) {
            commission = 0.075 * sales;
        } else if (sales > 1000 && sales <= 10000) {
            commission = 0.10 * sales;
        } else if (sales > 10000) {
            commission = 0.13 * sales;
        }
    } else if (town === "Plovdiv") {
        if (sales > 0 && sales <= 500) {
            commission = 0.055 *  sales;
        } else if (sales > 500 && sales <= 1000) {
            commission = 0.08 * sales;
        } else if (sales > 1000 && sales <= 10000) {
            commission = 0.12 * sales;
        } else if (sales > 10000) {
            commission = 0.145 * sales;
        }
    } else {
        console.log("error");
    }
    console.log(commission.toFixed(2));
}


tradeCommissions(["Kaspichan",
"-50"])


function spiceMustFlow(startingYield) {

    let days = 0;
    let extractedSpice = 0;

    while (startingYield >= 100) {

        days++;

        extractedSpice += startingYield - 26;
        startingYield -= 10;

    }

    if (extractedSpice >= 26) {
        extractedSpice -= 26;
    }
    console.log(days);
    console.log(extractedSpice);
}
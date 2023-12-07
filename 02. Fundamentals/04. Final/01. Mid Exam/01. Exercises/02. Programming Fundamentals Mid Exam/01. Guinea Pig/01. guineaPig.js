function guineaPig(input) {

    //parse
    let pigFood = Number(input[0]) * 1000;
    let pigHay = Number(input[1]) * 1000;
    let pigCover = Number(input[2]) * 1000;
    let pigWeight = Number(input[3]) * 1000;

    let = consumptionOfCover = pigWeight / 3;

    for (let index = 1; index <= 30; index++) {
        pigFood -= 300;

        if (index % 2 == 0) {
            pigHay -= pigFood * 0.05;
        }

        if (index % 3 == 0) {
            pigCover -= consumptionOfCover;
        }

        if (pigFood < 0 || pigHay < 0 || pigCover < 0) {
            console.log("Merry must go to the pet store!");
            return;
        }
    }

    console.log(`Everything is fine! Puppy is happy! Food: ${(pigFood / 1000).toFixed(2)}, Hay: ${(pigHay / 1000).toFixed(2)}, Cover: ${(pigCover / 1000).toFixed(2)}.`);

}
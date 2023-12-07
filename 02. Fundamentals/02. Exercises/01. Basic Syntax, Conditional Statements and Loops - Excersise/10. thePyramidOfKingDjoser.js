function pyramidMaterials(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let currentHeight = 0;
    let steps = 0;

    while (base > 0) {
        steps++;
        // If it's the top of the pyramid
        if (base === 1 || base === 2) {
            gold += base * base * increment;
        } else {

            let stoneArea = (base - 2) * (base - 2);
            stone += stoneArea * increment;


            if (steps % 5 === 0) {
                lapis += (base * base - stoneArea) * increment;
            } else {
                marble += (base * base - stoneArea) * increment;
            }
        }

        base -= 2;
        currentHeight += increment;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(currentHeight)}`);
}
function solve(input) {
    let index = 0;
    const furn = [];
    let reg = new RegExp('>{2}([A-z]+)<{2}([0-9.]+)!([0-9]+)');
    let total = 0;

    while (true) {
        if (input[index] === "Purchase") break;

        let match = input[index].match(reg);

        if (match !== null && match !== undefined) {
            let townName = match[1];
            let price = Number(match[2]);
            let quantity = Number(match[3]);

            furn.push(townName);
            total += price * quantity;
        }

        index++;

    }

    console.log('Bought furniture:');
    
    if (furn.length > 0) {
        console.log(furn.join('\n'));
    }

    console.log(`Total money spend: ${total.toFixed(2)}`);

}
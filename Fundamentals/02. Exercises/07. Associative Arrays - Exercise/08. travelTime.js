function solve(array) {
    let hold = {};

    array.map(first => {
        let [country, town, price] = first.split(' > ');

        if (!hold.hasOwnProperty(country)) {
            hold[country] = {};

        }

        if (!hold[country].hasOwnProperty(town)) {
            hold[country][town] = Number(price);
        } else if (hold[country][town] > Number(price)) {
            hold[country][town] = Number(price);
        }
    }
    );

    let sorted = Object.entries(hold).sort((a, b) => a[0].localeCompare(b[0]));
    sorted.forEach(([country, towns]) => {

        let final = `${country} -> `;
        let sortedTowns = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        sortedTowns.forEach(([town, price]) => {

            final += `${town} -> ${price} `;

        }
        );

        console.log(final.trim());

    }
    );
}
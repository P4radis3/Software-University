function solve(destination) {

    let reg = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/g;
    let counter = 0;
    let city = [];

    if (reg.test(destination)) {

        let current = destination.match(reg);
        current.forEach(destination => {

            counter += (destination.length - 2)
            city.push(destination.slice(1, (destination.length - 1)));

        });
    }

    console.log(`Destinations: ${city.join(", ")}`);
    console.log(`Travel Points: ${counter}`);

}
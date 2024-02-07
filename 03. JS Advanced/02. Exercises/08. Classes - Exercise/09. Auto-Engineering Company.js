function autoEngineeringCompany(input) {

    let cars = input.reduce((acc, line) => {
        let [brand, model, produced] = line.split(' | ');
        produced = Number(produced);

        if (!acc[brand]) {

            acc[brand] = {};

        }


        if (!acc[brand][model]) {

            acc[brand][model] = 0;

        }

        acc[brand][model] += produced;
        return acc;

    }, {});

    return Object.entries(cars).map(([brand, models]) => {
        let model = Object.entries(models).map(([model, count]) => `###${model} -> ${count}`).join('\n');
        return `${brand}\n${model}`;
    }).join('\n');
}
function townPopulation(townsArray) {

    let towns = {};

    for (let townsAsString of townsArray) {

        let [name, population] = townsAsString.split(' <-> ');
        population = Number(population);

        if (towns[name] != undefined) {

            population += towns[name];

        }

        towns[name] = population;

    }

    for (let town in towns) {
     
        console.log(`${town} : ${towns[town]}`);
     
    }
}
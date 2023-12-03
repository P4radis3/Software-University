function wildZoo(input) {
    
    let animals = {};
    let areas = {};
    for (let line of input) {
        if (line === 'EndDay') {

            break;

        }
 
        let [cmd, rest] = line.split(': ').map((el) => el.trim());
        let [name, food, area] = rest.split('-').map((el) => el.trim());
 
        if (cmd === 'Add') {
            if (!animals[name]) {

                animals[name] = { neededFood: 0, area };

            }
 
            animals[name].neededFood += parseInt(food);
 
            if (!areas[area] || !areas[area].includes(name)) {

                areas[area] = areas[area] || [];
                areas[area].push(name);

            }
        } else if (cmd === 'Feed') {
            if (animals[name]) {

                animals[name].neededFood -= parseInt(food);
                animals[name].neededFood = Math.max(animals[name].neededFood, 0);
 
                if (animals[name].neededFood === 0) {

                    console.log(`${name} was successfully fed`);
                    let areaThatLivesanAnimal = animals[name].area;
                    let index = areas[areaThatLivesanAnimal].indexOf(name);
                    areas[areaThatLivesanAnimal].splice(index, 1);

                }
            }
        }
    }
 
    console.log('Animals:');
    Object.keys(animals)
        .filter((animalName) => animals[animalName].neededFood > 0)
        .forEach((animalName) => {
            
            console.log(`${animalName} -> ${animals[animalName].neededFood}g`);

        });
 
    console.log('Areas with hungry animals:');
    Object.keys(areas).forEach((area) => {
        
        let hungry = areas[area].filter((animal) => animals[animal].neededFood > 0).length;
        if (hungry > 0) {

            console.log(`${area}: ${hungry}`);

        }
    });
}
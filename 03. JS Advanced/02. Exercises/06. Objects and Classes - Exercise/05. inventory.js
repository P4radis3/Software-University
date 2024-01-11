function inventory(array) {

    let heroes = [];

    array.forEach(line => {

        let [name, level, items] = line.split(' / ');
        let current = {
            name: name,
            level: level,
            items: items,
        }

        heroes.push(current);

    })

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach((hero) => {

        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);

    })
}
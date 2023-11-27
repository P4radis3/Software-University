function plantDiscovery(array) {

    let number = Number(array.shift());
    let plants = {};

    for (let index = 0; index < number; index++) {

        let [plant, rarity] = array[index].split('<->');
        plants[plant] = { rarity: Number(rarity), ratings: [] };

    }

    for (let index = number; index < array.length; index++) {

        let [cmd, data] = array[index].split(': ');
        if (cmd == 'Exhibition') {
            break;
        }

        let [plant, value] = data.split(' - ');
        switch (cmd) {
            case 'Rate':
                if (plants.hasOwnProperty(plant)) {
                    plants[plant].ratings.push(Number(value));
                } else {
                    console.log(`error`);
                }
                break;

            case 'Update':
                if (plants.hasOwnProperty(plant)) {
                    plants[plant].rarity = Number(value);
                } else {
                    console.log('error');
                }
                break;

            case 'Reset':
                if (plants.hasOwnProperty(plant)) {
                    plants[plant].ratings = [];
                } else {
                    console.log('error');
                }
                break;

                default:
                    console.log(error);
            }
    }

    console.log('Plants for the exhibition:');
    Object.entries(plants).forEach(([plant, data]) => {
        let averageRating = data.ratings.length > 0
            ? (data.ratings.reduce((a, b) => a + b, 0) / data.ratings.length).toFixed(2)
            : '0.00';
        console.log(`- ${plant}; Rarity: ${data.rarity}; Rating: ${averageRating}`);
    });

}
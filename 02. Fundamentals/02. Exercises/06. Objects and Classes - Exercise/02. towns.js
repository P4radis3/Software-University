function towns(array) {

    for (let town of array) {

        let [name, latitude, longitude] = town.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let object = { town: name, latitude: latitude, longitude: longitude };
        console.log(object);


    }
}
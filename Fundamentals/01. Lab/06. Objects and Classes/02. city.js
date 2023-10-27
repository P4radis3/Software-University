function printObjectProperties(object) {

    for (let index in object) {
        if (object.hasOwnProperty(index)) {
            console.log(`${index} -> ${object[index]}`);
            
        }
    }
}
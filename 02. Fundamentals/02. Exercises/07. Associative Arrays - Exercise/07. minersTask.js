function minersTask(array) {

    let resources = {};

    for (let index = 0; index < array.length; index += 2) {
        let r = array[index];
        let quantity = Number(array[index + 1]);

        if (r in resources) {
            resources[r] += quantity;
        } else {
            resources[r] = quantity; 
        }
    }

    let entry = Object.entries(resources);
    for (let [resource, quantity] of entry){
        console.log(`${resource} -> ${quantity}`)
    }
}
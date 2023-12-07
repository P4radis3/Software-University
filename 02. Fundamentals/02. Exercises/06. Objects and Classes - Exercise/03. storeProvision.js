function store(stocked, ordered) {

    let object = {};
    let stock = restock(stocked, object);
    let order = restock(ordered, stock);

    for (let product in order) {

        console.log(`${product} -> ${order[product]}`);

    }

    function restock(array, object) {

        while (array.length !== 0) {

            let [product, quantity] = [array.shift(), array.shift()];
            if (!object.hasOwnProperty(product)) {
            
                object[product] = Number(quantity);

            } else {

                object[product] += Number(quantity);

            }
        }

        return object;

    }
}
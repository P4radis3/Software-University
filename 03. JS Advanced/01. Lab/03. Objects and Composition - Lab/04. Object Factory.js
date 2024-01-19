function objectFactory(library, orders) {

    let result = [];
    for (let order of orders) {
        let currentOrder = Object.assign({}, order.template);
        for (let part of order.parts) {
            currentOrder[part] = library[part];
        }

        result.push(currentOrder);

    }

    return result;

}
function catalogue(array) {

    let catalogue = [];

    for (let index = 0; index < array.length; index++) {

        let elements = array[index].split(' : ');
        let product = {
            name: elements[0],
            price: parseFloat(elements[1])
        };

        catalogue.push(product);

    }

    catalogue.sort((a, b) => a.name.localeCompare(b.name));

    let currentLetter = '';
    for (let product of catalogue) {

        if (product.name.charAt(0).toUpperCase() === currentLetter) {

            console.log(`  ${product.name}: ${product.price}`)

        } else {

            currentLetter = product.name.charAt(0).toUpperCase();
            console.log(currentLetter);
            console.log(`  ${product.name}: ${product.price}`)

        }
    }
}
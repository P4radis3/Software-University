function listOfProducts(input) {

    let sortedProducts = input.sort();

    for (let index = 0; index < sortedProducts.length; index++) {

        console.log(`${index + 1}.${sortedProducts[index]}`);

    }

}
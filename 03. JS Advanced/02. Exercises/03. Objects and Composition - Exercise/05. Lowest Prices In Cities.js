function lowestPricesInCities(array) {
    
    let data = array.map(x => x.split(" | "))
        .reduce((accumulator, value) => {
            
            let [town, product, price] = value.map(x => (isNaN(x) ? x : Number(x)))
            accumulator[product] = accumulator[product] || { price, town };

            if (accumulator[product].price > price || accumulator[product].town === town) {
                
                accumulator[product] = { price, town };
            
            }
            
            return accumulator
            
        }, {})

    return `${Object.entries(data).map(([name, product]) => `${name} -> ${product.price} (${product.town})`).join("\n")}`;

}

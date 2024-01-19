function storeCatalogue(array) {
    
    let result = array.sort().reduce((accumulator, value) => {
        
        accumulator[value[0]] = accumulator[value[0]] || [];
        accumulator[value[0]].push(value);
        return accumulator;

    }, {})

    Object.entries(result).forEach(([letter, items]) =>
        console.log(`${letter}
  ${items.map(y => y.split(" : ").join(": ")).join("\n  ")}`)

    );
}
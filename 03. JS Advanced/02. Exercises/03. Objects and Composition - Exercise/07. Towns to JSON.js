function townsToJSON(array) {

    const parser = string =>
        string.split("|").filter(x => x !== "").map(x => x.trim()).map(x => (isNaN(x) ? x : Number(Number(x).toFixed(2))));
        let headings = parser(array[0]);

    return JSON.stringify(
        array.slice(1).map(x => {
            
            let line = parser(x)
            
            return headings.reduce((row, heading, entry) => {
                row[heading] = line[entry]
                return row;
                
            }, {})
        })
    )

}
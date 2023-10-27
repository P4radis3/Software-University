function printJSONKeysAndValues(string) {
    let parse = JSON.parse(string);

    for (let index in parse) {
        if (parse.hasOwnProperty(index)) {
            let value = parse[index];
            console.log(`${index}: ${value}`);
        }
    }
}
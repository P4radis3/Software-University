function phoneBook(input) {
    
    let result = input.reduce((actual, current) => {
        let [name, phone] = current.split(' ');
        actual[name] = phone;

        return actual;

    },
        {}
    );


    return Object.entries(result)
        .map(([name, phone]) => {
            return `${name} -> ${phone}`;

        })

        .join('\n');

}
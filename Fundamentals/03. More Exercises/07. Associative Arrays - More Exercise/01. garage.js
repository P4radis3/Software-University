function garage(array) {

    let garages = [];
    for (let line of array) {

        let [number, info] = line.split(' - ');
        let isFound = garages.find(garage => garage.number === number);
        if (!isFound) {

            garages.push({
                number: number,
                info: []

            });

            isFound = garages.find(garage => garage.number === number);

        }

        isFound.info.push(info);

    }

    let output = '';
    garages.forEach(garage => {

        output += `Garage № ${garage.number}\n`;
        for (let current of garage.info) {

            current = current.replace(/: /g, ' - ');

            output += `--- ${current}\n`;
        
        }
    }
    );

    console.log(output);
    
}
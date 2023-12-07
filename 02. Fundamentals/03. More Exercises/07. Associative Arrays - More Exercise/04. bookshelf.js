function solve(array) {
    
    let library = {};
    for (let line of array) {
        if (line.includes('->')) {

            let [book, genre] = line.split(' -> ');

            if (!library.hasOwnProperty(book)) {

                library[book] = { [genre]: [] };

            }
        } else {

            let [info, genre] = line.split(', ');
            for (let key in library) {
                if (library[key].hasOwnProperty(genre)) {
                
                    library[key][genre].push(info);
                    break;

                }
            }
        }
    }

    Object.keys(library).sort((a, b) => Object.entries(library[b])[0][1].length - Object.entries(library[a])[0][1].length)
        .forEach(id => {

            console.log(`${id} ${Object.keys(library[id])}: ${Object.values(library[id])[0].length}`);

            Object.values(library[id]).forEach(values => {

                values.sort((a, b) => a.localeCompare(b)).forEach(v => {
                    console.log(`--> ${v}`);
                    
                }
                );
            }
            );
        }
        );
}
function listProcessor(input) {

    let array = [];

    let object = {
        
        add: string => array.push(string),
        remove: string => (array = array.filter(x => x !== string)),
        print: () => console.log(array.join(','))

    }

    input.forEach(saidInput => {

        let [command, value] = saidInput.split(' ');
        object[command](value)

    })
}
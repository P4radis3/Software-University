function serializeString(array) {

    let string = array[0];
    let letters = [];
 
    for (let index = 0; index < string.length; index++) {
        if (!letters.includes(string[index])) {

            letters.push(string[index]);
            
        }
    }
 
    while (letters.length > 0) {

        let character = letters.shift();
        let ind = [];
 
        for (let index = 0; index < string.length; index++) {
            if (character === string[index]) {

                ind.push(index);

            }
        }
 
        console.log(character + ':' + ind.join('/'));

    }
}
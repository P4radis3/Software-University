function deserializeString(array) {

    array.pop();
    let result = [];

    for (let cmd of array) {

        let [char, index] = cmd.split(':');
        index = index.split('/');

        for (let index of index) {

            result[+ index] = char;

        }
    }

    return result.join('');

}
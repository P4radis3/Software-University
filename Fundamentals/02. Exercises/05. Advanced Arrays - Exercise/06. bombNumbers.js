function detonateSequence(sequences, bombInfo) {
    
    let [bombNumber, power] = bombInfo;
    let result = 0;

    while (sequences.includes(bombNumber)) {

        let bombIndex = sequences.indexOf(bombNumber);
        let startIndex = Math.max(0, bombIndex - power);
        let endIndex = Math.min(sequences.length - 1, bombIndex + power);


        for (let index = startIndex; index <= endIndex; index++) {

            sequences[index] = null;

        }
    }

    for (let number of sequences) {

        if (number !== null) {

            result += number;
            
        }
    }

    return result;
    
}
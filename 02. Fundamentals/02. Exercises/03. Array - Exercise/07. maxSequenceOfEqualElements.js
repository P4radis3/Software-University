function maxSequenceOfEqualElements(array) {

    let longestSequence = [];

    for (let i = 0; i < array.length; i++) {

        let current = array[i];
        let currentSequence = [current];

        for (let j = i + 1; j < array.length; j++) {
            let nextNumber = array[j];

            if (current === nextNumber) {
                currentSequence.push(nextNumber);
            } else {
                break;
            }
        }
        if (currentSequence.length > longestSequence.length) {
            longestSequence = currentSequence;
        }
    }

    console.log(longestSequence.join(" "));

}
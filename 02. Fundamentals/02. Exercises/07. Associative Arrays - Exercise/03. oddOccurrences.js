function solve(array) {
    let words = array.split(" ").map(el => el.toLowerCase());
    let hold = {};

    hold = words.reduce((first, current) => {
        if (!first.hasOwnProperty(current)) {
            first[current] = 1;
        } else {
            first[current]++;
        }

        return first;

    },
        {}
    );

    hold = Object.entries(hold)
        .filter(([word, value]) => {

            if (value % 2 !== 0) {
                return word;
            }

        }
    )

    .map(el => el[0]);
    console.log(hold.join(" "));
    
}
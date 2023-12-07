function shootingForTheWin(input) {

    let targets = input.shift().split(' ').map(Number);

    let shots = 0;
    let givenCmd = input.shift();


    while (givenCmd !== 'End') {

        let targetIndex = Number(givenCmd);

        if (targetIndex >= 0 && targetIndex < targets.length) {
            for (let index = 0; index < targets.length; index++) {

                let currentTarget = targets[targetIndex];

                if (index !== targetIndex && targets[index] !== -1) {

                    if (targets[index] > currentTarget) {
                        targets[index] -= currentTarget;

                    } else {

                        targets[index] += currentTarget;

                    }
                }
            }

            targets[targetIndex] = -1;
            shots++;

        }

        givenCmd = input.shift();

    }

    console.log(`Shot targets: ${shots} -> ${targets.join(" ")}`);

}
function movingTarget(input) {

    let targets = input.shift().split(" ").map(Number);
    
    while (input.length > 0) {
        let cmd = input.shift();

        if (cmd == "End") {
            break;
        }

        let curCommand = cmd.split(" ")[0];
        switch (curCommand) {
            case "Shoot":
                let shootingIndex = Number(cmd.split(" ")[1]);
                let powerIndex = Number(cmd.split(" ")[2]);

                if (shootingIndex >= 0 && shootingIndex < targets.length) {
                    targets[shootingIndex] -= powerIndex;
                    if (targets[shootingIndex] <= 0) {

                        targets.splice(shootingIndex, 1);

                    }
                }
                break;

            case "Add":
                let indexToAdd = Number(cmd.split(" ")[1]);
                let valueIndex = Number(cmd.split(" ")[2]);

                if (indexToAdd >= 0 && indexToAdd < targets.length) {

                    targets.splice(indexToAdd, 0, valueIndex);

                } else {

                    console.log(`Invalid placement!`);

                }
                break;

            case "Strike":
                let strikingIndex = Number(cmd.split(" ")[1]);
                let radius = Number(cmd.split(" ")[2]);
                if (strikingIndex >= 0 && strikingIndex < targets.length) {
                    if (strikingIndex - radius >= 0 && strikingIndex + radius < targets.length) {
                        targets.splice(strikingIndex - radius, radius + radius + 1);

                    } else {

                        console.log(`Strike missed!`);

                    }
                }
                break;
        }
    }

    console.log(targets.join("|"));

    function shootCommand(arr, index, power) {
        let curItem = arr[index];
        let itemForRemove = arr[index];

        if (curItem == undefined) {

            return arr;

        }

        if (index <= arr.length - 1) {

            curItem = curItem - power;

        }

        if (curItem <= 0) {
            arr = arr.filter((x) => x != itemForRemove);
        } else {
            arr[index] = curItem;
        }

        return arr;

    }
}
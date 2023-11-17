function solve(array) {

    let armies = {};
    let armyLeaders = [];
    for (let param of array) {
        if (param.includes('arrives')) {

            let indexOfArrives = param.indexOf('arrives');
            let leader = param.slice(0, indexOfArrives).trim();
            if (!armies.hasOwnProperty(leader)) {

                armies[leader] = {
                    name: {},
                    total: 0

                };
            }

            armyLeaders.push(leader);
        } else if (param.includes('defeated')) {

            let indexOfDefeated = param.indexOf('defeated');
            let leader = param.slice(0, indexOfDefeated).trim();
            let indexOfLeader = armyLeaders.indexOf(leader);
            if (armies.hasOwnProperty(leader)) {

                delete armies[leader];

                armyLeaders.splice(indexOfLeader, 1);
            }
        } else if (param.includes(':')) {

            let [leader, army] = param.split(': ');
            let [name, count] = army.split(', ');
            if (armies.hasOwnProperty(leader)) {
                if (!armies[leader].name.hasOwnProperty(name)) {

                    armies[leader].name[name] = Number(count);
                    armies[leader].total += Number(count);

                }
            }
        } else if (param.includes('+')) {

            let [armyName, count] = param.split(' + ');
            armyLeaders.forEach(leader => {
                for (let army in armies[leader]) {
                    if (armies[leader][army].hasOwnProperty(armyName)) {

                        armies[leader].name[armyName] += Number(
                            count

                        );

                        armies[leader].total += Number(count);

                    }
                }
            }
            );
        }
    }

    Object.entries(armies)
        .sort((a, b) => b[1].total - a[1].total)
        .forEach(army => {
            console.log(`${army[0]}: ${army[1].total}`);

            Object.entries(army[1].name)
                .sort((a, b) => b[1] - a[1])
                .forEach(armyName => {
                    console.log(`>>> ${armyName[0]} - ${armyName[1]}`)

                }
                );
        }
        );
}
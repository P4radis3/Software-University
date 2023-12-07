function race(array) {

    let pNames = array.shift().split(', ');
    let cmd = array.shift();
    let object = {};

    while (cmd !== 'end of race') {

        let reg = /[A-Za-z]/g;
        let names = cmd.match(reg).join('');

        let pDistance = /[0-9]/g;
        let distance = cmd.match(pDistance).join('');
        let distanceSum = 0;

        for (let index = 0; index < distance.length; index++) {

            let digit = Number(distance[index]);
            distanceSum += digit;

        }

        if (pNames.includes(names)) {
            if (!object.hasOwnProperty(names)) {

                object[names] = distanceSum;

            } else {

                object[names] += distanceSum;

            }
        }
        cmd = array.shift();
    }

    let sort = []
    for (let name in object) {

        sort.push([name, object[name]]);

    }

    sort.sort((a, b) => b[1] - a[1])
    console.log(`1st place: ${sort[0][0]}`);
    console.log(`2nd place: ${sort[1][0]}`);
    console.log(`3rd place: ${sort[2][0]}`);

}
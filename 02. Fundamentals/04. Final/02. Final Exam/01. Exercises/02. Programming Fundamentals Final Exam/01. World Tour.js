function worldTour(input) {

    let locations = input.shift();
    let line = input.shift();

    while (line !== 'Travel') {

        let [cmd, ...rest] = line.split(':');
        switch (cmd.trim()) {
            case 'Add Stop':
                let index = Number(rest[0]);
                let string = rest[1];
                if (index >= 0 && index <= locations.length) {
                    locations = locations.split('');
                    locations.splice(index, 0, string);
                    locations = locations.join('');
                }
                break;


            case 'Remove Stop':
                let start = Number(rest[0]);
                let end = Number(rest[1]);
                if (
                    start >= 0 && start < locations.length && end >= 0 && end < locations.length && start <= end) {
                    locations = locations.split('');
                    locations.splice(start, end - start + 1);
                    locations = locations.join('');
                }
                break;


            case 'Switch':
                let oldString = rest[0];
                let newString = rest[1];
                let reg = new RegExp(oldString, 'g');
                locations = locations.replace(reg, newString);
                break;

            default:
                break;
        }

        console.log(locations);
        line = input.shift();

    }

    console.log(`Ready for world tour! Planned stops: ${locations}`);

}
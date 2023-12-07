function activationKeys(input) {

    let key = input.shift();
    for (let line of input) {

        if (line == 'Generate') {
            console.log(`Your activation key is: ${key}`);
            break;
        }

        let [cmd, ...arg] = line.split('>>>');

        switch(cmd) {
            case 'Contains':
                let substring = arg[0];
                if (key.includes(substring)) {
                    console.log(`${key} contains ${substring}`);
                } else {
                    console.log('Substring not found!');
                }
                break;

                case 'Flip':
                let type = arg[0];
                let start = Number(arg[1]); 
                let end = Number(arg[2]);

                let toFlip = key.substring(start, end);
                if(type == 'Upper') {
                    toFlip = toFlip.toUpperCase();
                } else {
                    toFlip = toFlip.toLowerCase();
                }

                key = key.substring(0, start) + toFlip + key.substring(end);

                console.log(key);
                break;


                case 'Slice':
                    let sliceStart = Number(arg[0]);
                    let sliceEnd = Number(arg[1]);

                    key = key.substring(0, sliceStart) + key.substring(sliceEnd) 

                console.log(key);
                break;

                default:
                    break;
                    
        }
    }

}
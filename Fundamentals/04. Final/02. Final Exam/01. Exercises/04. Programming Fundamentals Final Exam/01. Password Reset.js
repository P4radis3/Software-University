function passwordReset(input) {

    let pass = input.shift();

    for (let line of input) {

        if (line == 'Done') {
            break;
        }

        let token = line.split(' ');
        let cmd = token[0];

        switch (cmd) {
            case 'TakeOdd':
                pass = pass.split('').filter((_, index) => index % 2 !== 0).join('');
                console.log(pass);
                break;

            case 'Cut':
                let index = token[1];
                let length = token[2];
                let sub = pass.substr(index, length);
                pass = pass.replace(sub, '');
                console.log(pass);
                break;

            case 'Substitute':
                let subReplace = token[1];
                let substitute = token[2];
                if (pass.includes(subReplace)) {
                    pass = pass.split(subReplace).join(substitute);
                    console.log(pass);
                } else {
                    console.log("Nothing to replace!");
                }
                break;

            default: break;
        }
    }

    console.log(`Your password is: ${pass}`);

}
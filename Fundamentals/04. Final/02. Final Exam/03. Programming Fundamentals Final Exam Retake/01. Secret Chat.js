function solve(array) {

    let message = array.shift();

    while (array[0] != 'Reveal') {

        let line = array.shift();
        let token = line.split(':|:');
        let cmd = token[0];

        switch (cmd) {

            case 'InsertSpace':

                let index = Number(token[1]);
                let firstHalf = message.slice(0, index);
                let secondHalf = message.slice(index);
                message = firstHalf + ' ' + secondHalf;
                break;


            case 'Reverse':

                let substring = token[1];
                let first = message.indexOf(substring);

                if (first == -1) {
                    console.log('error');
                    continue;
                }

                let left = message.slice(0, first);
                let right = message.slice(first + substring.length);
                message = left + right + substring.split('').reverse().join('');
                break;


            case 'ChangeAll':

                let match = token[1];
                let replace = token[2];
                let parts = message.split(match);
                message = parts.join(replace);
                break;

        }

        console.log(message);

    }

    console.log(`You have a new text message: ${message}`);

}
function theImitationGame(array) {

    array.pop()
    let message = array.shift()

    for (let instructions of array) {

        let [command, firstArgument, secondArgument] = instructions.split('|');

        if (command == 'Move') {

            let endIndex = +firstArgument;
            message = message.slice(endIndex) + message.slice(0, endIndex);

        }

        if (command == 'Insert') {

            let [index, character] = [+firstArgument, secondArgument];
            message = [...message];
            message.splice(index, 0, character);
            message = message.join('');

        }

        if (command == 'ChangeAll') {

            let [oldChar, newChar] = [firstArgument, secondArgument];
            while (message.includes(oldChar))
                message = message.replace(oldChar, newChar);

        }
    }

    return `The decrypted message is: ${message}`;

}

theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode'])
function chatLogger(input) {

    let chatBox = [];
    for (let command of input) {
        if (command == 'end') {
            break;
        }


        let [commands, ...array] = command.split(' ');
        switch (commands) {
            case 'Chat':
                let msg = array.join(' ');
                chatBox.push(msg);
                break;


            case 'Delete':
                let msgToDel = array.join(' ');
                let deldMessage = chatBox.indexOf(msgToDel);
                if (deldMessage !== -1) {
                    chatBox.splice(deldMessage, 1);
                }
                break;


            case 'Edit':
                let msgToEdit = array[0];
                let edit = array.splice(1).join(' ');
                let editedMsg = chatBox.indexOf(msgToEdit);
                if (editedMsg !== -1) {
                    chatBox[editedMsg] = edit;
                }
                break;


            case 'Pin':
                let msgToPin = array.join(' ');
                let pinned = chatBox.indexOf(msgToPin);
                if (pinned !== -1) {
                    chatBox.splice(pinned, 1);
                    chatBox.push(msgToPin);
                }
                break;


            case 'Spam':
                let spam = array.join(' ').split(' ');
                chatBox.push(...spam);
                break;

        }
    }

    console.log(chatBox.join('\n'));

}

function messageTranslator(input) {
   
    let number = Number(input.shift());
    let msgs = [];

    for (let index = 0; index < number; index++) {
        
        let singleMsg = input.shift();
        msgs.push(singleMsg);
    }

    for (let line of msgs) {

        let rgx = /![A-Z][a-z]{2,}!:\[[A-Za-z]{8,}]/g;
        let match = rgx.exec(line);


        if (match) {

            let index = line.indexOf('[');
            let encrypted = line.slice(index + 1, line.length - 1);
            encrypted = encrypted.split('');
            let result = '';

            for (let uncrpyted of encrypted) {
                if (uncrpyted != ' ') {

                    let character = uncrpyted.charCodeAt();
                    result += character + ' ';

                }
            }

            let finalMessageResult = line.slice(0, index);
            finalMessageResult = finalMessageResult.split('!');
            finalMessageResult = finalMessageResult.join('');
            console.log(`${finalMessageResult} ${result.trimEnd()}`);
            
        } else {

            console.log("The message is invalid");   

        }
    }
}


messageTranslator(["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"])
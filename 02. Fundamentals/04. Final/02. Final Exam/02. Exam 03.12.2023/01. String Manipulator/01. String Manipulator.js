function stringManipulator(input) {

    let string = input.shift();
    function translate(char, replacement) {

        string = string.split(char).join(replacement);
        console.log(string);

    }

    function includes(substring) {

        console.log(string.includes(substring) ? 'True' : 'False');

    }

    function start(substring) {

        console.log(string.startsWith(substring) ? 'True' : 'False');

    }

    function lowercase() {

        string = string.toLowerCase();
        console.log(string);

    }

    function findIndex(char) {

        let index = string.lastIndexOf(char);
        console.log(index);

    }

    function remove(startIndex, count) {

        let start = parseInt(startIndex);
        let end = start + parseInt(count);
        string = string.slice(0, start) + string.slice(end);
        console.log(string);

    }

    for (let cmd of input) {

        let [executedCmd, ...arg] = cmd.split(' ');
        switch (executedCmd) {
            case 'Translate':
                translate(arg[0], arg[1]);
                break;

            case 'Includes':
                includes(arg[0]);
                break;

            case 'Start':
                start(arg[0]);
                break;

            case 'Lowercase':
                lowercase();
                break;

            case 'FindIndex':
                findIndex(arg[0]);
                break;

            case 'Remove':
                remove(arg[0], arg[1]);
                break;

            case 'End':
                return;

        }
    }
}

solve(["//Thi5 I5 MY 5trING!//", "Translate 5 s", "Includes string", "Start //This", "Lowercase", "FindIndex i", "Remove 0 10", "End"])
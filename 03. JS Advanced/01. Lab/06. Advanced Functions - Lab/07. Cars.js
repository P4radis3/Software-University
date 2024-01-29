function cars(input) {

    let result = {};
    let creation = processor();

    for (let line of input) {
        if (line.includes('create') && !line.includes('inherit')) {
            let [command, name] = line.split(' ');
            creation[command](name);
        }

        if (line.includes('create') && line.includes('inherit')) {

            let [firstName, command, secondName] = line.split(' ');
            creation[command](firstName, secondName);

        }

        if (line.includes('set')) {

            let [command, name, property, string] = line.split(' ');
            creation[command](name, property, string);

        }

        if (line.includes('print')) {

            let [command, objectName] = line.split(' ');
            creation[command](objectName);

        }
    }

    function processor() {
        function create(name) {
            result[name] = {};

        }

        function inherit(name1, name2) {
            result[name1] = Object.create(result[name2]);
        }

        function set(name, property, string) {

            result[name][property] = string;
        }

        function print(objectName) {
            
            let temporary = [];
            for (key in result[objectName]) {
            
                temporary.push(`${key}:${result[objectName][key]}`);
            
            }
        
            console.log(temporary.join(','));
            
        }

        return {
            create, inherit, set, print
        }
    }
}
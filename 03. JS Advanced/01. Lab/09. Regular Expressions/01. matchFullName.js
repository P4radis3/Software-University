function matchFullName(string) {

    let names = [];
    let pattern = /(\b[A-Z][a-z]+ [A-Z][a-z]+\b)/g;

    let name;
    while (name = pattern.exec(string)) {
        names.push(name[0]);
    }

    console.log(names.join(' '));

}
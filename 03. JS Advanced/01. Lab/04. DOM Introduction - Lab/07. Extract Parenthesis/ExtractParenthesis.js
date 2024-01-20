function extract(content) {

    let paragraph = document.getElementById(content).textContent;
    let regex = /\(([^)]+)\)/g;
    let result = [];

    let match = regex.exec(paragraph);

    while (match) {

        result.push(match[1]);
        match = regex.exec(paragraph);

    }

    return result.join('; '); 

}
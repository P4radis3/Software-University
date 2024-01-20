function colorize() {

    document.getElementsByTagName('tr');
    let row = Array.from(document.getElementsByTagName('tr'));
    for (let index = 1; index < row.length; index += 2) {

        row[index].style.background = 'teal';

    }

}
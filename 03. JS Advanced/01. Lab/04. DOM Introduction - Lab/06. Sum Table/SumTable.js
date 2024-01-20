function sumTable() {

    let table = document.querySelectorAll('tr');
    let total = 0;

    for (let index = 1; index < table.length; index++) {

        let columns = table[index].children;
        let price = columns[columns.length - 1].textContent;
        total += Number(price);

    }

    document.getElementById('sum').textContent = total;

}
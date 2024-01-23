function generateReport() {

    let html = {

        check: document.querySelectorAll("input[type='checkbox']"),
        row: document.getElementsByTagName('tr'),
        output: document.getElementById('output'),

    }

    let select = Array.from(html.check)
        .map((x, i) => [x, i])
        .filter(x => x[0].checked)
        .map(x => [x[0].name, x[1]])

    let rows = Array.from(html.row)
        .slice(1)
        .map(x => Array.from(x.children).map(y => y.innerHTML))

    html.output.value = JSON.stringify(
        rows.map(x =>
            select.reduce((accumulator, value) => {
                let [colName, index] = value
                accumulator[colName] = x[index]
                return accumulator
                
            }, {})
        )
    )
}
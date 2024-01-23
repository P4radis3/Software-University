function solve() {

    const html = {
        number: document.getElementById("input"),
        convert: document.getElementById("selectMenuTo"),
        output: document.getElementById("result"),
        button: document.querySelector("#container > button"),
    }
    const makeOptions = array =>
        array.map(x => {
            let option = document.createElement("option")
            x = x.toLocaleLowerCase()
            option.value = x
            option.text = `${x.charAt(0).toLocaleUpperCase()}${x.slice(1)}`
            return option
        })

    const print = n => (html.output.value = n)
    makeOptions(["binary", "hexadecimal"]).forEach(x => html.convert.add(x))

    function convert(convertTo, number) {
        number = Number(number) || 0
        const formats = {
            binary: n => (n >>> 0).toString(2),
            hexadecimal: n => n.toString(16).toLocaleUpperCase(),
        }

        return formats[convertTo](number)
    }

    html.button.addEventListener("click", () =>
        print(convert(html.convert.value, html.number.value))
    )
}
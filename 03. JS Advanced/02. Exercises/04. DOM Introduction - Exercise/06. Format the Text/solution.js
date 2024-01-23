function solve() {

  let html = {

    input: document.getElementById('input'),
    output: document.getElementById('output'),

  }

  let array = html.input.value.split('.').filter(x => x.length >= 1).map(x => x.trim())
  let tag = (tempTag, text) => `<${tempTag}>${text}</${tempTag}>`
  let index = 0;

  html.output.innerHTML = array.reduce((accumulator, value, redIndex) => {

    if (redIndex % 3 === 0 && redIndex !== 0) index += 1
    accumulator[index] = (accumulator[index] || '') + `${value}.`
    return accumulator

  }, [])

    .map(x => tag("p", x))
    .join("\n")


}
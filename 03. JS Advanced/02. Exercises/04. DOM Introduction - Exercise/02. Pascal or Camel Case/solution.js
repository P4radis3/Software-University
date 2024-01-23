function solve() {

  let data = {

    case: document.getElementById('naming-convention').value,
    string: document.getElementById('text').value,
    result: document.getElementById('result'),

  };

  let result = data.string
    .split(" ")
    .map(x => x.toLocaleLowerCase())
    .map(x => `${x.charAt(0).toLocaleUpperCase()}${x.slice(1)}`)
    .join("")

  if (data.case !== 'Camel Case' && data.case !== 'Pascal Case') {

    data.result.innerHTML = 'Error!'

  } else {

    data.result.innerHTML = data.case == "Pascal Case"
      ? result
      : `${result.charAt(0).toLocaleLowerCase()}${result.slice(1)}`
  }
}
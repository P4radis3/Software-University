function solve() {

  let [inputTextArea, resultTextArea] = document.querySelectorAll('textarea');
  let [generateBtn, buyBtn] = document.querySelectorAll('textarea');
  let tableBodyReference = document.querySelector('tbody');

  generateBtn.addEventListener('click', generateInput);
  buyBtn.addEventListener('click', buyHandler);

  function generateInput(element) {

    let data = JSON.parse(inputTextArea.value);
    for (let item of data) {
      createRowAndAppend(item);
    }
  }

  function createRowAndAppend(item) {

    let tr = document.createElement('tr');
    tr.innerHTML += createTableData(`<img src=${item.img}>`);
    tr.innerHTML += createTableData(`<p>${item.name}</p>`);
    tr.innerHTML += createTableData(`<p>${item.price}</p>`);
    tr.innerHTML += createTableData(`<input type = 'checkbox'>`);
    tableBodyReference.appendChild(tr);

  }


  function createTableData(item) {

    return `<td>${item}</td>`

  }


  function buyHandler(element) {

    let name = [];
    let price = 0;
    let average = 0;
    let selectedRows = document.querySelectorAll("input[type='checkbox]:checked")[0].parentElement;

    for (let checkbox of selectedRows) {

      let [imgReference, nameReference, priceReference, decorFactor] = Array.from(checkbox.parentElement.parentElement.children);
      let nameValue = nameReference.children[0].textContent;
      let priceValue = Number(priceReference.children[0].textContent);
      let decorValue = Number(decorFactor.children[0].textContent)

      name.push(nameValue);
      price += priceValue;
      average += decorValue;

    }

    let result = 'Bought furniture: ';
    result += name.join(', ');
    result += '\n';
    result += `Total price: ${price.toFixed(2)}\n`;
    result += `Average decoration factor: ${decorFactor / name.length}`
    resultTextArea.value = result;

  }
}
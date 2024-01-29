function furniture() {
  
  let [inputTextarea, outputTextarea] = document.querySelectorAll('textarea');
  let [generateBtn, buyBtn] = document.querySelectorAll('button');
  let tbody = document.querySelector('tbody');
  generateBtn.addEventListener('click', generateFurniture);
  buyBtn.addEventListener('click', buyFurniture);

  function generateFurniture() {
    
    if (!inputTextarea.value) return;
    let furnitureItems = JSON.parse(inputTextarea.value);
    let rowsHtml = furnitureItems.map(item =>
      `<tr>
        <td><img src=${item.img}></td>
        <td><p>${item.name}</p></td>
        <td><p>${item.price}</p></td>
        <td><p>${item.decFactor}</p></td>
        <td><input type="checkbox"/></td>
        </tr>`
    ).join('');

    tbody.innerHTML += rowsHtml;

  }

  function buyFurniture() {

    let checkedItems = [...tbody.querySelectorAll('input:checked')].map(input => input.parentNode.parentNode);
    let furnitureName = checkedItems.map(row => row.children[1].textContent);
    let totalPrice = checkedItems.reduce((sum, row) => sum + Number(row.children[2].textContent), 0);
    let averageDecFactor = checkedItems.length > 0 ?
      checkedItems.reduce((sum, row) => sum + Number(row.children[3].textContent), 0) / checkedItems.length :
      0;

    outputTextarea.textContent += `Bought furniture: ${furnitureName.join(', ')}\n`;
    outputTextarea.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputTextarea.textContent += `Average decoration factor: ${averageDecFactor}`;

  }
}
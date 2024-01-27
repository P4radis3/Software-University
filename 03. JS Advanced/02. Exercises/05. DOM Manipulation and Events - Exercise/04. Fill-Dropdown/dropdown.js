function addItem() {

    let selectMenu = document.getElementById('menu');
    let textInput = document.getElementById('newItemText');
    let keyInput = document.getElementById('newItemValue');
   
    let textValue = textInput.value;
    let keyValue = keyInput.value;

    let option = document.createElement('option');
    option.value = keyValue;
    option.text = textValue;

    selectMenu.appendChild(option);
    
    textInput.value = '';
    keyInput.value = '';

}
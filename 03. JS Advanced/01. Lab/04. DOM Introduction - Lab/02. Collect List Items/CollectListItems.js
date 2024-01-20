function extractText() {

    let result = [];
    let list = document.getElementById('items');

    let items = Array.from(list.children);
    for (let item of items) {
        result.push(item.textContent);
    }

    let textarea = document.getElementById('result');
    textarea.value = result.join('\n')


}
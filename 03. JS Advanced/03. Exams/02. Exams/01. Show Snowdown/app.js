window.addEventListener("load", solve);
function solve() {

    let inputs = {
        name: document.getElementById('snowman-name'),
        height: document.getElementById('snowman-height'),
        location: document.getElementById('location'),
        author: document.getElementById('creator-name'),
        attribute: document.getElementById('special-attribute'),
    };

    let addBtn = document.querySelector('.add-btn');
    let preview = document.querySelector('.snowman-preview');
    let snowList = document.querySelector('.snow-list');
    let main = document.getElementById('hero');

    addBtn.addEventListener('click', onAdd);
    function onAdd(element) {
        element.preventDefault();

        for (let keys in inputs) {
            if (inputs[keys].value === '') {
                return;
            }
        }

        let li = document.createElement('li');
        li.className = 'snowman-info';
        let article = document.createElement('article');
        article.innerHTML += `<p>Name: ${inputs.name.value}</p>`;
        article.innerHTML += `<p>Height: ${inputs.height.value}</p>`;
        article.innerHTML += `<p>Location: ${inputs.location.value}</p>`;
        article.innerHTML += `<p>Creator: ${inputs.author.value}</p>`;
        article.innerHTML += `<p>Attribute: ${inputs.attribute.value}</p>`;

        let div = document.createElement('div');
        div.classList = 'btns';

        let edit = document.createElement('button');
        let next = document.createElement('button');
        edit.classList = 'edit-btn';
        edit.textContent = 'Edit';
        next.classList = 'next-btn';
        next.textContent = 'Next';
        div.appendChild(edit);
        div.appendChild(next);
        li.appendChild(article);
        li.appendChild(div);
        preview.appendChild(li);

        let result = {};

        for (let key in inputs) {
            result[key] = inputs[key].value;
            inputs[key].value = '';
        }

        addBtn.disabled = true;

        edit.addEventListener('click', onEdit);
        next.addEventListener('click', onNext);


        function onEdit() {
            li.remove();
            for (let keys in inputs) {
                inputs[keys].value = result[keys];
            }

            addBtn.disabled = false;

        }

        function onNext() {
            div.remove();
            let send = document.createElement('button');
            send.className = 'send-btn';
            send.textContent = 'Send';

            article.appendChild(send);
            snowList.appendChild(li);
            send.addEventListener('click', onSend);

            function onSend() {
                main.remove();
                let back = document.createElement('button');
                back.className = 'back-btn';
                back.textContent = 'Back';

                document.body.appendChild(back);
                document.getElementById('back-img').removeAttribute('hidden');

                back.addEventListener('click', function () {
                    window.location.reload();
                });
            }
        }
    }
}
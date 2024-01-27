function lockedProfile() {

    let buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(x => x.addEventListener('click', clickHandler));

    function clickHandler(element) {

        let hidden = element.currentTarget.parentElement.querySelector('div');
        let currentRadio = element.target.parentElement.querySelector("input[type='radio']:checked");

        if (currentRadio.value == 'unlock') {
            if (element.target.textContent == 'Show more') {

                element.currentTarget.textContent = 'Hide it';
                hidden.style.display = 'block';

            } else {
                element.currentTarget.textContent = 'Show more';
                hidden.style.display = 'none';
            }
        }

    }


}
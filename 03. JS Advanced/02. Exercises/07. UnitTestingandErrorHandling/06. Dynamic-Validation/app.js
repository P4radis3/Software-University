function validate() {

    let email = document.getElementById('email');
    email.addEventListener('change', onChange);

    function onChange(element) {

        let email = element.target.value;
        let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (regex.test(email)) {

            element.target.className = '';

        } else {

            element.target.className = 'error';

        }
    }
}
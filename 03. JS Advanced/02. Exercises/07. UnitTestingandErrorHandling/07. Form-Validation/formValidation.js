function validate() {
    document.querySelector("#submit").type = "button";

    document.querySelector("#company").addEventListener("change", () => {
        let companyInfo = document.querySelector("#companyInfo");
        companyInfo.style.display = document.querySelector("#company").checked ? "block" : "none";
    });

    document.querySelector("#submit").addEventListener("click", () => {
        let isValid = true;

        let username = document.querySelector("#username");
        let email = document.querySelector("#email");
        let password = document.querySelector("#password");
        let confirmPassword = document.querySelector("#confirm-password");
        let companyNumber = document.querySelector("#companyNumber");

        let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
        let passwordPattern = /^[\w]{5,15}$/;

        if (!usernamePattern.test(username.value)) {
            username.style.borderColor = "red";
            isValid = false;
        } else {
            username.style.borderColor = "";
        }

        if (!emailPattern.test(email.value)) {
            email.style.borderColor = "red";
            isValid = false;
        } else {
            email.style.borderColor = "";
        }

        if (!passwordPattern.test(password.value) || password.value !== confirmPassword.value) {
            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
            isValid = false;
        } else {
            password.style.borderColor = "";
            confirmPassword.style.borderColor = "";
        }

        if (document.querySelector("#company").checked) {
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = "red";
                isValid = false;
            } else {
                companyNumber.style.borderColor = "";
            }
        }

        document.querySelector("#valid").style.display = isValid ? "block" : "none";
    });
}
const item = 'userData';
export function getUserData() {
    return JSON.parse(localStorage.getItem(item));
}

export function setUserData(data) {
    return localStorage.setItem(item, JSON.stringify(data));
}

export function clearUserData() {
    localStorage.removeItem(item);
}

export function createSubmitHandler(callback) {

    return function (event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        callback(data, form);

    };
}
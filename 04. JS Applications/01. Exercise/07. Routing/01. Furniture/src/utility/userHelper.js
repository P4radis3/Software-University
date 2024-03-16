function setUserData(userData) { localStorage.setItem('userData', JSON.stringify(userData)); }
function getUserData() { return JSON.parse(localStorage.getItem('userData')); }
function clearUserData() { localStorage.removeItem('userData'); }

function getUserToken() {
    const userData = getUserData();
    return userData._id;
}

function getUserId() {
    const userData = getUserData();
    return userData._id;
}

function hasOwner(ownerId) {
    const id = getUserData();
    return ownerId == id;
}

export const userHelper = { setUserData, getUserData, clearUserData, getUserToken, getUserId, hasOwner }
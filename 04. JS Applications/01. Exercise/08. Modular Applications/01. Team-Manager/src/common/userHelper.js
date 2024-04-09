function setUserData(data) { localStorage.setItem('user', JSON.stringify(data)); }
function getUserData() { return JSON.parse(localStorage.getItem('user')); }
function getUserId() { return getUserData()._id; }
function getToken() { return getUserData().accessToken; }



export const userHelper = { setUserData, getUserData, getUserId, getToken };
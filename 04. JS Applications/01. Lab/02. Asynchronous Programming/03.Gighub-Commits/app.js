let list = document.getElementById('commits')
function loadCommits() {

    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let url = `https://api.github.com/repos/${username}/${repo}/commits`;


    fetch(url)
        .then(onHeaders)
        .then(displayCommit)
        .catch(onError);

    function onHeaders(response) {
        if (!response.ok) {
            throw 'Error';
        }

        return response.json();

    }

    function displayCommit(data) {
        list.replaceChildren(...data.map(createListItem));
    }

    function onError(error) {
        console.error(error);
    }

    function createListItem({ commit: { author: { name }, message } }) {
        let item = document.createElement('li');
        item.textContent = `${name}: ${message}`;

        return item;
    }

}
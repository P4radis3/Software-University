function sortArticleComments(array) {
    
    let dataBase = { userList: [], articleList: [], comments: {} };

    for (let line of array) {
        if (line.split(' ').length === 2) {
    
            let [command, item] = line.split(' ');

            if (command === 'user') {
                if (!dataBase.userList.includes(item)) {
                    
                    dataBase.userList.push(item);

                }
            } else if (command === 'article') {
                if (!dataBase.articleList.includes(item)) {
                    
                    dataBase.articleList.push(item);

                }
            }
        } else {
            let [username, article, title, content] = line
                .replace(' posts on ', '&')
                .replace(': ', '&')
                .replace(', ', '&')
                .split('&');

            if (dataBase.userList.includes(username) && dataBase.articleList.includes(article)) {
                if (!dataBase.comments.hasOwnProperty(article)) {
                    
                    dataBase.comments[article] = [{
                        [username]: `--- From user ${username}: ${title} - ${content}`
                    }];
                } else {
                    
                    dataBase.comments[article].push({ [username]: `--- From user ${username}: ${title} - ${content}` });

                }
            }
        }
    }

    let sorted = Object.entries(dataBase.comments)
        .sort((a, b) => b[1].length - a[1].length);

    for (let [name, comments] of sorted) {
        
        console.log(`Comments on ${name}`);
        
        for (let commentItem of comments.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))) {
            
            let [user, comment] = Object.entries(commentItem)[0];
            console.log(comment);

        }
    }
}
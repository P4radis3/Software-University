function solve() {
    function getElement(selector) {
        
        return document.querySelector(selector);

    }

    let tasks = getElement('#task');
    let descriptions = getElement('#description');
    let dates = getElement('#date');
    let addButtons = getElement('#add');

    let sections = document.querySelectorAll('section');
    let openArea = sections[1].querySelector('div:nth-child(2)');
    let progressArea = sections[2].querySelector('div:nth-child(2)');
    let completeArea = sections[3].querySelector('div:nth-child(2)');


    addButtons.addEventListener('click', function addTask(element) {
        element.preventDefault();
        let task = tasks.value;
        let description = descriptions.value;
        let date = dates.value;

        if (!task || !description || !date) {
            
            return;

        }

        createArticle('OpenTask', 'green', 'red', task, description, date);
        function createArticle(type, firstButtonClass, secondButtonClass, task, description, date) {
            
            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            h3.textContent = task;
            
            let firstP = document.createElement('p');
            firstP.textContent = `Description: ${description}`;
            
            let secondP = document.createElement('p');
            secondP.textContent = `Due Date: ${date}`;

            article.appendChild(h3);
            article.appendChild(firstP);
            article.appendChild(secondP);

            if (type === 'OpenTask') {
                
                let div = document.createElement('div');
                div.className = 'flex';
                let firstButton = document.createElement('button');
                firstButton.textContent = 'Start';
                firstButton.className = firstButtonClass;
                firstButton.addEventListener('click', () => {
                    deleteTask(article);
                    createArticle('ProgressTask', 'red', 'orange', task, description, date);
                
                });

                let secondButton = document.createElement('button');
                secondButton.textContent = 'Delete';
                secondButton.className = secondButtonClass;
                secondButton.addEventListener('click', () => deleteTask(article));

                div.appendChild(firstButton);
                div.appendChild(secondButton);
                article.appendChild(div);
                openArea.appendChild(article);
                
            } else if (type === 'ProgressTask') {
                
                let divs = document.createElement('div');
                divs.className = 'flex';
                let thirdButton = document.createElement('button');
                thirdButton.textContent = 'Delete';
                thirdButton.className = firstButtonClass;
                thirdButton.addEventListener('click', () => deleteTask(article));

                let fourthButton = document.createElement('button');
                fourthButton.textContent = 'Finish';
                fourthButton.className = secondButtonClass;
                fourthButton.addEventListener('click', () => {
                    deleteTask(article);
                    createArticle('CompleteTask', null, null, task, description, date);
                    
                });

                divs.appendChild(thirdButton);
                divs.appendChild(fourthButton);
                article.appendChild(divs);
                progressArea.appendChild(article);
                
            } else if (type === 'CompleteTask') {
            
                completeArea.appendChild(article);
                
            }

            function deleteTask(article) {
                
                article.remove();
                
            }
        }
    });
}
window.addEventListener('load', solve);

function solve() {

    let employeeElement = document.getElementById('employee');
    let categoryElement = document.getElementById('category');
    let urgentElement = document.getElementById('urgency');
    let teamElement = document.getElementById('team');
    let descElement = document.getElementById('description');
    let addBtnElement = document.getElementById('add-btn');
    let infoElement = document.querySelector('.preview-list');
    let confirmElement = document.querySelector('.pending-list');
    let resolvedElement = document.querySelector('.resolved-list');
    addBtnElement.addEventListener('click', onNext);

    function onNext(e) {
        e.preventDefault();
        if (employeeElement.value == ''
            || categoryElement.value == ''
            || urgentElement.value == ''
            || teamElement.value == ''
            || descElement.value == '') {
            return;
        }

        let liElementInfo = document.createElement('li');
        liElementInfo.setAttribute('class', 'problem-content');

        let articleElementInfo = document.createElement("article");
        let carModel = document.createElement('p');
        carModel.textContent = `From: ${employeeElement.value}`;

        let carYear = document.createElement('p');
        carYear.textContent = `Category: ${categoryElement.value}`;

        let partName = document.createElement('p');
        partName.textContent = `Urgency: ${urgentElement.value}`;

        let partNumber = document.createElement('p');
        partNumber.textContent = `Assigned to: ${teamElement.value}`;

        let condition = document.createElement('p');
        condition.textContent = `Description: ${descElement.value}`;

        let editBtn = document.createElement("button");
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        let continueBtn = document.createElement("button");
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';


        articleElementInfo.appendChild(carModel);
        articleElementInfo.appendChild(carYear);
        articleElementInfo.appendChild(partName);
        articleElementInfo.appendChild(partNumber);
        articleElementInfo.appendChild(condition);
        liElementInfo.appendChild(articleElementInfo);
        liElementInfo.appendChild(editBtn);
        liElementInfo.appendChild(continueBtn);
        infoElement.appendChild(liElementInfo);


        let editedCrModel = employeeElement.value;
        let editedCrYear = categoryElement.value;
        let editedPartName = urgentElement.value;
        let editedPartNumber = teamElement.value;
        let editedCondition = descElement.value;
        employeeElement.value = '';
        categoryElement.value = '';
        urgentElement.value = '';
        teamElement.value = '';
        descElement.value = '';

        addBtnElement.disabled = true;

        editBtn.addEventListener("click", onEdit);

        function onEdit() {

            employeeElement.value = editedCrModel;
            categoryElement.value = editedCrYear;
            urgentElement.value = editedPartName;
            teamElement.value = editedPartNumber;
            descElement.value = editedCondition;
            liElementInfo.remove();
            addBtnElement.disabled = false;

        }

        continueBtn.addEventListener("click", onContinue);

        function onContinue() {
            let liConfirm = document.createElement('li');
            liConfirm.setAttribute('class', 'problem-content');

            let articleElementContinue = document.createElement("article");
            articleElementContinue = articleElementInfo;

            let confirmBtn = document.createElement("button");
            confirmBtn.setAttribute('class', 'resolve-btn');
            confirmBtn.textContent = 'Resolved';
            liConfirm.appendChild(articleElementContinue);
            liConfirm.appendChild(confirmBtn);
            liElementInfo.remove();

            confirmElement.appendChild(liConfirm);
            addBtnElement.disabled = false;

            confirmBtn.addEventListener('click', onConfirm);
            function onConfirm() {

                let liElementResolved = document.createElement('li');
                liElementResolved.setAttribute('class', 'problem-content');
                let articleElementResolved = document.createElement("article");
                articleElementResolved = articleElementContinue;
                let cancelBtn = document.createElement("button");
                cancelBtn.setAttribute('class', 'clear-btn');
                cancelBtn.textContent = 'Clear';

                cancelBtn.addEventListener('click', onCancel);
                liElementResolved.appendChild(articleElementResolved);
                liElementResolved.appendChild(cancelBtn);
                liConfirm.remove();
                resolvedElement.appendChild(liElementResolved);

                function onCancel() {

                    liElementResolved.remove();
                    addBtnElement.disabled = false;

                }
            }
        };
    }
}

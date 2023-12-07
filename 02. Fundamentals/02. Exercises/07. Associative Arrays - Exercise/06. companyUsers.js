function companyUsers(array) {
    let companyEmployees = {};

    for (let companyEmployee of array) {
        let [company, employeeId] = companyEmployee.split(' -> ');

        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(employeeId)) {
                companyEmployees[company].push(employeeId);
            }
        } else {
            companyEmployees[company] = [employeeId];
        }
    }

    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [companyName, employeeIds] of entries) {
        console.log(companyName);
        employeeIds.forEach(id => console.log(`-- ${id}`));
    }
}
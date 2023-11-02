function employees(array) {

    for (let employeeName of array) {

        let employee = { name: employeeName, personalNumber: employeeName.length };
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);

    }
}
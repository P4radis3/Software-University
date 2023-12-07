function solve(array) {
    
    let list = {};
    for (let element of array) {
        if (!element.includes(`[`)) {
            let [name, capacity] = element.split(`: `);
            if (!list.hasOwnProperty(name)) {

                list[name] = {
                    capacity: Number(capacity),
                    students: [],

                }
            } else {

                list[name].capacity += Number(capacity);

            }
        } else if (element.includes(`with email`)) {
            
            element = element.split(`[`);
            let user = element.shift();
            element = element[0].split(`]`);
            
            let credit = Number(element.shift());
            let temp = element[0].split(` `);
            let mail = temp[3];
            let course = element[0].split(` joins `)[1];
            
            if (list.hasOwnProperty(course) && list[course].capacity > 0) {
                
                list[course].students.push({
                    userName: user,                   
                    creditCount: credit,
                    email: mail,
                
                }
                )
                
                list[course].capacity--;

            }
        }
    }

    let capacitySorted = Object.entries(list)
        .sort((a, b) => Object.keys(b[1].students).length - Object.keys(a[1].students).length);

    for (let element of capacitySorted) {

        console.log(`${element[0]}: ${element[1].capacity} places left`);
        element[1].students.sort((a, b) => b.creditCount - a.creditCount).forEach(x => console.log(`--- ${x.creditCount}: ${x.userName}, ${x.email}`));

    }
}
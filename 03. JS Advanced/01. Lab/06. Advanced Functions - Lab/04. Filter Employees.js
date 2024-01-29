function filterEmployees(first, second) {

    let parsed = JSON.parse(first);
    let [critical, value] = second.split('-');

    return parsed.filter(x => x[critical] === value)
                 .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
                 .join('\n');

}
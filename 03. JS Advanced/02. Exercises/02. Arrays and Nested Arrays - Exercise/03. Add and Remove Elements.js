function addAndRemoveElements(array) {

    let count = 1
    let temporary = []
    const actions = {

        add: x => temporary.push(x),
        remove: () => temporary.pop(),
        
    }

    array.forEach(x => actions[x](count++))
    return temporary.length !== 0 ? temporary.join("\n") : "Empty"

}
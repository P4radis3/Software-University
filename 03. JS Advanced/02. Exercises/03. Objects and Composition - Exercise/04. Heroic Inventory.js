function heroicInventory(array) {

    return JSON.stringify(

        array.map(x => x.split(" / "))
            .reduce((accumulator, value) => {

                accumulator.push({ name: value[0], level: Number(value[1]), items: value[2] ? value[2].split(", ") : [] })
                return accumulator;


            }, [])
    )
}

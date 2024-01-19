function heroes() {

    function hero(name, mana, attack, message) {
        
        return {
            name,
            message,
            health: 100,
            [mana]: 100,
            [attack]: function (msg = "") {

                console.log(this.message + msg)
                this[mana] -= 1

            },
        }
    }

    return {

        mage: health => new hero(health, "mana", `cast`, `${health} cast `),
        fighter: n => new hero(n, "stamina", `fight`, `${n} slashes at the foe!`),

    }
}
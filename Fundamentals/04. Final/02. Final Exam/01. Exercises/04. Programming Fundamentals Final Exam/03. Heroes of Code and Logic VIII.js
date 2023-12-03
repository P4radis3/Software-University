function solve(input) {
    let heroes = {}
    let count = Number(input.shift())
    for (let i = 0; i < count; i++) {
        let [heroName, hp, mp] = input.shift().split(' ')
        hp = Number(hp)
        mp = Number(mp)
        heroes[heroName] = { hp, mp }
    }
    let commands = input.shift()
    while (commands !== 'End') {
        let tokens = commands.split(' - ')
        tokens[2] = Number(tokens[2])
        if (tokens[0] === 'CastSpell') {
            castspell(tokens[1], tokens[2], tokens[3])
        } else if (tokens[0] === 'TakeDamage') {
            takedamage(tokens[1], tokens[2], tokens[3])
        } else if (tokens[0] === 'Recharge') {
            recharge(tokens[1], tokens[2])
        } else if (tokens[0] === 'Heal') {
            heal(tokens[1], tokens[2])
        }
        commands = input.shift()
    }

    function castspell(heroName, mpNeed, spellName) {
        if (heroes[heroName].mp >= mpNeed) {
            heroes[heroName].mp -= mpNeed
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`)
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
        }
    }

    function takedamage(heroName, damage, attacker) {
        let leftHp = heroes[heroName].hp - damage
        if (leftHp > 0) {
            heroes[heroName].hp -= damage
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${leftHp} HP left!`)
        } else {
            delete heroes[heroName]
            console.log(`${heroName} has been killed by ${attacker}!`)
        }
    }

    function recharge(heroName, amount) {
        if (heroes[heroName].mp + amount > 200) {
            let left = 200 - heroes[heroName].mp
            heroes[heroName].mp = 200
            console.log(`${heroName} recharged for ${left} MP!`)
        } else {
            heroes[heroName].mp += amount
            console.log(`${heroName} recharged for ${amount} MP!`);
        }
    }

    function heal(heroName, amount) {

        if (heroes[heroName].hp + amount > 100) {
            let left = 100 - heroes[heroName].hp
            heroes[heroName].hp = 100
            console.log(`${heroName} healed for ${left} HP!`)
        } else {
            heroes[heroName].hp += amount
            console.log(`${heroName} healed for ${amount} HP!`)
        }
    }
    let sort = Object.entries(heroes).sort((a, b) => b[1].hp - a[1].hp || a[0].localeCompare(b[0]))
    sort.forEach(element => {
        console.log(element[0])
        console.log(`  HP: ${heroes[element[0]].hp}`)
        console.log(`  MP: ${heroes[element[0]].mp}`)

    })
}
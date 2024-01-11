function cookingByNumbers(...arguments) {

    let number = Number(arguments.shift());
    let actions = {
        
        chop: x => number = x / 2,
        dice: x => number = Math.sqrt(x),    
        spice: x => number = x + 1,
        bake: x => number = x * 3,
        fillet: x => number = x - x * 0.2,

    };

    arguments.forEach(x => console.log(actions[x](number)));

}
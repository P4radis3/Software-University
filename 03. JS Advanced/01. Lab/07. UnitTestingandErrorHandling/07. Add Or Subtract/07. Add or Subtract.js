function addOrSubtract() {

    let value = 0;
    return {
    
        add: function (number) { value += Number(number); },
        subtract: function (number) { value -= Number(number); },
        get: function () { return value; }
        
    }
}
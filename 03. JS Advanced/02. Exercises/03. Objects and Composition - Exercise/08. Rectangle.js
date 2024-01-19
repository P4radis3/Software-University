function rectangle(weight, height, color) {

    return {

        width: weight,
        height: height,
        color: color[0].toUpperCase() + color.slice(1),
        
        calcArea: function () {

            return this.width * this.height;

        },
    }
}
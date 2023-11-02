class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.fuel = fuel;
        this.parts = parts;

        this.parts.quality = parts.engine * parts.power;
        
    }

    drive(fuelLoss) {

        this.fuel -= fuelLoss;

    }
}
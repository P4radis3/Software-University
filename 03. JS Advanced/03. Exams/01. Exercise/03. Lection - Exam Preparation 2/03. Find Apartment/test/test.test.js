import { assert } from "chai"
import { findNewApartment } from "../findApartment.js";

describe("isGoodLocation", () => {
    it("test with invalid param", () => {
        assert.throws(() => findNewApartment.isGoodLocation(6, "Pesho"))
        assert.throws(() => findNewApartment.isGoodLocation("pesho", "Pesho"))
        assert.throws(() => findNewApartment.isGoodLocation(6, true))
    });
    it("test with invalid city", () => {
        assert.equal(findNewApartment.isGoodLocation("Shumen", true), "This location is not suitable for you.")
        assert.equal(findNewApartment.isGoodLocation("Shumen", false), "This location is not suitable for you.")
    });
    it("test with invalid value", () => {
        assert.equal(findNewApartment.isGoodLocation("Sofia", false), "There is no public transport in area.")
        assert.equal(findNewApartment.isGoodLocation("Plovdiv", false), "There is no public transport in area.")
        assert.equal(findNewApartment.isGoodLocation("Varna", true), "You can go on home tour!")


    });
    it("test with correct value", () => {
        assert.equal(findNewApartment.isGoodLocation("Sofia", true), "You can go on home tour!")
        assert.equal(findNewApartment.isGoodLocation("Plovdiv", true), "You can go on home tour!")
        assert.equal(findNewApartment.isGoodLocation("Varna", true), "You can go on home tour!")
    });

    describe("isLargeEnough", () => {
        it("test with invalid parameters", () => {
            assert.throw(() => findNewApartment.isLargeEnough("pesho", "pesho"))
            assert.throw(() => findNewApartment.isLargeEnough([], "pesho"))
            assert.throw(() => findNewApartment.isLargeEnough(["pesho", "gosho"], "pesho"))
            // assert.throw(() => findNewApartment.isLargeEnough(["pesho", "gosho"], 6))
            assert.throw(() => findNewApartment.isLargeEnough([], 6))
            assert.throw(() => findNewApartment.isLargeEnough("gosho", 6))
            assert.throw(() => findNewApartment.isLargeEnough([30, 40, 60], "gosho"))
            assert.throw(() => findNewApartment.isLargeEnough([30, 40, 60], "60"))
        });

        it("with valid value", () => {
            let res = [10, 20, 30];
            assert.equal(findNewApartment.isLargeEnough([1, 2, 10, 20, 30], 9), res.join(", "))
            assert.equal(findNewApartment.isLargeEnough([1, 2, 10, 20, 30], 10), res.join(", "))
            assert.equal(findNewApartment.isLargeEnough([1, 2, 10, 20, 30], 50), "")

        });
    })


    describe("isItAffordable", () => {
        it("test with invalid parameters", () => {
            assert.throws(() => findNewApartment.isItAffordable("pesho", "pesho"))
            assert.throws(() => findNewApartment.isItAffordable(0, 0))
            assert.throws(() => findNewApartment.isItAffordable(-20, -10))
            assert.throws(() => findNewApartment.isItAffordable(10, "pesho"))
            assert.throws(() => findNewApartment.isItAffordable(10, 0))
            assert.throws(() => findNewApartment.isItAffordable(10, -10))
            assert.throws(() => findNewApartment.isItAffordable("pesho", 10))
            assert.throws(() => findNewApartment.isItAffordable(0, 10))
            assert.throws(() => findNewApartment.isItAffordable(-10, 10))
        });

        it("test with value 0", () => {
            assert.equal(() => findNewApartment.isItAffordable(10, 9), `You don't have enough money for this house!`)
            assert.equal(() => findNewApartment.isItAffordable(10, 1), "You don't have enough money for this house! ")
            assert.equal(() => findNewApartment.isItAffordable(2, 1), "You don't have enough money for this house!")
        });

        it("return value is positive", () => { 
            assert.equal(findNewApartment.isItAffordable(10, 20), "You can afford this home!")
            assert.equal(findNewApartment.isItAffordable(20, 30), "You can afford this home!")
            assert.equal(findNewApartment.isItAffordable(10, 10), "You can afford this home!")
            assert.equal(findNewApartment.isItAffordable(1, 1), "You can afford this home!")
            // assert.equal(findNewApartment.isItAffordable(0, 0), "You can afford this home!")

        });
    })

})
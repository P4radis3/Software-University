import { assert } from "chai";
import lookupChar from "./03_Char_Lookup";

describe("lookup", () => {
    it("should return undefined", () => {

        assert.isUndefined(lookupChar(1, 1));
        assert.isUndefined(lookupChar("1", "1"));
        assert.isUndefined(lookupChar("1", 1.1));
        assert.isUndefined(lookupChar("1", 1.1));
        assert.isUndefined(lookupChar("1", "1"));


    });

    it("return incorrect index", () => {
        
        assert.equal(lookupChar("1", 1), "Incorrect index");
        assert.equal(lookupChar("1", -1), "Incorrect index");
        assert.equal(lookupChar("1", 1), "Incorrect index");
       
    });

    it("return correct char", () => {

        assert.equal(lookupChar("1", 0), "1");
        assert.equal(lookupChar("123", 1), "2");

    });
});
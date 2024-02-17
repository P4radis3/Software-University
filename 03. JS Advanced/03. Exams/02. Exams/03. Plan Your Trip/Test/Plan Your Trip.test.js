import { assert } from "chai";
import { planYourTrip } from "../planYourTrip.js"

describe("planYourTrip", () => {
  describe("choosingDestination", () => {
    it("return message for non-Ski Resort destination", () => {
      expect(() => {
        planYourTrip.choosingDestination("Beach", "Summer", 2024);
      }).to.throw(Error, "This destination is not what you are looking for.");
    });


    it("return message for Ski Resort but non-Winter season", () => {
      let result = planYourTrip.choosingDestination("Ski Resort", "Spring", 2024);
      expect(result).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
    });


    it("throw error if the year is !2024", () => {
      expect(() => {
        planYourTrip.choosingDestination("Ski Resort", "Winter", 2023);
      }).to.throw(Error, "Invalid Year!");
    });
  });


  describe("exploreOptions", () => {
    it("remove activity at specified index", () => {
      let result = planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1);
      expect(result).to.equal("Skiing, Winter Hiking");
    });


    it("throw error for invalid index", () => {
      expect(() => {
        planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 5);
      }).to.throw(Error, "Invalid Information!");
    });

    it("throw error for invalid index", () => {
      expect(() => {
        planYourTrip.exploreOptions([""], "");
      }).to.throw(Error, "Invalid Information!");
    });

    it("throw error for invalid index", () => {
      expect(() => {
        planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], "53");
      }).to.throw(Error, "Invalid Information!");
    });

  });


  describe("estimateExpenses", () => {
    it("return budget message for low-cost trip", () => {
      let result = planYourTrip.estimateExpenses(300, 1.5);
      expect(result).to.equal("The trip is budget-friendly, estimated cost is $450.00.");
    });


    it("return plan message for high-cost trip", () => {
      let result = planYourTrip.estimateExpenses(1000, 2.0);
      expect(result).to.equal("The estimated cost for the trip is $2000.00, plan accordingly.");
    });


    it("throw error for invalid input", () => {
      expect(() => {
        planYourTrip.estimateExpenses("invalid", 2.0);
      }).to.throw(Error, "Invalid Information!");
    });

    it("throw error for negative number", () => {
      expect(() => {
        planYourTrip.estimateExpenses(10, -2);
      }).to.throw(Error, "Negative number!");
    });

    it("throw error for invalid index", () => {
      expect(() => {
        planYourTrip.estimateExpenses([""], "");
      }).to.throw(Error, "Invalid Information!");
    });

    it("throw an error for undefined input", () => {
      expect(() => {
        planYourTrip.estimateExpenses(undefined, 2.0);
      }).to.throw(Error, "Invalid Information!");
    });

  });
});
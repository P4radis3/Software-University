import assert from ('chai');
import onlineStore from ('./onlineStore.js');

describe("Online Store", function () {
    describe("Product Available", function () {

        it("wanted result 'Great! Product is available for purchase.' ", function () {
            let result = onlineStore.isProductAvailable("Product A", 5);
            assert.equal(result, "Great! Product A is available for purchase.");
        });

        it("wanted error 'Invalid input' for non-number inputs", function () {
            assert.throws(() => onlineStore.isProductAvailable("invalid", "invalid"), "Invalid input");
        });

        it("wanted error 'Invalid input' for non-number inputs", function () {
            assert.throws(() => onlineStore.isProductAvailable(100, 100), "Invalid input");
        });

        it("wanted result 'Sorry, Product is currently out of stock.' when stock quantity is 0", function () {
            let result = onlineStore.isProductAvailable("Product B", 0);
            assert.equal(result, "Sorry, Product B is currently out of stock.");
        });
    });

    describe("Can Afford", function () {
        it("wanted result 'Product purchased. Your remaining balance is $50.' when u can buy the product ", function () {
            let result = onlineStore.canAffordProduct(50, 100);
            assert.equal(result, "Product purchased. Your remaining balance is $50.");
        });

        it("wanted result: 'You don't have sufficient funds to buy this product.' when u cannot buy the product", function () {
            let result = onlineStore.canAffordProduct(200, 100);
            assert.equal(result, "You don't have sufficient funds to buy this product.");
        });

        it("wanted error: 'Invalid input' for nan inputs", function () {
            assert.throws(() => onlineStore.canAffordProduct("invalid", 100), "Invalid input");
        });

        it("wanted error: 'Invalid input' for nan inputs", function () {
            assert.throws(() => onlineStore.canAffordProduct(100, "invalid"), "Invalid input");
        });

    });

    describe("Recommended", function () {
        let productList = [
            { name: "Product A", category: "Category 1" },
            { name: "Product B", category: "Category 2" },
            { name: "Product C", category: "Category 1" },
        ];

        it("wanted result; a list of recommended products in the specified category", function () {
            let result = onlineStore.getRecommendedProducts(productList, "Category 1");
            assert.equal(result, "Recommended products in the Category 1 category: Product A, Product C");
        });

        it("wanted result: 'Sorry, we currently have no recommended products in the Category 3 category.'", function () {
            let result = onlineStore.getRecommendedProducts(productList, "Category 3");
            assert.equal(result, "Sorry, we currently have no recommended products in the Category 3 category.");
        });

        it("wanted result: 'Invalid input'", function () {
            assert.throws(() => onlineStore.getRecommendedProducts("invalid", "Category 1"), "Invalid input");
        });

        it("wanted result: 'Invalid input'", function () {
            assert.throws(() => onlineStore.getRecommendedProducts([{ name: "Product A", category: "Category 1" }], 100), "Invalid input");
        });
    });
});

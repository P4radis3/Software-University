class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (spaceRequired > this.warehouseSpace) {
            throw new Error("Not enough space in the warehouse.");
        }

        this.products.push({ product, quantity });
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`;

    }

    quantityCheck(product, minimalQuantity) {
        let productIndex = this.products.findIndex(p => p.product === product);
        if (productIndex === -1) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        let currentQuantity = this.products[productIndex].quantity;
        if (minimalQuantity <= currentQuantity) {
            return `You have enough from product ${product}.`;
        } else {
            const difference = minimalQuantity - currentQuantity;
            this.products[productIndex].quantity = minimalQuantity;
            return `You added ${difference} more from the ${product} products.`;
        }
    }

    sellProduct(product) {
        let productIndex = this.products.findIndex(p => p.product === product);
        if (productIndex === -1) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        let soldProduct = this.products[productIndex];
        soldProduct.quantity -= 1;
        this.sales.push({ product, quantity: 1 });
        return `The ${product} has been successfully sold.`;

    }

    revision() {
        if (this.sales.length === 0) {
            throw new Error("There are no sales today!");
        }

        let totalSales = this.sales.reduce((accumulator, sale) => accumulator + sale.quantity, 0);
        let result = `You sold ${totalSales} products today!\nProducts in the warehouse:\n`;
        this.products.forEach(product => {
            result += `${product.product}-${product.quantity} more left\n`;
        });

        return result.trim();

    }
}
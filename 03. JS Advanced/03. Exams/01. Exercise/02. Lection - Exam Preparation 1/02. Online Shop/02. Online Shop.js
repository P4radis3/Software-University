class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error('Not enough space in the warehouse.');
        }

        this.warehouseSpace -= spaceRequired;
        this.products.push({ product, quantity });
        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        const productObj = this.products.find(p => p.product === product);

        if (!productObj) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= productObj.quantity) {
            return `You have enough from product ${product}.`;
        }

        const difference = minimalQuantity - productObj.quantity;
        productObj.quantity = minimalQuantity;
        return `You added ${difference} more from the ${product} products.`;
    }

    sellProduct(product) {
        const productObj = this.products.find(p => p.product === product);

        if (!productObj) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        productObj.quantity--;
        this.sales.push({ product, quantity: 1 });
        return `The ${product} has been successfully sold.`;
    }

    revision() {
        if (this.sales.length === 0) {
            throw new Error('There are no sales today!');
        }

        const salesCount = this.sales.length;
        let result = `You sold ${salesCount} products today!\nProducts in the warehouse:\n`;

        this.products.forEach(p => {
            result += `${p.product}-${p.quantity} more left\n`;
        });

        return result.trim();
    }
}
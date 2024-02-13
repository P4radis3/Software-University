class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {

        if (this.space === this.wines.length) {
            throw new Error('Not enough space in the cellar.');
        }

        let res = {
            wineName,
            wineType,
            price,
            paid: false
        };

        this.wines.push(res);
        return `You reserved a bottle of ${wineName} ${wineType} wine.`

    }


    payWineBottle(wineName, price) {
        let currentWine = this.wines.find(a => a.wineName === wineName);
        if (!currentWine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (currentWine.paid) {
            throw new Error(`${wineType} has already been paid.`);
        }
        currentWine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`;

    }

    openBottle(wineName) {

        let index = this.wines.findIndex(wine => wine.wineName === wineName);
        if (index === -1) {
            throw new Error("The wine, you're looking for, is not found.");
        }

        if (!this.wines[index].paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines.splice(index, 1);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType = null) {
        let filteredWines = wineType ? this.wines.filter(wine => wine.wineType === wineType) : this.wines;
        if (wineType && filteredWines.length === 0) {
            throw new Error(`There is no ${wineType} in the cellar.`);
        }

        let sortedWines = filteredWines.sort((a, b) => a.wineName.localeCompare(b.wineName));
        let revision = wineType ? "" : `You have space for ${this.space} bottles more.\nYou paid ${this.bill}$ for the wine.\n`;
        sortedWines.forEach(wine => {
            revision += `${wine.wineName} > ${wine.wineType} - ${wine.paid ? "Has Paid" : "Not Paid"}.\n`;
        });

        return revision.trim();

    }
}
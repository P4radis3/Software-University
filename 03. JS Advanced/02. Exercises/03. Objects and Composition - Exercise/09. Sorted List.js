function sortedList() {

    class SortedList {
        constructor() {
            this.list = []
            this.size = 0
        }

        sortList = () => (this.list = this.list.sort((a, b) => a - b))
        checkIndex = index => {

            if (this.list[index] === undefined) {
                
                throw new Error();

            }
        }

        updateSize = () => (this.size = this.list.length);
        add = element => {

            this.list.push(element);
            this.sortList();
            this.updateSize();

        }

        remove = index => {

            this.checkIndex(Number(index));
            this.list.splice(index, 1);
            this.sortList();
            this.updateSize();

        }

        get = index => {

            this.checkIndex(Number(index));
            this.sortList();
            return this.list[index];

        }
    }

    return new SortedList();
    
}
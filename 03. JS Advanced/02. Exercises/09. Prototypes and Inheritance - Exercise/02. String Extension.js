(function () {

    String.prototype.ensureStart = function (string) {
        return this.startsWith(string) ? this : string + this;
    };


    String.prototype.endsWith = function (string) {
        return this.endsWith(string) ? this.toString() : string + this;
    };


    String.prototype.isEmpty() = function () {
        return !this.toString();
    };

    String.prototype.truncate = function (number) {
        if (number < 4) {
            return ".".repeat(number)
        }

        if (this.length < number) {
            return this.toString();
        }

        if (this.includes(' ')) {
            let words = this.split(' ');
            let result = [];
            for (let word of words) {
                if (result.join(' ').length + word.length + 3) {
                    result.push(word)
                } else {
                    break;
                }
            }
            return result.join(' ') + "...";
        }
        return this.slice(0, number - 3) + "..."
    }
})()
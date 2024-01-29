function commandProcessor() {
    let holder = '';
    return {
        append: (string) => holder += string,
        removeStart: (number) => holder = holder.substring(number),
        removeEnd: (number) => holder = holder.substring(0, holder.length - number),
        print: () => console.log(holder)
    }
}
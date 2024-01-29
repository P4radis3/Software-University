function currencyFormat(separator, symbol, first, formatter) {

    return (value) => formatter(separator, symbol, first, value)

}
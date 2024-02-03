function checkForSymmetry() {

    if (!Array.isArray(array)) {
        
        return false;
        
    }
    
    let reversed = array.slice(0).reverse();
    let equal = (JSON.stringify(array) == JSON.stringify(reversed));
    return equal;

}
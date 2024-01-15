function diagonalSums(array){

    let diagonal = array => array.reduce((first, second, index) => first + second[index], 0);
    return `${diagonal(array)} ${diagonal(array.reverse())}`
    
}
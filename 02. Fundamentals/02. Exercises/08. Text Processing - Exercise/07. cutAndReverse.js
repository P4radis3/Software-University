function cutAndReverse(string){

    let middle = string.length / 2;
    let left = string.slice(0, middle).split('').reverse().join('');
    let right = string.slice(middle).split('').reverse().join('');

    console.log(left);
    console.log(right);

}
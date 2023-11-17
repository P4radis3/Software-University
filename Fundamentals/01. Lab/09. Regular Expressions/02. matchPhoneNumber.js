function matchPhoneNumber([array]) {

    let pattern = /\+359([ -])2\1\d{3}\1\d{4}/g;

    let result = array.match(pattern);
    console.log(result.join(', '));

}
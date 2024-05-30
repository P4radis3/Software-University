let counter = 0;

function countMiddleware(res, req, next) {

    counter++;
    req.counter = counter;
    next();

}

module.exports = { countMiddleware };
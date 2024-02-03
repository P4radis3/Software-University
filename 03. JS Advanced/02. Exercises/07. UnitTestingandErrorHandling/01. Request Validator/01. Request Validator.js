function requestValidator(object) {
    
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uri = /[^A-Za-z0-9\.\*]+/;
    let message = /[<>\\\&\'\"]+/;

    if (object.method === undefined || !methods.includes(object.method)) {
        
        throw new Error('Invalid request header: Invalid Method');
        
    }

    if (object.uri === undefined || object.uri == '' || uri.test(object.uri)) {
        
        throw new Error('Invalid request header: Invalid URI');
        
    }

    if (object.version === undefined || !versions.includes(object.version)) {
        
        throw new Error('Invalid request header: Invalid Version');
        
    }

    if (object.message === undefined || message.test(object.message)) {
        
        throw new Error('Invalid request header: Invalid Message');
        
    }

    return object;
    
}

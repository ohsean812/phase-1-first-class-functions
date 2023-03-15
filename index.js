function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    return function named() {
        return "hello"
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        return "hi"
    }
}
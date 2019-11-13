function cache(a) {
    if (typeof a !== 'function') {
        throw 'Input must be a function.';
    } else {
        return a;
    }

}

module.exports = { cache };

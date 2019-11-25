function cache(cb) {
    if (typeof cb !== 'function') { throw 'Input must be a function.' };
    const memo = [];
    return function (...num) {
        if (num in memo) {
            return memo[num];
        } else {
            memo[num] = cb(...num);
            return memo[num];
        };
    };
}


module.exports = { cache };

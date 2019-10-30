const multiply = (num1, num2) => {
    let result = 0;
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return result += num1*num2;
    }else {
        throw 'Not an number'
    }
};

module.exports = { multiply };

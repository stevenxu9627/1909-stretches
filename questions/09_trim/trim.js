const trim = obj => {
    const result = {};
    // for (const key in obj){
    //     if ([key] !== undefined && obj[ley] !== null){
    //         return result[key] = obj[key];
    //     }
    // }
    // return result;

    Object.keys(obj).forEach(key => {
        if (obj[key] !== undefined && obj[key] !== null){
            result[key] = obj[key];
        }
        return result;
    })
};

module.exports = { trim };

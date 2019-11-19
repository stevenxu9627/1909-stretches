/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(data, order, names) {
    const newData = [];
    const data = [{ order, names }];
    if (typeof order === 'number') {
        for (let i = 0; i <= order.value; i++) {
            data.map((name, i) => {
                newData.push(data[i].names)
            })
            return newData;
        }
    } else if (typeof order === 'string') {

    }
}

module.exports = { sortOrder };

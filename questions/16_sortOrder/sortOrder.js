/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

// function sortOrder(data, order, names) {
//     // const newData = [];
//     // const data = [{ order, names }];
//     // if (typeof order === 'number') {
//     //     for (let i = 0; i <= order.value; i++) {
//     //         data.map((name, i) => {
//     //             newData.push(data[i].names)
//     //         })
//     //         return newData;
//     //     }
//     // } else if (typeof order === 'string') {

//     // }

// }

function sortOrder(arr, sorted, key) {
    return arr.sort((a, b) => {
        if (a[sorted] < b[sorted]) {
            return -1;
        }
        if (a[sorted] > b[sorted]) {
            return 1;
        }
        return 0;
    }).map(element => {
        return element[key]
    })

}

module.exports = { sortOrder };

// function groupBy(arr, attr) {
//     // let arr=[];
//     // for(let i=0;i<arr.length;i++){
//     //     arr.forEach(number => {
//     //         let result=arr[i].length;
//     //         return `${result:['','']}`;
//     //     });
//     // }

//     // let arr =[];
//     // arr.array.forEach(element => {
//     //     for (let i=0;i<arr.length;i++){
//     //         let number=arr[i].length;
//     //         return `${result:['', '']}`;
//     //     }
//     // });


// }

const groupBy=(collection,attr)=>collection.reduce((groupDict, nextItem)=>{
    let groupDictKey;
    
    if (typeof attr === 'function'){
        groupDictKey= attr(nextItem);
    }else{
        groupDictKey=nextItem[attr];
    }

    groupDict[groupDictKey]= !groupDict[groupDictKey] 
    ? [nextItem]
    : groupDict[groupDictKey].concat([nextItem]);

    return groupDict;
},{});

module.exports = { groupBy };

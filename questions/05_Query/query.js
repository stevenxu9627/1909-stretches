const items = [
  {
    id: 1,
    name: 'foo',
    price: 2,
  },
  {
    id: 3,
    name: 'bar',
    price: 4,
  },
  {
    id: 66,
    name: 'bazz',
    price: 4,
  },
];

// query(items, { name: 'foo' })
// returns [{
// id: 1,
//   name: 'foo',
//     price: 2,
//   }]

// query(items, { price: 4 });
// returns [
//   ({
//     id: 3,
//     name: 'bar',
//     price: 4,
//   },
//   {
//     id: 66,
//     name: 'bazz',
//     price: 4,
//   })
// ];

// query(items, { price: 4, name: 'bazz' })
// returns [{
//   id: 66,
//     name: 'bazz',
//       price: 4,
//   }]

function query(arr, obj) {
  const newobj=[];
  for (let i=0;i<arr;i++){
    const currentobj = arr[i];
    for(let key in obj){
      const objValue=obj[key];
      if(currentobj[key] !== obj){
        resultobj=false;
      }
      if(resultobj){
        newobj.push(currentobj);
      }
    }
  }
}

module.exports = { query, items };

function isEqual(obj1, obj2) {
  // write your function here
  // run your tests by running `jest isEqual`
  // you can also run tests on every save by running
  // `jest --watch isEqual`
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if(keys1.length !== keys2.length){
    return true;
  }
  for (let i =0; i < keys1.length; i++){
    if (obj1[keys[i]] !== obj2[keys[i]])return
    }
  }
}

module.exports = { isEqual };

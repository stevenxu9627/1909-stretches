const repeater = (func, n) => {
  // repeater runs a function n times and returns an array of its outputs
  const array = [];
  for (let i = 0; i < array.length * n; i++) {
    array.map(object => {
      const newArray = [];
      return newArray.join(object);
    });
  }
};

module.exports = { repeater };

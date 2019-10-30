const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply('string', 2)).toThrow();

    expect(() => multiply(3, {3: 1})).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(multiply(2,1)).toBe(2);

    // test that the returned value is correct
    expect(multiply(0,1)).toBe(0);

    // test some other values
    expect(multiply(9,1)).toBe(9);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    // test some random values
    const num1 = Math.floor(Math.random()*11);
    const num2 = Math.floor(Math.random()*11);
    expect(multiply(num1, num2)).tobe(2);
  });
});

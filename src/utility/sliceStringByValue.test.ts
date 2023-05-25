import { sliceStringByValue } from './sliceStringByValue';

describe('sliceStringByValue', () => {
  it('should correctly slice a string by the given value', () => {
    const inputString = 'Hello World';
    const slicedArray = sliceStringByValue(inputString, 'o');

    expect(slicedArray).toEqual(['Hell', 'o', ' W', 'o', 'rld']);
  });

  it('should handle cases where the value is not found in the string', () => {
    const inputString = 'Hello World';
    const slicedArray = sliceStringByValue(inputString, 'x');

    expect(slicedArray).toEqual([inputString]);
  });

  it('should handle cases where the value appears multiple times in the string', () => {
    const inputString = 'Hello Hello Hello';
    const slicedArray = sliceStringByValue(inputString, 'Hello');

    expect(slicedArray).toEqual(['', 'Hello', ' ', 'Hello', ' ', 'Hello']);
  });
});

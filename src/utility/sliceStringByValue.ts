/**
 * Slice a string by the given value and return an array with sliced string.
 * @param str string to be sliced
 * @param value specific value to be found inside the given string for slicing
 * @example
 *   let stringToSlice = "Hello World";
 *   let slicedArray = sliceStringByValue(stringToSlice, "Wo");
 *   console.log(slicedArray); // Output: ['Hello ', 'Wo', 'rld']
*/
export const sliceStringByValue = (str: string, value: string) : string[] => {
    let result = [];
    let startIndex = 0;
    
    while (str.includes(value)) {
      let index = str.indexOf(value);
      
      if (index !== 0) {
        result.push(str.slice(startIndex, index));
      }
      
      result.push(value);
      str = str.slice(index + value.length);
    }
    
    if (str.length > 0) {
      result.push(str);
    }
    
    return result;
  }

  
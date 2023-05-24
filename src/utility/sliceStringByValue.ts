/**
 * Slice a string by the given value and return an array with sliced string.
 * 
 * This utility function is used to split a string into multiple segments based on a specific value.
 * 
 * For example, if the input string is "Hello World" and the value is "Wo", the resulting array would be ['Hello ', 'Wo', 'rld'].
 * 
 * Each occurrence of the value in the string is treated as a delimiter for slicing.
 * 
 * @param str The string to be sliced.
 * @param value The specific value to be found inside the given string for slicing.
 * @returns An array of sliced strings.
 * 
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

      // Add the substring before the value to the result array
      if (index !== 0) {
        result.push(str.slice(startIndex, index));
      }
      
      // Add the value itself to the result array
      result.push(value);

      // Update the string by removing the sliced portion and continue the loop
      str = str.slice(index + value.length);
    }

    // Add the remaining portion of the string if any
    if (str.length > 0) {
      result.push(str);
    }
    
    return result;
  }

  
function analyzeArray(arr) {
    // Ensure the array is not empty
    if (arr.length === 0) {
      return {
        average: null,
        min: null,
        max: null,
        length: 0
      };
    }
  
    // Calculate the average, min, max, and length
    const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
  
    // Return the result as an object
    return { average, min, max, length };
  }
 module.exports = analyzeArray;  
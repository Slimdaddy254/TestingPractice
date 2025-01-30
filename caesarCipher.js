function caesarCipher(str, shift) {
    // Helper function to shift a single character
    function shiftChar(char) {
      if (char.match(/[a-zA-Z]/)) {  // Only shift alphabetic characters
        const base = char.charCodeAt(0) >= 97 ? 97 : 65; // ASCII for 'a' or 'A'
        return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
      }
      return char; // Non-alphabet characters remain unchanged
    }
  
    return str.split('').map(shiftChar).join('');
  }
  
  export default {caesarCipher};
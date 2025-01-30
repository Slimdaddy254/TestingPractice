// capitalizes first character of a string
function capitalize(str) {
    if (!str) return ''; 
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

//reverses the characters of a string
function reverse(str) {
    if (!str) return '';
    return str.split('').reverse().join('');
}

module.exports = {capitalize};
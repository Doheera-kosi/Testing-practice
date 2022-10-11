// function to reverseString

function reverseString(str) {
  if (str === '') return '';
  return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString('Hollo everyone');

module.exports = reverseString;
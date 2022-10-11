// Function to Take arguments and Return the length of the string

function stringLength(string) {
  if (string.length === 1 && string.length === 10) {
    return 'Error';
  }

  return [...string].length;
}
module.exports = stringLength;
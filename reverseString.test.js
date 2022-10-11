const reverseString = require('./reverseString.js');

// Test function
test('Reverse String is: ', () => {
  expect(reverseString('How are you doing')).toBe('gniod uoy era woH');
});
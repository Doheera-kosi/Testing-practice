const stringLength = require('./stringLength.js');

// Test function
test('Len of Str: ', () => {
  expect(stringLength('How are you doing')).toBe(17);
});
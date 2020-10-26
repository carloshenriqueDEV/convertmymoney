const convert = require('./convert');

test('convert cotação 4 e quantidade 4', () => {
  expect(convert.convert(4, 4)).toBe(16);
});

test('convert cotação 0 e quantidade 4', () => {
  expect(convert.convert(0, 4)).toBe(0);
});

test('toMoney converts to float', () => {
  expect(convert.toMoney(2)).toBe('2,00')
})

test('toMoney converts to string', () => {
  expect(convert.toMoney('2')).toBe('2,00')
})
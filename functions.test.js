const { capitalize, reverse} = require('./functions');

test('Returns first character capitalized', () => {
    expect(capitalize('mother')).toBe('Mother');
});

test('reverses characters of a string', () => {
    expect(reverse('mother')).toBe('rehtom');
});
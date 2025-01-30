const { capitalize} = require('./functions');

test('Returns first character capitalized', () => {
    expect(capitalize('mother')).toBe('Mother');
});
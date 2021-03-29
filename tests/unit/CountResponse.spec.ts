import CharEnumerator from '../../src/classes/CharEnumerator';

describe('CharEnumerator class', () => {
  test('Should return an object enumerating the quantity of strings', () => {
    const sut = new CharEnumerator('Test of charactere counting...');
    const result = sut.countChar();
    expect(result.o).toBe(2);
  });
});

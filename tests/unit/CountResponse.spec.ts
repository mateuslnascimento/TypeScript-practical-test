import CharEnumerator from '../../src/classes/CharEnumerator';

describe('CharEnumerator class', () => {
  test('Should return an object enumerating the quantity of strings', () => {
    const sut = new CharEnumerator();
    const result = sut.countChar('Test of charactere counting...');
    expect(result.o).toBe(2);
  });
});

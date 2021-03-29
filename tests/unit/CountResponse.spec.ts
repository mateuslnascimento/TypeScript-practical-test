import { CountResponse } from '../../src/types/CountResponse';
import CharEnumerator from '../../src/classes/CharEnumerator';

const makeSut = (): CharEnumerator => new CharEnumerator();

describe('CharEnumerator class', () => {
  test('Should return an object enumerating the quantity of strings', () => {
    const sut = makeSut();
    const result = sut.countChar('Test Of Character enumeration');
    expect(result.o).toBe(2);
  });
});

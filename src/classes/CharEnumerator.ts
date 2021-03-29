import { CountResponse } from '../types/CountResponse';

export default class CharEnumerator {
    char: string;

    constructor(char: string) {
      this.char = char;
    }

    countChar():CountResponse {
      const arrayOfChar = this.char.replace(' ', '').split('');

      const charCounted = arrayOfChar.reduce((responseObject: CountResponse, char: string) => {
        const value = responseObject[char] ? responseObject[char] += 1 : responseObject[char] = 1;

        responseObject[char] = value;

        return responseObject;
      }, {});

      return charCounted;
    }
}

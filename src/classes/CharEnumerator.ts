import { CountResponse } from '../types/CountResponse';

export default class CharEnumerator {
    char: string;

    constructor(char: string) {
      this.char = char;
    }

    countChar():CountResponse {
      const arrayOfChar = this.char.replace(' ', '').split('');

      const charCounted = arrayOfChar.reduce((countResponse: CountResponse, char: string) => {
        const response = countResponse;

        const value = response[char] ? response[char] += 1 : response[char] = 1;

        response[char] = value;

        return response;
      }, {});

      return charCounted;
    }
}

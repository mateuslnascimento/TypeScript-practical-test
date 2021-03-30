import { CountResponse } from '../types/CountResponse';

export default class CharEnumerator {
    char!: String;

    countChar(phraseToObject: String): CountResponse {
      this.char = phraseToObject;

      const arrayOfChar = this.char.replace(' ', '').toLowerCase().split('');

      const charCounted = arrayOfChar.reduce((countResponse: CountResponse, char: string) => {
        const response = countResponse;

        const value = response[char] ? response[char] += 1 : response[char] = 1;

        response[char] = value;

        return response;
      }, {});

      return charCounted;
    }
}

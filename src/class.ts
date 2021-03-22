'use strict';

type CountResponse = {
    [key: string]: number;
}

export default class CharEnumerator {
    char: string;
    
    constructor(char: string) {
        this.char = char;
    } 

    countChar():CountResponse {
        const arrayOfChar = this.char.split('');
    
        const charCounted = arrayOfChar.reduce((responseObject: CountResponse, char: string) => {
            
            const value = responseObject[char] ? responseObject[char]++ : responseObject[char] = 1;
            
            responseObject[char] = value;

            return responseObject;

        }, {});

        return charCounted;
   }
}
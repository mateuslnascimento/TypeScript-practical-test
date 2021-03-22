'use strict';

export default class CharEnumerator {
    char: string;
    
    constructor(char: string) {
        this.char = char;
    }

    countChar() {
        const arrayOfChar = this.char.split('');
        
        const charCounted = arrayOfChar.reduce((total, char) => {
            return total[char] ? total[char]++ : total[char] = 1;
        }, {});

        return charCounted;
   }
}
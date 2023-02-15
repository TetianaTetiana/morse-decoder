const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const MorseNumbers ={
            '00': '',
            '10': '.',
            '11': '-'}
        let result = '';
        while(expr) {
            let str = expr.substring(0, 10);
            expr = expr.substring(10);
            if (str.includes('*')) {
                result += ' ';
            } else {
                let morseCode = '';
                for (let i = 0; i < str.length; i += 2) {
                    morseCode += MorseNumbers[str.substring(i, i + 2)];
                }
                result += MORSE_TABLE[morseCode];
            }
        }
    return result;
}

module.exports = {
    decode
}
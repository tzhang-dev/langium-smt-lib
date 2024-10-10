grammar SmtLib

entry Model: (expressions=S_EXPR);

// S-expressions
terminal SPEC_CONSTANT: NUMERAL | DECIMAL | HEXADECIMAL | BINARY | STRING;
S_EXPR:
    spec_constants+=SPEC_CONSTANT | symbols+=SYMBOL | keywords+=KEYWORD | '(' s_exps+=S_EXPR ')';

// Terminals
hidden terminal WHITE_SPACE_CHAR: /[\s\t\r\n]+/;
// terminal PRINTABLE_CHAR: /[\x20-\x7E\x80-\u{10FFFF}]/;
terminal PRINTABLE_CHAR: /[\x20-\x7E]/;
terminal DIGIT: /[0-9]/;
terminal LETTER: /[a-zA-Z]/;
terminal NUMERAL: /0|[1-9][0-9]*/;
terminal DECIMAL: NUMERAL '.' NUMERAL;
terminal HEXADECIMAL: /'/; // TODO
terminal BINARY: /'/; // TODO
// terminal STRING: /"([\x20-\x7E\x80-\u{10FFFF}\s\t\r\n]|"")+"/;
terminal STRING: /"([\x20-\x7E\s\t\r\n]|"")+"/;
terminal SIMPLE_SYMBOL: /(?<![0-9])[a-zA-Z0-9~!@$%^&*_\-+=<>.?\/]+/; // TODO: is not a reserved word
// terminal QUOTED_SYMBOL: /\|[\x20-\x7E\x80-\u{10FFFF}\s\t\r\n]+\|/;
terminal SYMBOL: SIMPLE_SYMBOL;
terminal QUOTED_SYMBOL: /\|[\x20-\x7E\s\t\r\n]+\|/;
terminal RESERVED_WORD: 'BINARY' | 'DECIMAL' | 'HEXADECIMAL' | 'NUMERAL' | 'STRING' | '_' | '!' | 'as' | 'let' | 'exists' | 'forall' | 'match' | 'par';
terminal KEYWORD: ':' SIMPLE_SYMBOL;

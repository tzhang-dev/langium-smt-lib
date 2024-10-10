// Monarch syntax highlighting for the smt-lib language.
export default {
    keywords: [
        
    ],
    operators: [
        
    ],
    symbols: /\(|\)/,

    tokenizer: {
        initial: [
            { regex: /(((((0|[1-9][0-9]*)|(((0|[1-9][0-9]*)\.(0|[1-9][0-9]*))))|('))|('))|("([\x20-\x7E\s\t\r\n]|"")+"))/, action: {"token":"SPEC_CONSTANT"} },
            { regex: /[0-9]/, action: {"token":"DIGIT"} },
            { regex: /[a-zA-Z]/, action: {"token":"LETTER"} },
            { regex: /0|[1-9][0-9]*/, action: {"token":"NUMERAL"} },
            { regex: /((0|[1-9][0-9]*)\.(0|[1-9][0-9]*))/, action: {"token":"DECIMAL"} },
            { regex: /'/, action: {"token":"HEXADECIMAL"} },
            { regex: /'/, action: {"token":"BINARY"} },
            { regex: /"([\x20-\x7E\s\t\r\n]|"")+"/, action: {"token":"string"} },
            { regex: /(?<![0-9])[a-zA-Z0-9~!@$%^&*_\-+=<>.?\/]+/, action: {"token":"SIMPLE_SYMBOL"} },
            { regex: /((?<![0-9])[a-zA-Z0-9~!@$%^&*_\-+=<>.?\/]+)/, action: {"token":"SYMBOL"} },
            { regex: /\|[\x20-\x7E\s\t\r\n]+\|/, action: {"token":"QUOTED_SYMBOL"} },
            { regex: /((((((((((((BINARY|DECIMAL)|HEXADECIMAL)|NUMERAL)|STRING)|_)|!)|as)|let)|exists)|forall)|match)|par)/, action: {"token":"RESERVED_WORD"} },
            { regex: /(:((?<![0-9])[a-zA-Z0-9~!@$%^&*_\-+=<>.?\/]+))/, action: {"token":"KEYWORD"} },
            { include: '@whitespace' },
            { regex: /@symbols/, action: { cases: { '@operators': {"token":"operator"}, '@default': {"token":""} }} },
        ],
        whitespace: [
            { regex: /[\s\t\r\n]+/, action: {"token":"white"} },
            { regex: /[\x20-\x7E]/, action: {"token":"white"} },
        ],
        comment: [
        ],
    }
};

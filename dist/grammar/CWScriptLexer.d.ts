import { ATN } from "antlr4ts/atn/ATN";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { Vocabulary } from "antlr4ts/Vocabulary";
export declare class CWScriptLexer extends Lexer {
    static readonly DEBUG = 1;
    static readonly CONTRACT = 2;
    static readonly INTERFACE = 3;
    static readonly IMPORT = 4;
    static readonly IMPLEMENTS = 5;
    static readonly EXTENDS = 6;
    static readonly ERROR = 7;
    static readonly EVENT = 8;
    static readonly DEFER = 9;
    static readonly INSTANTIATE_NOW = 10;
    static readonly EXEC_NOW = 11;
    static readonly QUERY_NOW = 12;
    static readonly DELEGATE_EXEC = 13;
    static readonly INSTANTIATE = 14;
    static readonly EXEC = 15;
    static readonly QUERY = 16;
    static readonly REPLY = 17;
    static readonly FOR = 18;
    static readonly IN = 19;
    static readonly FROM = 20;
    static readonly STATE = 21;
    static readonly IF = 22;
    static readonly IS = 23;
    static readonly TRY = 24;
    static readonly CATCH = 25;
    static readonly ELSE = 26;
    static readonly NOT = 27;
    static readonly NONE = 28;
    static readonly MUT = 29;
    static readonly AND = 30;
    static readonly OR = 31;
    static readonly TRUE = 32;
    static readonly FALSE = 33;
    static readonly FN = 34;
    static readonly LET = 35;
    static readonly CONST = 36;
    static readonly FAIL = 37;
    static readonly RETURN = 38;
    static readonly STRUCT = 39;
    static readonly ENUM = 40;
    static readonly TYPE = 41;
    static readonly EMIT = 42;
    static readonly AS = 43;
    static readonly TILDE = 44;
    static readonly LPAREN = 45;
    static readonly RPAREN = 46;
    static readonly LBRACK = 47;
    static readonly RBRACK = 48;
    static readonly LBRACE = 49;
    static readonly RBRACE = 50;
    static readonly DOT = 51;
    static readonly COMMA = 52;
    static readonly D_QUEST = 53;
    static readonly QUEST = 54;
    static readonly BANG = 55;
    static readonly SEMI = 56;
    static readonly COLON = 57;
    static readonly D_COLON = 58;
    static readonly HASH = 59;
    static readonly AT = 60;
    static readonly AMP = 61;
    static readonly ARROW = 62;
    static readonly FAT_ARROW = 63;
    static readonly BAR = 64;
    static readonly S_QUOTE = 65;
    static readonly D_QUOTE = 66;
    static readonly EQ = 67;
    static readonly EQ_EQ = 68;
    static readonly NEQ = 69;
    static readonly PLUS = 70;
    static readonly PLUS_EQ = 71;
    static readonly MINUS = 72;
    static readonly MINUS_EQ = 73;
    static readonly MUL = 74;
    static readonly MUL_EQ = 75;
    static readonly DIV = 76;
    static readonly DIV_EQ = 77;
    static readonly MOD = 78;
    static readonly MOD_EQ = 79;
    static readonly LT = 80;
    static readonly LT_EQ = 81;
    static readonly GT = 82;
    static readonly GT_EQ = 83;
    static readonly POW = 84;
    static readonly Ident = 85;
    static readonly StringLiteral = 86;
    static readonly IntLiteral = 87;
    static readonly DecLiteral = 88;
    static readonly BoolLiteral = 89;
    static readonly CWSPEC_LINE_COMMENT = 90;
    static readonly CWSPEC_BLOCK_COMMENT = 91;
    static readonly LINE_COMMENT = 92;
    static readonly BLOCK_COMMENT = 93;
    static readonly WS = 94;
    static readonly channelNames: string[];
    static readonly modeNames: string[];
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    constructor(input: CharStream);
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    get channelNames(): string[];
    get modeNames(): string[];
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}

// Generated from ./grammar/CWScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CWScriptParserListener } from "./CWScriptParserListener";
import { CWScriptParserVisitor } from "./CWScriptParserVisitor";


export class CWScriptParser extends Parser {
	public static readonly DEBUG = 1;
	public static readonly CONTRACT = 2;
	public static readonly INTERFACE = 3;
	public static readonly IMPORT = 4;
	public static readonly IMPLEMENTS = 5;
	public static readonly EXTENDS = 6;
	public static readonly ERROR = 7;
	public static readonly EVENT = 8;
	public static readonly DEFER = 9;
	public static readonly INSTANTIATE_NOW = 10;
	public static readonly EXEC_NOW = 11;
	public static readonly QUERY_NOW = 12;
	public static readonly DELEGATE_EXEC = 13;
	public static readonly INSTANTIATE = 14;
	public static readonly EXEC = 15;
	public static readonly QUERY = 16;
	public static readonly REPLY = 17;
	public static readonly FOR = 18;
	public static readonly IN = 19;
	public static readonly FROM = 20;
	public static readonly STATE = 21;
	public static readonly IF = 22;
	public static readonly IS = 23;
	public static readonly TRY = 24;
	public static readonly CATCH = 25;
	public static readonly ELSE = 26;
	public static readonly NOT = 27;
	public static readonly NONE = 28;
	public static readonly MUT = 29;
	public static readonly AND = 30;
	public static readonly OR = 31;
	public static readonly TRUE = 32;
	public static readonly FALSE = 33;
	public static readonly FN = 34;
	public static readonly LET = 35;
	public static readonly CONST = 36;
	public static readonly FAIL = 37;
	public static readonly RETURN = 38;
	public static readonly STRUCT = 39;
	public static readonly ENUM = 40;
	public static readonly TYPE = 41;
	public static readonly EMIT = 42;
	public static readonly AS = 43;
	public static readonly TILDE = 44;
	public static readonly LPAREN = 45;
	public static readonly RPAREN = 46;
	public static readonly LBRACK = 47;
	public static readonly RBRACK = 48;
	public static readonly LBRACE = 49;
	public static readonly RBRACE = 50;
	public static readonly DOT = 51;
	public static readonly COMMA = 52;
	public static readonly D_QUEST = 53;
	public static readonly QUEST = 54;
	public static readonly BANG = 55;
	public static readonly SEMI = 56;
	public static readonly COLON = 57;
	public static readonly D_COLON = 58;
	public static readonly HASH = 59;
	public static readonly AT = 60;
	public static readonly AMP = 61;
	public static readonly ARROW = 62;
	public static readonly FAT_ARROW = 63;
	public static readonly BAR = 64;
	public static readonly S_QUOTE = 65;
	public static readonly D_QUOTE = 66;
	public static readonly EQ = 67;
	public static readonly EQ_EQ = 68;
	public static readonly NEQ = 69;
	public static readonly PLUS = 70;
	public static readonly PLUS_EQ = 71;
	public static readonly MINUS = 72;
	public static readonly MINUS_EQ = 73;
	public static readonly MUL = 74;
	public static readonly MUL_EQ = 75;
	public static readonly DIV = 76;
	public static readonly DIV_EQ = 77;
	public static readonly MOD = 78;
	public static readonly MOD_EQ = 79;
	public static readonly LT = 80;
	public static readonly LT_EQ = 81;
	public static readonly GT = 82;
	public static readonly GT_EQ = 83;
	public static readonly POW = 84;
	public static readonly Ident = 85;
	public static readonly StringLiteral = 86;
	public static readonly IntLiteral = 87;
	public static readonly DecLiteral = 88;
	public static readonly BoolLiteral = 89;
	public static readonly CWSPEC_LINE_COMMENT = 90;
	public static readonly CWSPEC_BLOCK_COMMENT = 91;
	public static readonly LINE_COMMENT = 92;
	public static readonly BLOCK_COMMENT = 93;
	public static readonly WS = 94;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_topLevelStmt = 1;
	public static readonly RULE_contractDefn = 2;
	public static readonly RULE_interfaceDefn = 3;
	public static readonly RULE_contractBlock = 4;
	public static readonly RULE_importStmt = 5;
	public static readonly RULE_contractItem = 6;
	public static readonly RULE_param = 7;
	public static readonly RULE_paramList = 8;
	public static readonly RULE_fnParams = 9;
	public static readonly RULE_structDefn_fn = 10;
	public static readonly RULE_errorDefn = 11;
	public static readonly RULE_errorDefnBlock = 12;
	public static readonly RULE_eventDefn = 13;
	public static readonly RULE_eventDefnBlock = 14;
	public static readonly RULE_stateDefnBlock = 15;
	public static readonly RULE_stateDefn = 16;
	public static readonly RULE_mapKeyDefn = 17;
	public static readonly RULE_instantiateDefn = 18;
	public static readonly RULE_instantiateDecl = 19;
	public static readonly RULE_execDefn = 20;
	public static readonly RULE_execDecl = 21;
	public static readonly RULE_queryDefn = 22;
	public static readonly RULE_queryDecl = 23;
	public static readonly RULE_replyDefn = 24;
	public static readonly RULE_enumDefn = 25;
	public static readonly RULE_variant_ = 26;
	public static readonly RULE_variant_struct = 27;
	public static readonly RULE_variant_unit = 28;
	public static readonly RULE_typeExpr = 29;
	public static readonly RULE_fnType = 30;
	public static readonly RULE_typeLens = 31;
	public static readonly RULE_typePath = 32;
	public static readonly RULE_typeVariant = 33;
	public static readonly RULE_typeDefn = 34;
	public static readonly RULE_structDefn = 35;
	public static readonly RULE_typeAliasDefn = 36;
	public static readonly RULE_fnDefn = 37;
	public static readonly RULE_annot = 38;
	public static readonly RULE_callOptions = 39;
	public static readonly RULE_stmt = 40;
	public static readonly RULE_debugStmt_ = 41;
	public static readonly RULE_letStmt_ = 42;
	public static readonly RULE_constStmt_ = 43;
	public static readonly RULE_identBinding_ = 44;
	public static readonly RULE_let_binding = 45;
	public static readonly RULE_assignStmt_ = 46;
	public static readonly RULE_assignLHS = 47;
	public static readonly RULE_expr = 48;
	public static readonly RULE_closureParams = 49;
	public static readonly RULE_closure = 50;
	public static readonly RULE_block = 51;
	public static readonly RULE_tryCatchElseExpr_ = 52;
	public static readonly RULE_catchClause = 53;
	public static readonly RULE_arg = 54;
	public static readonly RULE_memberVal = 55;
	public static readonly RULE_literal = 56;
	public static readonly RULE_ifStmt_ = 57;
	public static readonly RULE_elseClause = 58;
	public static readonly RULE_forStmt_ = 59;
	public static readonly RULE_ident = 60;
	public static readonly RULE_reservedKeyword = 61;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "topLevelStmt", "contractDefn", "interfaceDefn", "contractBlock", 
		"importStmt", "contractItem", "param", "paramList", "fnParams", "structDefn_fn", 
		"errorDefn", "errorDefnBlock", "eventDefn", "eventDefnBlock", "stateDefnBlock", 
		"stateDefn", "mapKeyDefn", "instantiateDefn", "instantiateDecl", "execDefn", 
		"execDecl", "queryDefn", "queryDecl", "replyDefn", "enumDefn", "variant_", 
		"variant_struct", "variant_unit", "typeExpr", "fnType", "typeLens", "typePath", 
		"typeVariant", "typeDefn", "structDefn", "typeAliasDefn", "fnDefn", "annot", 
		"callOptions", "stmt", "debugStmt_", "letStmt_", "constStmt_", "identBinding_", 
		"let_binding", "assignStmt_", "assignLHS", "expr", "closureParams", "closure", 
		"block", "tryCatchElseExpr_", "catchClause", "arg", "memberVal", "literal", 
		"ifStmt_", "elseClause", "forStmt_", "ident", "reservedKeyword",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'debug!'", "'contract'", "'interface'", "'import'", "'implements'", 
		"'extends'", "'error'", "'event'", "'defer'", "'instantiate!'", "'exec!'", 
		"'query!'", "'delegate_exec!'", "'instantiate'", "'exec'", "'query'", 
		"'reply'", "'for'", "'in'", "'from'", "'state'", "'if'", "'is'", "'try'", 
		"'catch'", "'else'", "'not'", "'None'", "'mut'", "'and'", "'or'", "'true'", 
		"'false'", "'fn'", "'let'", "'const'", "'fail!'", "'return'", "'struct'", 
		"'enum'", "'type'", "'emit'", "'as'", "'~'", "'('", "')'", "'['", "']'", 
		"'{'", "'}'", "'.'", "','", "'??'", "'?'", "'!'", "';'", "':'", "'::'", 
		"'#'", "'@'", "'&'", "'->'", "'=>'", "'|'", "'''", "'\"'", "'='", "'=='", 
		"'!='", "'+'", "'+='", "'-'", "'-='", "'*'", "'*='", "'/'", "'/='", "'%'", 
		"'%='", "'<'", "'<='", "'>'", "'>='", "'**'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DEBUG", "CONTRACT", "INTERFACE", "IMPORT", "IMPLEMENTS", "EXTENDS", 
		"ERROR", "EVENT", "DEFER", "INSTANTIATE_NOW", "EXEC_NOW", "QUERY_NOW", 
		"DELEGATE_EXEC", "INSTANTIATE", "EXEC", "QUERY", "REPLY", "FOR", "IN", 
		"FROM", "STATE", "IF", "IS", "TRY", "CATCH", "ELSE", "NOT", "NONE", "MUT", 
		"AND", "OR", "TRUE", "FALSE", "FN", "LET", "CONST", "FAIL", "RETURN", 
		"STRUCT", "ENUM", "TYPE", "EMIT", "AS", "TILDE", "LPAREN", "RPAREN", "LBRACK", 
		"RBRACK", "LBRACE", "RBRACE", "DOT", "COMMA", "D_QUEST", "QUEST", "BANG", 
		"SEMI", "COLON", "D_COLON", "HASH", "AT", "AMP", "ARROW", "FAT_ARROW", 
		"BAR", "S_QUOTE", "D_QUOTE", "EQ", "EQ_EQ", "NEQ", "PLUS", "PLUS_EQ", 
		"MINUS", "MINUS_EQ", "MUL", "MUL_EQ", "DIV", "DIV_EQ", "MOD", "MOD_EQ", 
		"LT", "LT_EQ", "GT", "GT_EQ", "POW", "Ident", "StringLiteral", "IntLiteral", 
		"DecLiteral", "BoolLiteral", "CWSPEC_LINE_COMMENT", "CWSPEC_BLOCK_COMMENT", 
		"LINE_COMMENT", "BLOCK_COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CWScriptParser._LITERAL_NAMES, CWScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CWScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CWScriptParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return CWScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CWScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CWScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceFile(): SourceFileContext {
		let _localctx: SourceFileContext = new SourceFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CWScriptParser.RULE_sourceFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.DEBUG) | (1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.DEFER) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.DELEGATE_EXEC) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BANG - 32)) | (1 << (CWScriptParser.SEMI - 32)) | (1 << (CWScriptParser.AT - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CWScriptParser.BAR - 64)) | (1 << (CWScriptParser.Ident - 64)) | (1 << (CWScriptParser.StringLiteral - 64)) | (1 << (CWScriptParser.IntLiteral - 64)) | (1 << (CWScriptParser.DecLiteral - 64)) | (1 << (CWScriptParser.BoolLiteral - 64)))) !== 0)) {
				{
				this.state = 126;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CWScriptParser.DEBUG:
				case CWScriptParser.CONTRACT:
				case CWScriptParser.INTERFACE:
				case CWScriptParser.IMPORT:
				case CWScriptParser.IMPLEMENTS:
				case CWScriptParser.EXTENDS:
				case CWScriptParser.ERROR:
				case CWScriptParser.EVENT:
				case CWScriptParser.DEFER:
				case CWScriptParser.INSTANTIATE_NOW:
				case CWScriptParser.EXEC_NOW:
				case CWScriptParser.QUERY_NOW:
				case CWScriptParser.DELEGATE_EXEC:
				case CWScriptParser.INSTANTIATE:
				case CWScriptParser.EXEC:
				case CWScriptParser.QUERY:
				case CWScriptParser.REPLY:
				case CWScriptParser.FOR:
				case CWScriptParser.IN:
				case CWScriptParser.FROM:
				case CWScriptParser.STATE:
				case CWScriptParser.IF:
				case CWScriptParser.TRY:
				case CWScriptParser.ELSE:
				case CWScriptParser.NOT:
				case CWScriptParser.NONE:
				case CWScriptParser.MUT:
				case CWScriptParser.AND:
				case CWScriptParser.OR:
				case CWScriptParser.TRUE:
				case CWScriptParser.FALSE:
				case CWScriptParser.FN:
				case CWScriptParser.LET:
				case CWScriptParser.CONST:
				case CWScriptParser.FAIL:
				case CWScriptParser.RETURN:
				case CWScriptParser.STRUCT:
				case CWScriptParser.ENUM:
				case CWScriptParser.TYPE:
				case CWScriptParser.EMIT:
				case CWScriptParser.LPAREN:
				case CWScriptParser.LBRACK:
				case CWScriptParser.LBRACE:
				case CWScriptParser.BANG:
				case CWScriptParser.AT:
				case CWScriptParser.BAR:
				case CWScriptParser.Ident:
				case CWScriptParser.StringLiteral:
				case CWScriptParser.IntLiteral:
				case CWScriptParser.DecLiteral:
				case CWScriptParser.BoolLiteral:
					{
					this.state = 124;
					this.topLevelStmt();
					}
					break;
				case CWScriptParser.SEMI:
					{
					this.state = 125;
					this.match(CWScriptParser.SEMI);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 131;
			this.match(CWScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topLevelStmt(): TopLevelStmtContext {
		let _localctx: TopLevelStmtContext = new TopLevelStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CWScriptParser.RULE_topLevelStmt);
		try {
			this.state = 137;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 133;
				this.importStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 134;
				this.contractDefn();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 135;
				this.interfaceDefn();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 136;
				this.stmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractDefn(): ContractDefnContext {
		let _localctx: ContractDefnContext = new ContractDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CWScriptParser.RULE_contractDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.AT) {
				{
				{
				this.state = 139;
				_localctx._annot = this.annot();
				_localctx._ann.push(_localctx._annot);
				}
				}
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 145;
			this.match(CWScriptParser.CONTRACT);
			{
			this.state = 146;
			_localctx._name = this.ident();
			}
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 147;
				this.match(CWScriptParser.EXTENDS);
				{
				this.state = 148;
				_localctx._base = this.typePath();
				}
				}
			}

			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.IMPLEMENTS) {
				{
				this.state = 151;
				this.match(CWScriptParser.IMPLEMENTS);
				{
				this.state = 152;
				_localctx._typePath = this.typePath();
				_localctx._interfaces.push(_localctx._typePath);
				}
				}
			}

			{
			this.state = 155;
			_localctx._body = this.contractBlock();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDefn(): InterfaceDefnContext {
		let _localctx: InterfaceDefnContext = new InterfaceDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CWScriptParser.RULE_interfaceDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.AT) {
				{
				{
				this.state = 157;
				_localctx._annot = this.annot();
				_localctx._ann.push(_localctx._annot);
				}
				}
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 163;
			this.match(CWScriptParser.INTERFACE);
			{
			this.state = 164;
			_localctx._name = this.ident();
			}
			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.EXTENDS) {
				{
				this.state = 165;
				this.match(CWScriptParser.EXTENDS);
				{
				this.state = 166;
				_localctx._base = this.typePath();
				}
				}
			}

			{
			this.state = 169;
			_localctx._body = this.contractBlock();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractBlock(): ContractBlockContext {
		let _localctx: ContractBlockContext = new ContractBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CWScriptParser.RULE_contractBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.match(CWScriptParser.LBRACE);
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.STATE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (CWScriptParser.FN - 34)) | (1 << (CWScriptParser.CONST - 34)) | (1 << (CWScriptParser.STRUCT - 34)) | (1 << (CWScriptParser.ENUM - 34)) | (1 << (CWScriptParser.TYPE - 34)) | (1 << (CWScriptParser.HASH - 34)))) !== 0)) {
				{
				{
				this.state = 172;
				_localctx._contractItem = this.contractItem();
				_localctx._body.push(_localctx._contractItem);
				}
				}
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 178;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importStmt(): ImportStmtContext {
		let _localctx: ImportStmtContext = new ImportStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CWScriptParser.RULE_importStmt);
		let _la: number;
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				_localctx = new ImportAllStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 180;
				this.match(CWScriptParser.IMPORT);
				this.state = 181;
				this.match(CWScriptParser.MUL);
				this.state = 182;
				this.match(CWScriptParser.FROM);
				{
				this.state = 183;
				(_localctx as ImportAllStmtContext)._src = this.match(CWScriptParser.StringLiteral);
				}
				}
				break;

			case 2:
				_localctx = new ImportItemsStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 184;
				this.match(CWScriptParser.IMPORT);
				{
				{
				this.state = 185;
				this.match(CWScriptParser.LBRACE);
				{
				this.state = 186;
				(_localctx as ImportItemsStmtContext)._ident = this.ident();
				(_localctx as ImportItemsStmtContext)._items.push((_localctx as ImportItemsStmtContext)._ident);
				}
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 187;
					this.match(CWScriptParser.COMMA);
					this.state = 188;
					(_localctx as ImportItemsStmtContext)._ident = this.ident();
					(_localctx as ImportItemsStmtContext)._items.push((_localctx as ImportItemsStmtContext)._ident);
					}
					}
					this.state = 193;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 194;
				this.match(CWScriptParser.RBRACE);
				}
				}
				this.state = 196;
				this.match(CWScriptParser.FROM);
				{
				this.state = 197;
				(_localctx as ImportItemsStmtContext)._src = this.match(CWScriptParser.StringLiteral);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractItem(): ContractItemContext {
		let _localctx: ContractItemContext = new ContractItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CWScriptParser.RULE_contractItem);
		try {
			this.state = 217;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 201;
				this.typeDefn();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 202;
				this.constStmt_();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 203;
				this.fnDefn();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 204;
				this.errorDefn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 205;
				this.errorDefnBlock();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 206;
				this.eventDefn();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 207;
				this.eventDefnBlock();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 208;
				this.stateDefnBlock();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 209;
				this.instantiateDefn();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 210;
				this.instantiateDecl();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 211;
				this.execDefn();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 212;
				this.execDecl();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 213;
				this.queryDefn();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 214;
				this.queryDefn();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 215;
				this.queryDecl();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 216;
				this.replyDefn();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CWScriptParser.RULE_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.AT) {
				{
				{
				this.state = 219;
				_localctx._annot = this.annot();
				_localctx._ann.push(_localctx._annot);
				}
				}
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			{
			this.state = 225;
			_localctx._name = this.ident();
			}
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.QUEST) {
				{
				this.state = 226;
				_localctx._optional = this.match(CWScriptParser.QUEST);
				}
			}

			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 229;
				this.match(CWScriptParser.COLON);
				{
				this.state = 230;
				_localctx._ty = this.typeExpr(0);
				}
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EQ) {
					{
					this.state = 231;
					this.match(CWScriptParser.EQ);
					this.state = 232;
					_localctx._default = this.expr(0);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CWScriptParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this.param();
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.COMMA) {
				{
				{
				this.state = 238;
				this.match(CWScriptParser.COMMA);
				this.state = 239;
				this.param();
				}
				}
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnParams(): FnParamsContext {
		let _localctx: FnParamsContext = new FnParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CWScriptParser.RULE_fnParams);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.match(CWScriptParser.LPAREN);
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.AT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 246;
				_localctx._param = this.param();
				_localctx._params.push(_localctx._param);
				}
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 247;
					this.match(CWScriptParser.COMMA);
					this.state = 248;
					_localctx._param = this.param();
					_localctx._params.push(_localctx._param);
					}
					}
					this.state = 253;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 256;
			this.match(CWScriptParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDefn_fn(): StructDefn_fnContext {
		let _localctx: StructDefn_fnContext = new StructDefn_fnContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CWScriptParser.RULE_structDefn_fn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 258;
			_localctx._name = this.ident();
			}
			{
			this.state = 259;
			_localctx._params = this.fnParams();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorDefn(): ErrorDefnContext {
		let _localctx: ErrorDefnContext = new ErrorDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CWScriptParser.RULE_errorDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this.match(CWScriptParser.ERROR);
			this.state = 262;
			_localctx._defn = this.structDefn_fn();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorDefnBlock(): ErrorDefnBlockContext {
		let _localctx: ErrorDefnBlockContext = new ErrorDefnBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CWScriptParser.RULE_errorDefnBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.match(CWScriptParser.ERROR);
			this.state = 265;
			this.match(CWScriptParser.LBRACE);
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 266;
				_localctx._structDefn_fn = this.structDefn_fn();
				_localctx._defns.push(_localctx._structDefn_fn);
				}
				this.state = 271;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 267;
						this.match(CWScriptParser.COMMA);
						this.state = 268;
						_localctx._structDefn_fn = this.structDefn_fn();
						_localctx._defns.push(_localctx._structDefn_fn);
						}
						}
					}
					this.state = 273;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				}
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 274;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
			}

			this.state = 279;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventDefn(): EventDefnContext {
		let _localctx: EventDefnContext = new EventDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CWScriptParser.RULE_eventDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.match(CWScriptParser.EVENT);
			this.state = 282;
			this.structDefn_fn();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventDefnBlock(): EventDefnBlockContext {
		let _localctx: EventDefnBlockContext = new EventDefnBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CWScriptParser.RULE_eventDefnBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.match(CWScriptParser.EVENT);
			this.state = 285;
			this.match(CWScriptParser.LBRACE);
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 286;
				_localctx._structDefn_fn = this.structDefn_fn();
				_localctx._defns.push(_localctx._structDefn_fn);
				}
				this.state = 291;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 287;
						this.match(CWScriptParser.COMMA);
						this.state = 288;
						_localctx._structDefn_fn = this.structDefn_fn();
						_localctx._defns.push(_localctx._structDefn_fn);
						}
						}
					}
					this.state = 293;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				}
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 294;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
			}

			this.state = 299;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateDefnBlock(): StateDefnBlockContext {
		let _localctx: StateDefnBlockContext = new StateDefnBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CWScriptParser.RULE_stateDefnBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.match(CWScriptParser.STATE);
			this.state = 302;
			this.match(CWScriptParser.LBRACE);
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 303;
				_localctx._stateDefn = this.stateDefn();
				_localctx._defns.push(_localctx._stateDefn);
				}
				}
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 309;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateDefn(): StateDefnContext {
		let _localctx: StateDefnContext = new StateDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CWScriptParser.RULE_stateDefn);
		let _la: number;
		try {
			this.state = 335;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				_localctx = new StateDefn_ItemContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 311;
				(_localctx as StateDefn_ItemContext)._name = this.ident();
				}
				this.state = 312;
				this.match(CWScriptParser.COLON);
				{
				this.state = 313;
				(_localctx as StateDefn_ItemContext)._ty = this.typeExpr(0);
				}
				this.state = 316;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EQ) {
					{
					this.state = 314;
					this.match(CWScriptParser.EQ);
					{
					this.state = 315;
					(_localctx as StateDefn_ItemContext)._default = this.expr(0);
					}
					}
				}

				}
				break;

			case 2:
				_localctx = new StateDefn_MapContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 318;
				(_localctx as StateDefn_MapContext)._name = this.ident();
				}
				this.state = 319;
				this.match(CWScriptParser.LBRACK);
				{
				this.state = 320;
				(_localctx as StateDefn_MapContext)._mapKeyDefn = this.mapKeyDefn();
				(_localctx as StateDefn_MapContext)._mapKeys.push((_localctx as StateDefn_MapContext)._mapKeyDefn);
				}
				this.state = 325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 321;
					this.match(CWScriptParser.COMMA);
					{
					this.state = 322;
					(_localctx as StateDefn_MapContext)._mapKeyDefn = this.mapKeyDefn();
					(_localctx as StateDefn_MapContext)._mapKeys.push((_localctx as StateDefn_MapContext)._mapKeyDefn);
					}
					}
					}
					this.state = 327;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 328;
				this.match(CWScriptParser.RBRACK);
				this.state = 329;
				this.match(CWScriptParser.COLON);
				{
				this.state = 330;
				(_localctx as StateDefn_MapContext)._ty = this.typeExpr(0);
				}
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.EQ) {
					{
					this.state = 331;
					this.match(CWScriptParser.EQ);
					{
					this.state = 332;
					(_localctx as StateDefn_MapContext)._default = this.expr(0);
					}
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapKeyDefn(): MapKeyDefnContext {
		let _localctx: MapKeyDefnContext = new MapKeyDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CWScriptParser.RULE_mapKeyDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				{
				this.state = 337;
				_localctx._name = this.ident();
				}
				this.state = 338;
				this.match(CWScriptParser.COLON);
				}
				break;
			}
			{
			this.state = 342;
			_localctx._ty = this.typeExpr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instantiateDefn(): InstantiateDefnContext {
		let _localctx: InstantiateDefnContext = new InstantiateDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CWScriptParser.RULE_instantiateDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this.match(CWScriptParser.HASH);
			this.state = 345;
			this.match(CWScriptParser.INSTANTIATE);
			this.state = 346;
			_localctx._params = this.fnParams();
			this.state = 347;
			_localctx._body = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instantiateDecl(): InstantiateDeclContext {
		let _localctx: InstantiateDeclContext = new InstantiateDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CWScriptParser.RULE_instantiateDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this.match(CWScriptParser.HASH);
			this.state = 350;
			this.match(CWScriptParser.INSTANTIATE);
			this.state = 351;
			_localctx._params = this.fnParams();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execDefn(): ExecDefnContext {
		let _localctx: ExecDefnContext = new ExecDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CWScriptParser.RULE_execDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this.match(CWScriptParser.EXEC);
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.MUL) {
				{
				this.state = 354;
				_localctx._tup = this.match(CWScriptParser.MUL);
				}
			}

			this.state = 357;
			this.match(CWScriptParser.HASH);
			this.state = 358;
			_localctx._name = this.ident();
			this.state = 359;
			_localctx._params = this.fnParams();
			this.state = 360;
			_localctx._body = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execDecl(): ExecDeclContext {
		let _localctx: ExecDeclContext = new ExecDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CWScriptParser.RULE_execDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			this.match(CWScriptParser.EXEC);
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.MUL) {
				{
				this.state = 363;
				_localctx._tup = this.match(CWScriptParser.MUL);
				}
			}

			this.state = 366;
			this.match(CWScriptParser.HASH);
			this.state = 367;
			_localctx._name = this.ident();
			this.state = 368;
			_localctx._params = this.fnParams();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryDefn(): QueryDefnContext {
		let _localctx: QueryDefnContext = new QueryDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CWScriptParser.RULE_queryDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this.match(CWScriptParser.QUERY);
			this.state = 371;
			this.match(CWScriptParser.HASH);
			this.state = 372;
			_localctx._name = this.ident();
			this.state = 373;
			_localctx._params = this.fnParams();
			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 374;
				this.match(CWScriptParser.ARROW);
				this.state = 375;
				_localctx._retTy = this.typeExpr(0);
				}
			}

			this.state = 378;
			_localctx._body = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryDecl(): QueryDeclContext {
		let _localctx: QueryDeclContext = new QueryDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CWScriptParser.RULE_queryDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.match(CWScriptParser.QUERY);
			this.state = 381;
			this.match(CWScriptParser.HASH);
			this.state = 382;
			_localctx._name = this.ident();
			this.state = 383;
			_localctx._params = this.fnParams();
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 384;
				this.match(CWScriptParser.ARROW);
				this.state = 385;
				_localctx._retTy = this.typeExpr(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public replyDefn(): ReplyDefnContext {
		let _localctx: ReplyDefnContext = new ReplyDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CWScriptParser.RULE_replyDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 388;
			this.match(CWScriptParser.REPLY);
			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.DOT) {
				{
				this.state = 389;
				this.match(CWScriptParser.DOT);
				this.state = 390;
				_localctx._on = this.ident();
				}
			}

			this.state = 393;
			_localctx._name = this.ident();
			this.state = 394;
			_localctx._params = this.fnParams();
			this.state = 395;
			_localctx._body = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDefn(): EnumDefnContext {
		let _localctx: EnumDefnContext = new EnumDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CWScriptParser.RULE_enumDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.match(CWScriptParser.ENUM);
			{
			this.state = 398;
			_localctx._name = this.ident();
			}
			this.state = 399;
			this.match(CWScriptParser.LBRACE);
			this.state = 400;
			_localctx._variant_ = this.variant_();
			_localctx._variants.push(_localctx._variant_);
			this.state = 407;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CWScriptParser.HASH) {
				{
				{
				{
				this.state = 401;
				_localctx._variant_ = this.variant_();
				_localctx._variants.push(_localctx._variant_);
				}
				this.state = 403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 402;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
				}
				this.state = 409;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 410;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variant_(): Variant_Context {
		let _localctx: Variant_Context = new Variant_Context(this._ctx, this.state);
		this.enterRule(_localctx, 52, CWScriptParser.RULE_variant_);
		try {
			this.state = 414;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 412;
				this.variant_struct();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 413;
				this.variant_unit();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variant_struct(): Variant_structContext {
		let _localctx: Variant_structContext = new Variant_structContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CWScriptParser.RULE_variant_struct);
		let _la: number;
		try {
			this.state = 432;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 416;
				this.match(CWScriptParser.HASH);
				{
				this.state = 417;
				_localctx._name = this.ident();
				}
				this.state = 418;
				this.match(CWScriptParser.LPAREN);
				this.state = 420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.AT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 419;
					_localctx._members = this.paramList();
					}
				}

				this.state = 422;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 424;
				this.match(CWScriptParser.HASH);
				{
				this.state = 425;
				_localctx._name = this.ident();
				}
				this.state = 426;
				this.match(CWScriptParser.LBRACE);
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.AT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 427;
					_localctx._members = this.paramList();
					}
				}

				this.state = 430;
				this.match(CWScriptParser.RBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variant_unit(): Variant_unitContext {
		let _localctx: Variant_unitContext = new Variant_unitContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CWScriptParser.RULE_variant_unit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 434;
			this.match(CWScriptParser.HASH);
			{
			this.state = 435;
			_localctx._name = this.ident();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public typeExpr(): TypeExprContext;
	public typeExpr(_p: number): TypeExprContext;
	// @RuleVersion(0)
	public typeExpr(_p?: number): TypeExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeExprContext = new TypeExprContext(this._ctx, _parentState);
		let _prevctx: TypeExprContext = _localctx;
		let _startState: number = 58;
		this.enterRecursionRule(_localctx, 58, CWScriptParser.RULE_typeExpr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				_localctx = new PathTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 438;
				this.typePath();
				}
				break;

			case 2:
				{
				_localctx = new VariantTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 439;
				this.typeVariant();
				}
				break;

			case 3:
				{
				_localctx = new LensTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 440;
				this.typeLens();
				}
				break;

			case 4:
				{
				_localctx = new FnTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 441;
				this.fnType();
				}
				break;

			case 5:
				{
				_localctx = new TupleTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 442;
				this.match(CWScriptParser.LBRACK);
				this.state = 451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 443;
					(_localctx as TupleTContext)._typeExpr = this.typeExpr(0);
					(_localctx as TupleTContext)._items.push((_localctx as TupleTContext)._typeExpr);
					this.state = 448;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.COMMA) {
						{
						{
						this.state = 444;
						this.match(CWScriptParser.COMMA);
						this.state = 445;
						(_localctx as TupleTContext)._typeExpr = this.typeExpr(0);
						(_localctx as TupleTContext)._items.push((_localctx as TupleTContext)._typeExpr);
						}
						}
						this.state = 450;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 453;
				this.match(CWScriptParser.RBRACK);
				}
				break;

			case 6:
				{
				_localctx = new DefnTContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 454;
				this.typeDefn();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 467;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 465;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
					case 1:
						{
						_localctx = new OptionTContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 457;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 458;
						this.match(CWScriptParser.QUEST);
						}
						break;

					case 2:
						{
						_localctx = new ListTContext(new TypeExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_typeExpr);
						this.state = 459;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 460;
						this.match(CWScriptParser.LBRACK);
						this.state = 462;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.IntLiteral) {
							{
							this.state = 461;
							(_localctx as ListTContext)._len = this.match(CWScriptParser.IntLiteral);
							}
						}

						this.state = 464;
						this.match(CWScriptParser.RBRACK);
						}
						break;
					}
					}
				}
				this.state = 469;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnType(): FnTypeContext {
		let _localctx: FnTypeContext = new FnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CWScriptParser.RULE_fnType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 470;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			this.state = 473;
			this.match(CWScriptParser.LPAREN);
			this.state = 475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.AT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				this.state = 474;
				_localctx._params = this.paramList();
				}
			}

			this.state = 477;
			this.match(CWScriptParser.RPAREN);
			this.state = 478;
			this.match(CWScriptParser.ARROW);
			this.state = 479;
			_localctx._retTy = this.typeExpr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeLens(): TypeLensContext {
		let _localctx: TypeLensContext = new TypeLensContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CWScriptParser.RULE_typeLens);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			_localctx._scope = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.MUT))) !== 0))) {
				_localctx._scope = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 482;
			this.typePath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typePath(): TypePathContext {
		let _localctx: TypePathContext = new TypePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CWScriptParser.RULE_typePath);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 484;
			_localctx._ident = this.ident();
			_localctx._segments.push(_localctx._ident);
			}
			this.state = 489;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 485;
					this.match(CWScriptParser.DOT);
					this.state = 486;
					_localctx._ident = this.ident();
					_localctx._segments.push(_localctx._ident);
					}
					}
				}
				this.state = 491;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeVariant(): TypeVariantContext {
		let _localctx: TypeVariantContext = new TypeVariantContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CWScriptParser.RULE_typeVariant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this.typePath();
			this.state = 497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.LPAREN) {
				{
				this.state = 493;
				this.match(CWScriptParser.LPAREN);
				this.state = 494;
				this.expr(0);
				this.state = 495;
				this.match(CWScriptParser.RPAREN);
				}
			}

			{
			this.state = 499;
			this.match(CWScriptParser.DOT);
			this.state = 500;
			this.match(CWScriptParser.HASH);
			this.state = 501;
			_localctx._variant = this.ident();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDefn(): TypeDefnContext {
		let _localctx: TypeDefnContext = new TypeDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CWScriptParser.RULE_typeDefn);
		try {
			this.state = 506;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.STRUCT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 503;
				this.structDefn();
				}
				break;
			case CWScriptParser.ENUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 504;
				this.enumDefn();
				}
				break;
			case CWScriptParser.TYPE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 505;
				this.typeAliasDefn();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDefn(): StructDefnContext {
		let _localctx: StructDefnContext = new StructDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CWScriptParser.RULE_structDefn);
		let _la: number;
		try {
			let _alt: number;
			this.state = 542;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 508;
				this.match(CWScriptParser.STRUCT);
				this.state = 510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 509;
					_localctx._name = this.ident();
					}
				}

				this.state = 512;
				this.match(CWScriptParser.LPAREN);
				this.state = 521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.AT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					{
					this.state = 513;
					_localctx._param = this.param();
					_localctx._members.push(_localctx._param);
					}
					this.state = 518;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.COMMA) {
						{
						{
						this.state = 514;
						this.match(CWScriptParser.COMMA);
						{
						this.state = 515;
						_localctx._param = this.param();
						_localctx._members.push(_localctx._param);
						}
						}
						}
						this.state = 520;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 523;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 524;
				this.match(CWScriptParser.STRUCT);
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 525;
					_localctx._name = this.ident();
					}
				}

				this.state = 528;
				this.match(CWScriptParser.LBRACE);
				{
				{
				this.state = 529;
				_localctx._param = this.param();
				_localctx._members.push(_localctx._param);
				}
				this.state = 534;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 530;
						this.match(CWScriptParser.COMMA);
						{
						this.state = 531;
						_localctx._param = this.param();
						_localctx._members.push(_localctx._param);
						}
						}
						}
					}
					this.state = 536;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				}
				this.state = 538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 537;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
				this.state = 540;
				this.match(CWScriptParser.RBRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAliasDefn(): TypeAliasDefnContext {
		let _localctx: TypeAliasDefnContext = new TypeAliasDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CWScriptParser.RULE_typeAliasDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 544;
			this.match(CWScriptParser.TYPE);
			{
			this.state = 545;
			_localctx._name = this.ident();
			}
			this.state = 546;
			this.match(CWScriptParser.EQ);
			{
			this.state = 547;
			_localctx._value = this.typeExpr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnDefn(): FnDefnContext {
		let _localctx: FnDefnContext = new FnDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CWScriptParser.RULE_fnDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this.match(CWScriptParser.FN);
			{
			this.state = 550;
			_localctx._name = this.ident();
			}
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 551;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			this.state = 554;
			_localctx._params = this.fnParams();
			this.state = 557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.ARROW) {
				{
				this.state = 555;
				this.match(CWScriptParser.ARROW);
				this.state = 556;
				_localctx._retTy = this.typeExpr(0);
				}
			}

			this.state = 559;
			_localctx._body = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annot(): AnnotContext {
		let _localctx: AnnotContext = new AnnotContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CWScriptParser.RULE_annot);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			this.match(CWScriptParser.AT);
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.AT) {
				{
				this.state = 562;
				_localctx._isTag = this.match(CWScriptParser.AT);
				}
			}

			{
			this.state = 565;
			_localctx._path = this.typePath();
			}
			this.state = 571;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 566;
				this.match(CWScriptParser.LPAREN);
				this.state = 568;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CWScriptParser.BAR - 64)) | (1 << (CWScriptParser.Ident - 64)) | (1 << (CWScriptParser.StringLiteral - 64)) | (1 << (CWScriptParser.IntLiteral - 64)) | (1 << (CWScriptParser.DecLiteral - 64)) | (1 << (CWScriptParser.BoolLiteral - 64)))) !== 0)) {
					{
					this.state = 567;
					_localctx._arg = this.arg();
					_localctx._args.push(_localctx._arg);
					}
				}

				this.state = 570;
				this.match(CWScriptParser.RPAREN);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callOptions(): CallOptionsContext {
		let _localctx: CallOptionsContext = new CallOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CWScriptParser.RULE_callOptions);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 573;
			this.match(CWScriptParser.LBRACE);
			this.state = 585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 574;
				this.memberVal();
				}
				this.state = 579;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 575;
						this.match(CWScriptParser.COMMA);
						this.state = 576;
						this.memberVal();
						}
						}
					}
					this.state = 581;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
				}
				this.state = 583;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.COMMA) {
					{
					this.state = 582;
					this.match(CWScriptParser.COMMA);
					}
				}

				}
			}

			this.state = 587;
			this.match(CWScriptParser.RBRACE);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CWScriptParser.RULE_stmt);
		let _la: number;
		try {
			this.state = 711;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				_localctx = new AnnotBlockStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 589;
				this.annot();
				this.state = 590;
				this.block();
				}
				break;

			case 2:
				_localctx = new DebugStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 592;
					(_localctx as DebugStmtContext)._annot = this.annot();
					(_localctx as DebugStmtContext)._ann.push((_localctx as DebugStmtContext)._annot);
					}
					}
					this.state = 597;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 598;
				this.debugStmt_();
				}
				break;

			case 3:
				_localctx = new LetStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 602;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 599;
					(_localctx as LetStmtContext)._annot = this.annot();
					(_localctx as LetStmtContext)._ann.push((_localctx as LetStmtContext)._annot);
					}
					}
					this.state = 604;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 605;
				this.letStmt_();
				}
				break;

			case 4:
				_localctx = new ConstStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 606;
					(_localctx as ConstStmtContext)._annot = this.annot();
					(_localctx as ConstStmtContext)._ann.push((_localctx as ConstStmtContext)._annot);
					}
					}
					this.state = 611;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 612;
				this.constStmt_();
				}
				break;

			case 5:
				_localctx = new AssignStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 616;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 613;
					(_localctx as AssignStmtContext)._annot = this.annot();
					(_localctx as AssignStmtContext)._ann.push((_localctx as AssignStmtContext)._annot);
					}
					}
					this.state = 618;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 619;
				this.assignStmt_();
				}
				break;

			case 6:
				_localctx = new IfStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 623;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 620;
					(_localctx as IfStmtContext)._annot = this.annot();
					(_localctx as IfStmtContext)._ann.push((_localctx as IfStmtContext)._annot);
					}
					}
					this.state = 625;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 626;
				this.ifStmt_();
				}
				break;

			case 7:
				_localctx = new ForStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 627;
					(_localctx as ForStmtContext)._annot = this.annot();
					(_localctx as ForStmtContext)._ann.push((_localctx as ForStmtContext)._annot);
					}
					}
					this.state = 632;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 633;
				this.forStmt_();
				}
				break;

			case 8:
				_localctx = new ExecStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 634;
					(_localctx as ExecStmtContext)._annot = this.annot();
					(_localctx as ExecStmtContext)._ann.push((_localctx as ExecStmtContext)._annot);
					}
					}
					this.state = 639;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DEFER) {
					{
					this.state = 640;
					(_localctx as ExecStmtContext)._defer = this.match(CWScriptParser.DEFER);
					}
				}

				this.state = 643;
				this.match(CWScriptParser.EXEC_NOW);
				this.state = 644;
				this.expr(0);
				this.state = 646;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
				case 1:
					{
					this.state = 645;
					(_localctx as ExecStmtContext)._options = this.callOptions();
					}
					break;
				}
				}
				break;

			case 9:
				_localctx = new DelegateExecStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 648;
					(_localctx as DelegateExecStmtContext)._annot = this.annot();
					(_localctx as DelegateExecStmtContext)._ann.push((_localctx as DelegateExecStmtContext)._annot);
					}
					}
					this.state = 653;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 655;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DEFER) {
					{
					this.state = 654;
					(_localctx as DelegateExecStmtContext)._defer = this.match(CWScriptParser.DEFER);
					}
				}

				this.state = 657;
				this.match(CWScriptParser.DELEGATE_EXEC);
				this.state = 658;
				this.match(CWScriptParser.HASH);
				this.state = 659;
				this.expr(0);
				}
				break;

			case 10:
				_localctx = new InstantiateStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 660;
					(_localctx as InstantiateStmtContext)._annot = this.annot();
					(_localctx as InstantiateStmtContext)._ann.push((_localctx as InstantiateStmtContext)._annot);
					}
					}
					this.state = 665;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 667;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DEFER) {
					{
					this.state = 666;
					(_localctx as InstantiateStmtContext)._defer = this.match(CWScriptParser.DEFER);
					}
				}

				this.state = 669;
				this.match(CWScriptParser.INSTANTIATE_NOW);
				this.state = 671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.HASH) {
					{
					this.state = 670;
					(_localctx as InstantiateStmtContext)._new = this.match(CWScriptParser.HASH);
					}
				}

				this.state = 673;
				this.expr(0);
				this.state = 675;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
				case 1:
					{
					this.state = 674;
					(_localctx as InstantiateStmtContext)._options = this.callOptions();
					}
					break;
				}
				}
				break;

			case 11:
				_localctx = new EmitStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 680;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 677;
					(_localctx as EmitStmtContext)._annot = this.annot();
					(_localctx as EmitStmtContext)._ann.push((_localctx as EmitStmtContext)._annot);
					}
					}
					this.state = 682;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 684;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.DEFER) {
					{
					this.state = 683;
					(_localctx as EmitStmtContext)._defer = this.match(CWScriptParser.DEFER);
					}
				}

				this.state = 686;
				this.match(CWScriptParser.EMIT);
				this.state = 687;
				this.expr(0);
				}
				break;

			case 12:
				_localctx = new ReturnStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 688;
					(_localctx as ReturnStmtContext)._annot = this.annot();
					(_localctx as ReturnStmtContext)._ann.push((_localctx as ReturnStmtContext)._annot);
					}
					}
					this.state = 693;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 694;
				this.match(CWScriptParser.RETURN);
				this.state = 695;
				this.expr(0);
				}
				break;

			case 13:
				_localctx = new FailStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 696;
					(_localctx as FailStmtContext)._annot = this.annot();
					(_localctx as FailStmtContext)._ann.push((_localctx as FailStmtContext)._annot);
					}
					}
					this.state = 701;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 702;
				this.match(CWScriptParser.FAIL);
				this.state = 703;
				this.expr(0);
				}
				break;

			case 14:
				_localctx = new ExprStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 707;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.AT) {
					{
					{
					this.state = 704;
					(_localctx as ExprStmtContext)._annot = this.annot();
					(_localctx as ExprStmtContext)._ann.push((_localctx as ExprStmtContext)._annot);
					}
					}
					this.state = 709;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 710;
				this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public debugStmt_(): DebugStmt_Context {
		let _localctx: DebugStmt_Context = new DebugStmt_Context(this._ctx, this.state);
		this.enterRule(_localctx, 82, CWScriptParser.RULE_debugStmt_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 713;
			this.match(CWScriptParser.DEBUG);
			this.state = 716;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 714;
				this.block();
				}
				break;

			case 2:
				{
				this.state = 715;
				this.stmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letStmt_(): LetStmt_Context {
		let _localctx: LetStmt_Context = new LetStmt_Context(this._ctx, this.state);
		this.enterRule(_localctx, 84, CWScriptParser.RULE_letStmt_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			this.match(CWScriptParser.LET);
			this.state = 719;
			this.let_binding();
			this.state = 722;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 720;
				this.match(CWScriptParser.EQ);
				this.state = 721;
				this.expr(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constStmt_(): ConstStmt_Context {
		let _localctx: ConstStmt_Context = new ConstStmt_Context(this._ctx, this.state);
		this.enterRule(_localctx, 86, CWScriptParser.RULE_constStmt_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this.match(CWScriptParser.CONST);
			this.state = 725;
			this.ident();
			this.state = 726;
			this.match(CWScriptParser.EQ);
			this.state = 727;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identBinding_(): IdentBinding_Context {
		let _localctx: IdentBinding_Context = new IdentBinding_Context(this._ctx, this.state);
		this.enterRule(_localctx, 88, CWScriptParser.RULE_identBinding_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 729;
			_localctx._name = this.ident();
			}
			this.state = 732;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				this.state = 730;
				this.match(CWScriptParser.COLON);
				this.state = 731;
				_localctx._ty = this.typeExpr(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public let_binding(): Let_bindingContext {
		let _localctx: Let_bindingContext = new Let_bindingContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CWScriptParser.RULE_let_binding);
		let _la: number;
		try {
			this.state = 756;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.CONTRACT:
			case CWScriptParser.INTERFACE:
			case CWScriptParser.IMPORT:
			case CWScriptParser.IMPLEMENTS:
			case CWScriptParser.EXTENDS:
			case CWScriptParser.ERROR:
			case CWScriptParser.EVENT:
			case CWScriptParser.INSTANTIATE:
			case CWScriptParser.EXEC:
			case CWScriptParser.QUERY:
			case CWScriptParser.REPLY:
			case CWScriptParser.FOR:
			case CWScriptParser.IN:
			case CWScriptParser.FROM:
			case CWScriptParser.STATE:
			case CWScriptParser.IF:
			case CWScriptParser.ELSE:
			case CWScriptParser.AND:
			case CWScriptParser.OR:
			case CWScriptParser.TRUE:
			case CWScriptParser.FALSE:
			case CWScriptParser.FN:
			case CWScriptParser.LET:
			case CWScriptParser.STRUCT:
			case CWScriptParser.ENUM:
			case CWScriptParser.TYPE:
			case CWScriptParser.EMIT:
			case CWScriptParser.Ident:
				_localctx = new IdentBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 734;
				this.identBinding_();
				}
				break;
			case CWScriptParser.LBRACE:
				_localctx = new StructBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 735;
				this.match(CWScriptParser.LBRACE);
				{
				this.state = 736;
				(_localctx as StructBindingContext)._identBinding_ = this.identBinding_();
				(_localctx as StructBindingContext)._bindings.push((_localctx as StructBindingContext)._identBinding_);
				}
				this.state = 740;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 737;
					this.match(CWScriptParser.COMMA);
					}
					}
					this.state = 742;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 743;
				this.match(CWScriptParser.RBRACE);
				}
				break;
			case CWScriptParser.LBRACK:
				_localctx = new TupleBindingContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 745;
				this.match(CWScriptParser.LBRACK);
				{
				this.state = 746;
				(_localctx as TupleBindingContext)._identBinding_ = this.identBinding_();
				(_localctx as TupleBindingContext)._bindings.push((_localctx as TupleBindingContext)._identBinding_);
				}
				this.state = 751;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 747;
					this.match(CWScriptParser.COMMA);
					this.state = 748;
					(_localctx as TupleBindingContext)._identBinding_ = this.identBinding_();
					(_localctx as TupleBindingContext)._bindings.push((_localctx as TupleBindingContext)._identBinding_);
					}
					}
					this.state = 753;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 754;
				this.match(CWScriptParser.RBRACK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignStmt_(): AssignStmt_Context {
		let _localctx: AssignStmt_Context = new AssignStmt_Context(this._ctx, this.state);
		this.enterRule(_localctx, 92, CWScriptParser.RULE_assignStmt_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 758;
			_localctx._lhs = this.assignLHS();
			}
			{
			this.state = 759;
			_localctx._assignOp = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CWScriptParser.EQ - 67)) | (1 << (CWScriptParser.PLUS_EQ - 67)) | (1 << (CWScriptParser.MINUS_EQ - 67)) | (1 << (CWScriptParser.MUL_EQ - 67)) | (1 << (CWScriptParser.DIV_EQ - 67)) | (1 << (CWScriptParser.MOD_EQ - 67)))) !== 0))) {
				_localctx._assignOp = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
			{
			this.state = 760;
			_localctx._rhs = this.expr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignLHS(): AssignLHSContext {
		let _localctx: AssignLHSContext = new AssignLHSContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CWScriptParser.RULE_assignLHS);
		let _la: number;
		try {
			this.state = 779;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				_localctx = new IdentLHSContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 762;
				(_localctx as IdentLHSContext)._symbol = this.ident();
				}
				break;

			case 2:
				_localctx = new DotLHSContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 763;
				(_localctx as DotLHSContext)._obj = this.expr(0);
				}
				this.state = 764;
				this.match(CWScriptParser.DOT);
				{
				this.state = 765;
				(_localctx as DotLHSContext)._member = this.ident();
				}
				}
				break;

			case 3:
				_localctx = new IndexLHSContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 767;
				(_localctx as IndexLHSContext)._obj = this.expr(0);
				}
				this.state = 768;
				this.match(CWScriptParser.LBRACK);
				{
				this.state = 769;
				(_localctx as IndexLHSContext)._expr = this.expr(0);
				(_localctx as IndexLHSContext)._args.push((_localctx as IndexLHSContext)._expr);
				}
				this.state = 774;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 770;
					this.match(CWScriptParser.COMMA);
					this.state = 771;
					(_localctx as IndexLHSContext)._expr = this.expr(0);
					(_localctx as IndexLHSContext)._args.push((_localctx as IndexLHSContext)._expr);
					}
					}
					this.state = 776;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 777;
				this.match(CWScriptParser.RBRACK);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 96;
		this.enterRecursionRule(_localctx, 96, CWScriptParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 849;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				_localctx = new GroupedExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 782;
				this.match(CWScriptParser.LPAREN);
				this.state = 783;
				this.expr(0);
				this.state = 784;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new TypeDColonExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 786;
				this.typeExpr(0);
				this.state = 787;
				this.match(CWScriptParser.D_COLON);
				{
				this.state = 788;
				(_localctx as TypeDColonExprContext)._member = this.ident();
				}
				}
				break;

			case 3:
				{
				_localctx = new TypeFnCallExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 790;
				this.typeExpr(0);
				this.state = 792;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.BANG) {
					{
					this.state = 791;
					(_localctx as TypeFnCallExprContext)._fallible = this.match(CWScriptParser.BANG);
					}
				}

				this.state = 794;
				this.match(CWScriptParser.LPAREN);
				this.state = 803;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CWScriptParser.BAR - 64)) | (1 << (CWScriptParser.Ident - 64)) | (1 << (CWScriptParser.StringLiteral - 64)) | (1 << (CWScriptParser.IntLiteral - 64)) | (1 << (CWScriptParser.DecLiteral - 64)) | (1 << (CWScriptParser.BoolLiteral - 64)))) !== 0)) {
					{
					{
					this.state = 795;
					(_localctx as TypeFnCallExprContext)._arg = this.arg();
					(_localctx as TypeFnCallExprContext)._args.push((_localctx as TypeFnCallExprContext)._arg);
					}
					this.state = 800;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.COMMA) {
						{
						{
						this.state = 796;
						this.match(CWScriptParser.COMMA);
						this.state = 797;
						(_localctx as TypeFnCallExprContext)._arg = this.arg();
						(_localctx as TypeFnCallExprContext)._args.push((_localctx as TypeFnCallExprContext)._arg);
						}
						}
						this.state = 802;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 805;
				this.match(CWScriptParser.RPAREN);
				}
				break;

			case 4:
				{
				_localctx = new TryCatchElseExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 807;
				this.tryCatchElseExpr_();
				}
				break;

			case 5:
				{
				_localctx = new NotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 808;
				this.match(CWScriptParser.NOT);
				this.state = 809;
				this.expr(13);
				}
				break;

			case 6:
				{
				_localctx = new IfExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 810;
				this.ifStmt_();
				}
				break;

			case 7:
				{
				_localctx = new QueryNowExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 811;
				this.match(CWScriptParser.QUERY_NOW);
				this.state = 812;
				this.expr(9);
				}
				break;

			case 8:
				{
				_localctx = new FailExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 813;
				this.match(CWScriptParser.FAIL);
				this.state = 814;
				this.expr(8);
				}
				break;

			case 9:
				{
				_localctx = new ClosureExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 815;
				this.closure();
				}
				break;

			case 10:
				{
				_localctx = new TupleExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 816;
				this.match(CWScriptParser.LBRACK);
				this.state = 825;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CWScriptParser.BAR - 64)) | (1 << (CWScriptParser.Ident - 64)) | (1 << (CWScriptParser.StringLiteral - 64)) | (1 << (CWScriptParser.IntLiteral - 64)) | (1 << (CWScriptParser.DecLiteral - 64)) | (1 << (CWScriptParser.BoolLiteral - 64)))) !== 0)) {
					{
					{
					this.state = 817;
					(_localctx as TupleExprContext)._expr = this.expr(0);
					(_localctx as TupleExprContext)._items.push((_localctx as TupleExprContext)._expr);
					}
					this.state = 822;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CWScriptParser.COMMA) {
						{
						{
						this.state = 818;
						this.match(CWScriptParser.COMMA);
						{
						this.state = 819;
						(_localctx as TupleExprContext)._expr = this.expr(0);
						(_localctx as TupleExprContext)._items.push((_localctx as TupleExprContext)._expr);
						}
						}
						}
						this.state = 824;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 827;
				this.match(CWScriptParser.RBRACK);
				}
				break;

			case 11:
				{
				_localctx = new StructExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					this.state = 828;
					this.typeExpr(0);
					}
				}

				this.state = 831;
				this.match(CWScriptParser.LBRACE);
				this.state = 843;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
					{
					{
					this.state = 832;
					(_localctx as StructExprContext)._memberVal = this.memberVal();
					(_localctx as StructExprContext)._members.push((_localctx as StructExprContext)._memberVal);
					}
					this.state = 837;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 833;
							this.match(CWScriptParser.COMMA);
							this.state = 834;
							(_localctx as StructExprContext)._memberVal = this.memberVal();
							(_localctx as StructExprContext)._members.push((_localctx as StructExprContext)._memberVal);
							}
							}
						}
						this.state = 839;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
					}
					this.state = 841;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CWScriptParser.COMMA) {
						{
						this.state = 840;
						this.match(CWScriptParser.COMMA);
						}
					}

					}
				}

				this.state = 845;
				this.match(CWScriptParser.RBRACE);
				}
				break;

			case 12:
				{
				_localctx = new UnitVariantExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 846;
				this.typeVariant();
				}
				break;

			case 13:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 847;
				this.literal();
				}
				break;

			case 14:
				{
				_localctx = new IdentExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 848;
				this.ident();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 927;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 925;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
					case 1:
						{
						_localctx = new DotExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 851;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						this.state = 853;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.QUEST || _la === CWScriptParser.BANG) {
							{
							this.state = 852;
							(_localctx as DotExprContext)._unwrap = this._input.LT(1);
							_la = this._input.LA(1);
							if (!(_la === CWScriptParser.QUEST || _la === CWScriptParser.BANG)) {
								(_localctx as DotExprContext)._unwrap = this._errHandler.recoverInline(this);
							} else {
								if (this._input.LA(1) === Token.EOF) {
									this.matchedEOF = true;
								}

								this._errHandler.reportMatch(this);
								this.consume();
							}
							}
						}

						this.state = 855;
						this.match(CWScriptParser.DOT);
						{
						this.state = 856;
						(_localctx as DotExprContext)._member = this.ident();
						}
						}
						break;

					case 2:
						{
						_localctx = new AsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 857;
						if (!(this.precpred(this._ctx, 28))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 28)");
						}
						this.state = 858;
						this.match(CWScriptParser.AS);
						this.state = 859;
						(_localctx as AsExprContext)._ty = this.typeExpr(0);
						}
						break;

					case 3:
						{
						_localctx = new IndexExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 860;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 861;
						this.match(CWScriptParser.LBRACK);
						{
						this.state = 862;
						(_localctx as IndexExprContext)._arg = this.arg();
						(_localctx as IndexExprContext)._args.push((_localctx as IndexExprContext)._arg);
						}
						this.state = 867;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === CWScriptParser.COMMA) {
							{
							{
							this.state = 863;
							this.match(CWScriptParser.COMMA);
							this.state = 864;
							(_localctx as IndexExprContext)._arg = this.arg();
							(_localctx as IndexExprContext)._args.push((_localctx as IndexExprContext)._arg);
							}
							}
							this.state = 869;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 870;
						this.match(CWScriptParser.RBRACK);
						}
						break;

					case 4:
						{
						_localctx = new DColonExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 872;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 873;
						this.match(CWScriptParser.D_COLON);
						{
						this.state = 874;
						(_localctx as DColonExprContext)._member = this.ident();
						}
						}
						break;

					case 5:
						{
						_localctx = new FnCallExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 875;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 877;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.BANG) {
							{
							this.state = 876;
							(_localctx as FnCallExprContext)._fallible = this.match(CWScriptParser.BANG);
							}
						}

						this.state = 879;
						this.match(CWScriptParser.LPAREN);
						this.state = 888;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BANG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CWScriptParser.BAR - 64)) | (1 << (CWScriptParser.Ident - 64)) | (1 << (CWScriptParser.StringLiteral - 64)) | (1 << (CWScriptParser.IntLiteral - 64)) | (1 << (CWScriptParser.DecLiteral - 64)) | (1 << (CWScriptParser.BoolLiteral - 64)))) !== 0)) {
							{
							{
							this.state = 880;
							(_localctx as FnCallExprContext)._arg = this.arg();
							(_localctx as FnCallExprContext)._args.push((_localctx as FnCallExprContext)._arg);
							}
							this.state = 885;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === CWScriptParser.COMMA) {
								{
								{
								this.state = 881;
								this.match(CWScriptParser.COMMA);
								this.state = 882;
								(_localctx as FnCallExprContext)._arg = this.arg();
								(_localctx as FnCallExprContext)._args.push((_localctx as FnCallExprContext)._arg);
								}
								}
								this.state = 887;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 890;
						this.match(CWScriptParser.RPAREN);
						}
						break;

					case 6:
						{
						_localctx = new MulExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 891;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						{
						this.state = 892;
						(_localctx as MulExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (CWScriptParser.MUL - 74)) | (1 << (CWScriptParser.DIV - 74)) | (1 << (CWScriptParser.MOD - 74)))) !== 0))) {
							(_localctx as MulExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						{
						this.state = 893;
						(_localctx as MulExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 7:
						{
						_localctx = new AddExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 894;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						{
						this.state = 895;
						(_localctx as AddExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CWScriptParser.PLUS || _la === CWScriptParser.MINUS)) {
							(_localctx as AddExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						{
						this.state = 896;
						(_localctx as AddExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 8:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 897;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						{
						this.state = 898;
						(_localctx as CompExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (CWScriptParser.LT - 80)) | (1 << (CWScriptParser.LT_EQ - 80)) | (1 << (CWScriptParser.GT - 80)) | (1 << (CWScriptParser.GT_EQ - 80)))) !== 0))) {
							(_localctx as CompExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						{
						this.state = 899;
						(_localctx as CompExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 9:
						{
						_localctx = new EqExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 900;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						{
						this.state = 901;
						(_localctx as EqExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CWScriptParser.EQ_EQ || _la === CWScriptParser.NEQ)) {
							(_localctx as EqExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						{
						this.state = 902;
						(_localctx as EqExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 10:
						{
						_localctx = new NoneCheckExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 903;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 904;
						this.match(CWScriptParser.QUEST);
						}
						break;

					case 11:
						{
						_localctx = new IsExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 905;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 906;
						this.match(CWScriptParser.IS);
						this.state = 908;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CWScriptParser.NOT) {
							{
							this.state = 907;
							(_localctx as IsExprContext)._negative = this.match(CWScriptParser.NOT);
							}
						}

						{
						this.state = 910;
						(_localctx as IsExprContext)._rhs = this.typeExpr(0);
						}
						}
						break;

					case 12:
						{
						_localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 911;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 912;
						this.match(CWScriptParser.IN);
						{
						this.state = 913;
						(_localctx as InExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 13:
						{
						_localctx = new ShortTryExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 914;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 915;
						this.match(CWScriptParser.D_QUEST);
						{
						this.state = 916;
						(_localctx as ShortTryExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 14:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 917;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 918;
						this.match(CWScriptParser.AND);
						{
						this.state = 919;
						(_localctx as AndExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 15:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 920;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 921;
						this.match(CWScriptParser.OR);
						{
						this.state = 922;
						(_localctx as OrExprContext)._rhs = this.expr(0);
						}
						}
						break;

					case 16:
						{
						_localctx = new Grouped2ExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CWScriptParser.RULE_expr);
						this.state = 923;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 924;
						this.match(CWScriptParser.TILDE);
						}
						break;
					}
					}
				}
				this.state = 929;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public closureParams(): ClosureParamsContext {
		let _localctx: ClosureParamsContext = new ClosureParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CWScriptParser.RULE_closureParams);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 930;
			this.match(CWScriptParser.BAR);
			this.state = 939;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.AT - 32)))) !== 0) || _la === CWScriptParser.Ident) {
				{
				{
				this.state = 931;
				_localctx._param = this.param();
				_localctx._params.push(_localctx._param);
				}
				this.state = 936;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CWScriptParser.COMMA) {
					{
					{
					this.state = 932;
					this.match(CWScriptParser.COMMA);
					{
					this.state = 933;
					_localctx._param = this.param();
					_localctx._params.push(_localctx._param);
					}
					}
					}
					this.state = 938;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 941;
			this.match(CWScriptParser.BAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public closure(): ClosureContext {
		let _localctx: ClosureContext = new ClosureContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CWScriptParser.RULE_closure);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 944;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.BANG) {
				{
				this.state = 943;
				_localctx._fallible = this.match(CWScriptParser.BANG);
				}
			}

			{
			this.state = 946;
			_localctx._params = this.closureParams();
			}
			this.state = 953;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				{
				{
				this.state = 949;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CWScriptParser.ARROW) {
					{
					this.state = 947;
					this.match(CWScriptParser.ARROW);
					this.state = 948;
					_localctx._retTy = this.typeExpr(0);
					}
				}

				this.state = 951;
				this.block();
				}
				}
				break;

			case 2:
				{
				this.state = 952;
				this.stmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CWScriptParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 955;
			this.match(CWScriptParser.LBRACE);
			this.state = 960;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.DEBUG) | (1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.DEFER) | (1 << CWScriptParser.INSTANTIATE_NOW) | (1 << CWScriptParser.EXEC_NOW) | (1 << CWScriptParser.QUERY_NOW) | (1 << CWScriptParser.DELEGATE_EXEC) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.TRY) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.NOT) | (1 << CWScriptParser.NONE) | (1 << CWScriptParser.MUT) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.CONST - 32)) | (1 << (CWScriptParser.FAIL - 32)) | (1 << (CWScriptParser.RETURN - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)) | (1 << (CWScriptParser.LPAREN - 32)) | (1 << (CWScriptParser.LBRACK - 32)) | (1 << (CWScriptParser.LBRACE - 32)) | (1 << (CWScriptParser.BANG - 32)) | (1 << (CWScriptParser.SEMI - 32)) | (1 << (CWScriptParser.AT - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CWScriptParser.BAR - 64)) | (1 << (CWScriptParser.Ident - 64)) | (1 << (CWScriptParser.StringLiteral - 64)) | (1 << (CWScriptParser.IntLiteral - 64)) | (1 << (CWScriptParser.DecLiteral - 64)) | (1 << (CWScriptParser.BoolLiteral - 64)))) !== 0)) {
				{
				this.state = 958;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CWScriptParser.DEBUG:
				case CWScriptParser.CONTRACT:
				case CWScriptParser.INTERFACE:
				case CWScriptParser.IMPORT:
				case CWScriptParser.IMPLEMENTS:
				case CWScriptParser.EXTENDS:
				case CWScriptParser.ERROR:
				case CWScriptParser.EVENT:
				case CWScriptParser.DEFER:
				case CWScriptParser.INSTANTIATE_NOW:
				case CWScriptParser.EXEC_NOW:
				case CWScriptParser.QUERY_NOW:
				case CWScriptParser.DELEGATE_EXEC:
				case CWScriptParser.INSTANTIATE:
				case CWScriptParser.EXEC:
				case CWScriptParser.QUERY:
				case CWScriptParser.REPLY:
				case CWScriptParser.FOR:
				case CWScriptParser.IN:
				case CWScriptParser.FROM:
				case CWScriptParser.STATE:
				case CWScriptParser.IF:
				case CWScriptParser.TRY:
				case CWScriptParser.ELSE:
				case CWScriptParser.NOT:
				case CWScriptParser.NONE:
				case CWScriptParser.MUT:
				case CWScriptParser.AND:
				case CWScriptParser.OR:
				case CWScriptParser.TRUE:
				case CWScriptParser.FALSE:
				case CWScriptParser.FN:
				case CWScriptParser.LET:
				case CWScriptParser.CONST:
				case CWScriptParser.FAIL:
				case CWScriptParser.RETURN:
				case CWScriptParser.STRUCT:
				case CWScriptParser.ENUM:
				case CWScriptParser.TYPE:
				case CWScriptParser.EMIT:
				case CWScriptParser.LPAREN:
				case CWScriptParser.LBRACK:
				case CWScriptParser.LBRACE:
				case CWScriptParser.BANG:
				case CWScriptParser.AT:
				case CWScriptParser.BAR:
				case CWScriptParser.Ident:
				case CWScriptParser.StringLiteral:
				case CWScriptParser.IntLiteral:
				case CWScriptParser.DecLiteral:
				case CWScriptParser.BoolLiteral:
					{
					{
					this.state = 956;
					_localctx._stmt = this.stmt();
					_localctx._body.push(_localctx._stmt);
					}
					}
					break;
				case CWScriptParser.SEMI:
					{
					this.state = 957;
					this.match(CWScriptParser.SEMI);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 962;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 963;
			this.match(CWScriptParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryCatchElseExpr_(): TryCatchElseExpr_Context {
		let _localctx: TryCatchElseExpr_Context = new TryCatchElseExpr_Context(this._ctx, this.state);
		this.enterRule(_localctx, 104, CWScriptParser.RULE_tryCatchElseExpr_);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 965;
			this.match(CWScriptParser.TRY);
			{
			this.state = 966;
			_localctx._body = this.block();
			}
			this.state = 970;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 967;
					_localctx._catchClause = this.catchClause();
					_localctx._catches.push(_localctx._catchClause);
					}
					}
				}
				this.state = 972;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
			}
			this.state = 974;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				{
				this.state = 973;
				_localctx._else_ = this.elseClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CWScriptParser.RULE_catchClause);
		try {
			this.state = 987;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				_localctx = new CatchContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 976;
				this.match(CWScriptParser.CATCH);
				{
				this.state = 977;
				(_localctx as CatchContext)._ty = this.typeExpr(0);
				}
				{
				this.state = 978;
				(_localctx as CatchContext)._body = this.block();
				}
				}
				break;

			case 2:
				_localctx = new CatchBindContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 980;
				this.match(CWScriptParser.CATCH);
				{
				this.state = 981;
				(_localctx as CatchBindContext)._name = this.ident();
				}
				{
				this.state = 982;
				this.match(CWScriptParser.COLON);
				{
				this.state = 983;
				(_localctx as CatchBindContext)._ty = this.typeExpr(0);
				}
				}
				{
				this.state = 985;
				(_localctx as CatchBindContext)._body = this.block();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arg(): ArgContext {
		let _localctx: ArgContext = new ArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CWScriptParser.RULE_arg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 992;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				{
				{
				this.state = 989;
				_localctx._name = this.ident();
				}
				this.state = 990;
				this.match(CWScriptParser.EQ);
				}
				break;
			}
			{
			this.state = 994;
			_localctx._value = this.expr(0);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberVal(): MemberValContext {
		let _localctx: MemberValContext = new MemberValContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CWScriptParser.RULE_memberVal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 996;
			_localctx._name = this.ident();
			}
			this.state = 999;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CWScriptParser.COLON) {
				{
				this.state = 997;
				this.match(CWScriptParser.COLON);
				{
				this.state = 998;
				_localctx._value = this.expr(0);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CWScriptParser.RULE_literal);
		try {
			this.state = 1006;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.StringLiteral:
				_localctx = new StringLitContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1001;
				this.match(CWScriptParser.StringLiteral);
				}
				break;
			case CWScriptParser.IntLiteral:
				_localctx = new IntLitContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1002;
				this.match(CWScriptParser.IntLiteral);
				}
				break;
			case CWScriptParser.DecLiteral:
				_localctx = new DecLitContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1003;
				this.match(CWScriptParser.DecLiteral);
				}
				break;
			case CWScriptParser.BoolLiteral:
				_localctx = new BoolLitContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1004;
				this.match(CWScriptParser.BoolLiteral);
				}
				break;
			case CWScriptParser.NONE:
				_localctx = new NoneLitContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1005;
				this.match(CWScriptParser.NONE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStmt_(): IfStmt_Context {
		let _localctx: IfStmt_Context = new IfStmt_Context(this._ctx, this.state);
		this.enterRule(_localctx, 114, CWScriptParser.RULE_ifStmt_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1008;
			this.match(CWScriptParser.IF);
			{
			this.state = 1009;
			_localctx._pred = this.expr(0);
			}
			{
			this.state = 1010;
			_localctx._body = this.block();
			}
			this.state = 1012;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				{
				this.state = 1011;
				_localctx._else_ = this.elseClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseClause(): ElseClauseContext {
		let _localctx: ElseClauseContext = new ElseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CWScriptParser.RULE_elseClause);
		try {
			this.state = 1018;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1014;
				this.match(CWScriptParser.ELSE);
				this.state = 1015;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1016;
				this.match(CWScriptParser.ELSE);
				this.state = 1017;
				this.stmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStmt_(): ForStmt_Context {
		let _localctx: ForStmt_Context = new ForStmt_Context(this._ctx, this.state);
		this.enterRule(_localctx, 118, CWScriptParser.RULE_forStmt_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1020;
			this.match(CWScriptParser.FOR);
			{
			this.state = 1021;
			_localctx._binding = this.let_binding();
			}
			this.state = 1022;
			this.match(CWScriptParser.IN);
			{
			this.state = 1023;
			_localctx._iter = this.expr(0);
			}
			this.state = 1024;
			_localctx._body = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ident(): IdentContext {
		let _localctx: IdentContext = new IdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CWScriptParser.RULE_ident);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1028;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CWScriptParser.Ident:
				{
				this.state = 1026;
				this.match(CWScriptParser.Ident);
				}
				break;
			case CWScriptParser.CONTRACT:
			case CWScriptParser.INTERFACE:
			case CWScriptParser.IMPORT:
			case CWScriptParser.IMPLEMENTS:
			case CWScriptParser.EXTENDS:
			case CWScriptParser.ERROR:
			case CWScriptParser.EVENT:
			case CWScriptParser.INSTANTIATE:
			case CWScriptParser.EXEC:
			case CWScriptParser.QUERY:
			case CWScriptParser.REPLY:
			case CWScriptParser.FOR:
			case CWScriptParser.IN:
			case CWScriptParser.FROM:
			case CWScriptParser.STATE:
			case CWScriptParser.IF:
			case CWScriptParser.ELSE:
			case CWScriptParser.AND:
			case CWScriptParser.OR:
			case CWScriptParser.TRUE:
			case CWScriptParser.FALSE:
			case CWScriptParser.FN:
			case CWScriptParser.LET:
			case CWScriptParser.STRUCT:
			case CWScriptParser.ENUM:
			case CWScriptParser.TYPE:
			case CWScriptParser.EMIT:
				{
				this.state = 1027;
				this.reservedKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedKeyword(): ReservedKeywordContext {
		let _localctx: ReservedKeywordContext = new ReservedKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CWScriptParser.RULE_reservedKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1030;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CWScriptParser.CONTRACT) | (1 << CWScriptParser.INTERFACE) | (1 << CWScriptParser.IMPORT) | (1 << CWScriptParser.IMPLEMENTS) | (1 << CWScriptParser.EXTENDS) | (1 << CWScriptParser.ERROR) | (1 << CWScriptParser.EVENT) | (1 << CWScriptParser.INSTANTIATE) | (1 << CWScriptParser.EXEC) | (1 << CWScriptParser.QUERY) | (1 << CWScriptParser.REPLY) | (1 << CWScriptParser.FOR) | (1 << CWScriptParser.IN) | (1 << CWScriptParser.FROM) | (1 << CWScriptParser.STATE) | (1 << CWScriptParser.IF) | (1 << CWScriptParser.ELSE) | (1 << CWScriptParser.AND) | (1 << CWScriptParser.OR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CWScriptParser.TRUE - 32)) | (1 << (CWScriptParser.FALSE - 32)) | (1 << (CWScriptParser.FN - 32)) | (1 << (CWScriptParser.LET - 32)) | (1 << (CWScriptParser.STRUCT - 32)) | (1 << (CWScriptParser.ENUM - 32)) | (1 << (CWScriptParser.TYPE - 32)) | (1 << (CWScriptParser.EMIT - 32)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 29:
			return this.typeExpr_sempred(_localctx as TypeExprContext, predIndex);

		case 48:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private typeExpr_sempred(_localctx: TypeExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 29);

		case 3:
			return this.precpred(this._ctx, 28);

		case 4:
			return this.precpred(this._ctx, 27);

		case 5:
			return this.precpred(this._ctx, 26);

		case 6:
			return this.precpred(this._ctx, 24);

		case 7:
			return this.precpred(this._ctx, 22);

		case 8:
			return this.precpred(this._ctx, 21);

		case 9:
			return this.precpred(this._ctx, 20);

		case 10:
			return this.precpred(this._ctx, 19);

		case 11:
			return this.precpred(this._ctx, 18);

		case 12:
			return this.precpred(this._ctx, 17);

		case 13:
			return this.precpred(this._ctx, 16);

		case 14:
			return this.precpred(this._ctx, 15);

		case 15:
			return this.precpred(this._ctx, 12);

		case 16:
			return this.precpred(this._ctx, 11);

		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03`\u040B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x03\x02\x03\x02\x07\x02\x81\n\x02\f\x02\x0E\x02\x84" +
		"\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x8C\n\x03" +
		"\x03\x04\x07\x04\x8F\n\x04\f\x04\x0E\x04\x92\v\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x05\x04\x98\n\x04\x03\x04\x03\x04\x05\x04\x9C\n\x04\x03\x04" +
		"\x03\x04\x03\x05\x07\x05\xA1\n\x05\f\x05\x0E\x05\xA4\v\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x05\x05\xAA\n\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x07\x06\xB0\n\x06\f\x06\x0E\x06\xB3\v\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\xC0" +
		"\n\x07\f\x07\x0E\x07\xC3\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x05\x07\xCA\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xDC\n\b\x03\t\x07\t" +
		"\xDF\n\t\f\t\x0E\t\xE2\v\t\x03\t\x03\t\x05\t\xE6\n\t\x03\t\x03\t\x03\t" +
		"\x03\t\x05\t\xEC\n\t\x05\t\xEE\n\t\x03\n\x03\n\x03\n\x07\n\xF3\n\n\f\n" +
		"\x0E\n\xF6\v\n\x03\v\x03\v\x03\v\x03\v\x07\v\xFC\n\v\f\v\x0E\v\xFF\v\v" +
		"\x05\v\u0101\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0110\n\x0E\f\x0E\x0E\x0E\u0113" +
		"\v\x0E\x03\x0E\x05\x0E\u0116\n\x0E\x05\x0E\u0118\n\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10" +
		"\u0124\n\x10\f\x10\x0E\x10\u0127\v\x10\x03\x10\x05\x10\u012A\n\x10\x05" +
		"\x10\u012C\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07\x11\u0133" +
		"\n\x11\f\x11\x0E\x11\u0136\v\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x05\x12\u013F\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x07\x12\u0146\n\x12\f\x12\x0E\x12\u0149\v\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x05\x12\u0150\n\x12\x05\x12\u0152\n\x12\x03\x13\x03" +
		"\x13\x03\x13\x05\x13\u0157\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16" +
		"\u0166\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x05" +
		"\x17\u016F\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x05\x18\u017B\n\x18\x03\x18\x03\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0185\n\x19\x03\x1A\x03\x1A" +
		"\x03\x1A\x05\x1A\u018A\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0196\n\x1B\x07\x1B\u0198" +
		"\n\x1B\f\x1B\x0E\x1B\u019B\v\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C" +
		"\u01A1\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01A7\n\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01AF\n\x1D\x03\x1D\x03" +
		"\x1D\x05\x1D\u01B3\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u01C1\n\x1F\f" +
		"\x1F\x0E\x1F\u01C4\v\x1F\x05\x1F\u01C6\n\x1F\x03\x1F\x03\x1F\x05\x1F\u01CA" +
		"\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01D1\n\x1F\x03" +
		"\x1F\x07\x1F\u01D4\n\x1F\f\x1F\x0E\x1F\u01D7\v\x1F\x03 \x05 \u01DA\n " +
		"\x03 \x03 \x05 \u01DE\n \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03\"\x03" +
		"\"\x03\"\x07\"\u01EA\n\"\f\"\x0E\"\u01ED\v\"\x03#\x03#\x03#\x03#\x03#" +
		"\x05#\u01F4\n#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x05$\u01FD\n$\x03%\x03" +
		"%\x05%\u0201\n%\x03%\x03%\x03%\x03%\x07%\u0207\n%\f%\x0E%\u020A\v%\x05" +
		"%\u020C\n%\x03%\x03%\x03%\x05%\u0211\n%\x03%\x03%\x03%\x03%\x07%\u0217" +
		"\n%\f%\x0E%\u021A\v%\x03%\x05%\u021D\n%\x03%\x03%\x05%\u0221\n%\x03&\x03" +
		"&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x05\'\u022B\n\'\x03\'\x03\'\x03\'\x05" +
		"\'\u0230\n\'\x03\'\x03\'\x03(\x03(\x05(\u0236\n(\x03(\x03(\x03(\x05(\u023B" +
		"\n(\x03(\x05(\u023E\n(\x03)\x03)\x03)\x03)\x07)\u0244\n)\f)\x0E)\u0247" +
		"\v)\x03)\x05)\u024A\n)\x05)\u024C\n)\x03)\x03)\x03*\x03*\x03*\x03*\x07" +
		"*\u0254\n*\f*\x0E*\u0257\v*\x03*\x03*\x07*\u025B\n*\f*\x0E*\u025E\v*\x03" +
		"*\x03*\x07*\u0262\n*\f*\x0E*\u0265\v*\x03*\x03*\x07*\u0269\n*\f*\x0E*" +
		"\u026C\v*\x03*\x03*\x07*\u0270\n*\f*\x0E*\u0273\v*\x03*\x03*\x07*\u0277" +
		"\n*\f*\x0E*\u027A\v*\x03*\x03*\x07*\u027E\n*\f*\x0E*\u0281\v*\x03*\x05" +
		"*\u0284\n*\x03*\x03*\x03*\x05*\u0289\n*\x03*\x07*\u028C\n*\f*\x0E*\u028F" +
		"\v*\x03*\x05*\u0292\n*\x03*\x03*\x03*\x03*\x07*\u0298\n*\f*\x0E*\u029B" +
		"\v*\x03*\x05*\u029E\n*\x03*\x03*\x05*\u02A2\n*\x03*\x03*\x05*\u02A6\n" +
		"*\x03*\x07*\u02A9\n*\f*\x0E*\u02AC\v*\x03*\x05*\u02AF\n*\x03*\x03*\x03" +
		"*\x07*\u02B4\n*\f*\x0E*\u02B7\v*\x03*\x03*\x03*\x07*\u02BC\n*\f*\x0E*" +
		"\u02BF\v*\x03*\x03*\x03*\x07*\u02C4\n*\f*\x0E*\u02C7\v*\x03*\x05*\u02CA" +
		"\n*\x03+\x03+\x03+\x05+\u02CF\n+\x03,\x03,\x03,\x03,\x05,\u02D5\n,\x03" +
		"-\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x05.\u02DF\n.\x03/\x03/\x03/\x03" +
		"/\x07/\u02E5\n/\f/\x0E/\u02E8\v/\x03/\x03/\x03/\x03/\x03/\x03/\x07/\u02F0" +
		"\n/\f/\x0E/\u02F3\v/\x03/\x03/\x05/\u02F7\n/\x030\x030\x030\x030\x031" +
		"\x031\x031\x031\x031\x031\x031\x031\x031\x031\x071\u0307\n1\f1\x0E1\u030A" +
		"\v1\x031\x031\x051\u030E\n1\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x052\u031B\n2\x032\x032\x032\x032\x072\u0321\n2\f2\x0E2\u0324" +
		"\v2\x052\u0326\n2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x032\x072\u0337\n2\f2\x0E2\u033A\v2\x052\u033C\n2\x03" +
		"2\x032\x052\u0340\n2\x032\x032\x032\x032\x072\u0346\n2\f2\x0E2\u0349\v" +
		"2\x032\x052\u034C\n2\x052\u034E\n2\x032\x032\x032\x032\x052\u0354\n2\x03" +
		"2\x032\x052\u0358\n2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x072\u0364\n2\f2\x0E2\u0367\v2\x032\x032\x032\x032\x032\x032\x032\x05" +
		"2\u0370\n2\x032\x032\x032\x032\x072\u0376\n2\f2\x0E2\u0379\v2\x052\u037B" +
		"\n2\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x032\x052\u038F\n2\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x072\u03A0\n2\f2\x0E2\u03A3" +
		"\v2\x033\x033\x033\x033\x073\u03A9\n3\f3\x0E3\u03AC\v3\x053\u03AE\n3\x03" +
		"3\x033\x034\x054\u03B3\n4\x034\x034\x034\x054\u03B8\n4\x034\x034\x054" +
		"\u03BC\n4\x035\x035\x035\x075\u03C1\n5\f5\x0E5\u03C4\v5\x035\x035\x03" +
		"6\x036\x036\x076\u03CB\n6\f6\x0E6\u03CE\v6\x036\x056\u03D1\n6\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x057\u03DE\n7\x038\x03" +
		"8\x038\x058\u03E3\n8\x038\x038\x039\x039\x039\x059\u03EA\n9\x03:\x03:" +
		"\x03:\x03:\x03:\x05:\u03F1\n:\x03;\x03;\x03;\x03;\x05;\u03F7\n;\x03<\x03" +
		"<\x03<\x03<\x05<\u03FD\n<\x03=\x03=\x03=\x03=\x03=\x03=\x03>\x03>\x05" +
		">\u0407\n>\x03?\x03?\x03?\x02\x02\x04<b@\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02\x02\n\x04\x02\x10\x12\x1F\x1F" +
		"\b\x02EEIIKKMMOOQQ\x03\x0289\x05\x02LLNNPP\x04\x02HHJJ\x03\x02RU\x03\x02" +
		"FG\x07\x02\x04\n\x10\x18\x1C\x1C %),\x02\u0490\x02\x82\x03\x02\x02\x02" +
		"\x04\x8B\x03\x02\x02\x02\x06\x90\x03\x02\x02\x02\b\xA2\x03\x02\x02\x02" +
		"\n\xAD\x03\x02\x02\x02\f\xC9\x03\x02\x02\x02\x0E\xDB\x03\x02\x02\x02\x10" +
		"\xE0\x03\x02\x02\x02\x12\xEF\x03\x02\x02\x02\x14\xF7\x03\x02\x02\x02\x16" +
		"\u0104\x03\x02\x02\x02\x18\u0107\x03\x02\x02\x02\x1A\u010A\x03\x02\x02" +
		"\x02\x1C\u011B\x03\x02\x02\x02\x1E\u011E\x03\x02\x02\x02 \u012F\x03\x02" +
		"\x02\x02\"\u0151\x03\x02\x02\x02$\u0156\x03\x02\x02\x02&\u015A\x03\x02" +
		"\x02\x02(\u015F\x03\x02\x02\x02*\u0163\x03\x02\x02\x02,\u016C\x03\x02" +
		"\x02\x02.\u0174\x03\x02\x02\x020\u017E\x03\x02\x02\x022\u0186\x03\x02" +
		"\x02\x024\u018F\x03\x02\x02\x026\u01A0\x03\x02\x02\x028\u01B2\x03\x02" +
		"\x02\x02:\u01B4\x03\x02\x02\x02<\u01C9\x03\x02\x02\x02>\u01D9\x03\x02" +
		"\x02\x02@\u01E3\x03\x02\x02\x02B\u01E6\x03\x02\x02\x02D\u01EE\x03\x02" +
		"\x02\x02F\u01FC\x03\x02\x02\x02H\u0220\x03\x02\x02\x02J\u0222\x03\x02" +
		"\x02\x02L\u0227\x03\x02\x02\x02N\u0233\x03\x02\x02\x02P\u023F\x03\x02" +
		"\x02\x02R\u02C9\x03\x02\x02\x02T\u02CB\x03\x02\x02\x02V\u02D0\x03\x02" +
		"\x02\x02X\u02D6\x03\x02\x02\x02Z\u02DB\x03\x02\x02\x02\\\u02F6\x03\x02" +
		"\x02\x02^\u02F8\x03\x02\x02\x02`\u030D\x03\x02\x02\x02b\u0353\x03\x02" +
		"\x02\x02d\u03A4\x03\x02\x02\x02f\u03B2\x03\x02\x02\x02h\u03BD\x03\x02" +
		"\x02\x02j\u03C7\x03\x02\x02\x02l\u03DD\x03\x02\x02\x02n\u03E2\x03\x02" +
		"\x02\x02p\u03E6\x03\x02\x02\x02r\u03F0\x03\x02\x02\x02t\u03F2\x03\x02" +
		"\x02\x02v\u03FC\x03\x02\x02\x02x\u03FE\x03\x02\x02\x02z\u0406\x03\x02" +
		"\x02\x02|\u0408\x03\x02\x02\x02~\x81\x05\x04\x03\x02\x7F\x81\x07:\x02" +
		"\x02\x80~\x03\x02\x02\x02\x80\x7F\x03\x02\x02\x02\x81\x84\x03\x02\x02" +
		"\x02\x82\x80\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x85\x03\x02\x02" +
		"\x02\x84\x82\x03\x02\x02\x02\x85\x86\x07\x02\x02\x03\x86\x03\x03\x02\x02" +
		"\x02\x87\x8C\x05\f\x07\x02\x88\x8C\x05\x06\x04\x02\x89\x8C\x05\b\x05\x02" +
		"\x8A\x8C\x05R*\x02\x8B\x87\x03\x02\x02\x02\x8B\x88\x03\x02\x02\x02\x8B" +
		"\x89\x03\x02\x02\x02\x8B\x8A\x03\x02\x02\x02\x8C\x05\x03\x02\x02\x02\x8D" +
		"\x8F\x05N(\x02\x8E\x8D\x03\x02\x02\x02\x8F\x92\x03\x02\x02\x02\x90\x8E" +
		"\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x93\x03\x02\x02\x02\x92\x90" +
		"\x03\x02\x02\x02\x93\x94\x07\x04\x02\x02\x94\x97\x05z>\x02\x95\x96\x07" +
		"\b\x02\x02\x96\x98\x05B\"\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02" +
		"\x02\x02\x98\x9B\x03\x02\x02\x02\x99\x9A\x07\x07\x02\x02\x9A\x9C\x05B" +
		"\"\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x03\x02" +
		"\x02\x02\x9D\x9E\x05\n\x06\x02\x9E\x07\x03\x02\x02\x02\x9F\xA1\x05N(\x02" +
		"\xA0\x9F\x03\x02\x02\x02\xA1\xA4\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02" +
		"\xA2\xA3\x03\x02\x02\x02\xA3\xA5\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02" +
		"\xA5\xA6\x07\x05\x02\x02\xA6\xA9\x05z>\x02\xA7\xA8\x07\b\x02\x02\xA8\xAA" +
		"\x05B\"\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAB\x03" +
		"\x02\x02\x02\xAB\xAC\x05\n\x06\x02\xAC\t\x03\x02\x02\x02\xAD\xB1\x073" +
		"\x02\x02\xAE\xB0\x05\x0E\b\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB3\x03\x02" +
		"\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x03\x02" +
		"\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4\xB5\x074\x02\x02\xB5\v\x03\x02\x02" +
		"\x02\xB6\xB7\x07\x06\x02\x02\xB7\xB8\x07L\x02\x02\xB8\xB9\x07\x16\x02" +
		"\x02\xB9\xCA\x07X\x02\x02\xBA\xBB\x07\x06\x02\x02\xBB\xBC\x073\x02\x02" +
		"\xBC\xC1\x05z>\x02\xBD\xBE\x076\x02\x02\xBE\xC0\x05z>\x02\xBF\xBD\x03" +
		"\x02\x02\x02\xC0\xC3\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03" +
		"\x02\x02\x02\xC2\xC4\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\xC5\x07" +
		"4\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x07\x16\x02\x02\xC7\xC8\x07" +
		"X\x02\x02\xC8\xCA\x03\x02\x02\x02\xC9\xB6\x03\x02\x02\x02\xC9\xBA\x03" +
		"\x02\x02\x02\xCA\r\x03\x02\x02\x02\xCB\xDC\x05F$\x02\xCC\xDC\x05X-\x02" +
		"\xCD\xDC\x05L\'\x02\xCE\xDC\x05\x18\r\x02\xCF\xDC\x05\x1A\x0E\x02\xD0" +
		"\xDC\x05\x1C\x0F\x02\xD1\xDC\x05\x1E\x10\x02\xD2\xDC\x05 \x11\x02\xD3" +
		"\xDC\x05&\x14\x02\xD4\xDC\x05(\x15\x02\xD5\xDC\x05*\x16\x02\xD6\xDC\x05" +
		",\x17\x02\xD7\xDC\x05.\x18\x02\xD8\xDC\x05.\x18\x02\xD9\xDC\x050\x19\x02" +
		"\xDA\xDC\x052\x1A\x02\xDB\xCB\x03\x02\x02\x02\xDB\xCC\x03\x02\x02\x02" +
		"\xDB\xCD\x03\x02\x02\x02\xDB\xCE\x03\x02\x02\x02\xDB\xCF\x03\x02\x02\x02" +
		"\xDB\xD0\x03\x02\x02\x02\xDB\xD1\x03\x02\x02\x02\xDB\xD2\x03\x02\x02\x02" +
		"\xDB\xD3\x03\x02\x02\x02\xDB\xD4\x03\x02\x02\x02\xDB\xD5\x03\x02\x02\x02" +
		"\xDB\xD6\x03\x02\x02\x02\xDB\xD7\x03\x02\x02\x02\xDB\xD8\x03\x02\x02\x02" +
		"\xDB\xD9\x03\x02\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC\x0F\x03\x02\x02\x02" +
		"\xDD\xDF\x05N(\x02\xDE\xDD\x03\x02\x02\x02\xDF\xE2\x03\x02\x02\x02\xE0" +
		"\xDE\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE3\x03\x02\x02\x02\xE2" +
		"\xE0\x03\x02\x02\x02\xE3\xE5\x05z>\x02\xE4\xE6\x078\x02\x02\xE5\xE4\x03" +
		"\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xED\x03\x02\x02\x02\xE7\xE8\x07" +
		";\x02\x02\xE8\xEB\x05<\x1F\x02\xE9\xEA\x07E\x02\x02\xEA\xEC\x05b2\x02" +
		"\xEB\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEE\x03\x02\x02\x02" +
		"\xED\xE7\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\x11\x03\x02\x02\x02" +
		"\xEF\xF4\x05\x10\t\x02\xF0\xF1\x076\x02\x02\xF1\xF3\x05\x10\t\x02\xF2" +
		"\xF0\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4" +
		"\xF5\x03\x02\x02\x02\xF5\x13\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7" +
		"\u0100\x07/\x02\x02\xF8\xFD\x05\x10\t\x02\xF9\xFA\x076\x02\x02\xFA\xFC" +
		"\x05\x10\t\x02\xFB\xF9\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB" +
		"\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\u0101\x03\x02\x02\x02\xFF" +
		"\xFD\x03\x02\x02\x02\u0100\xF8\x03\x02\x02\x02\u0100\u0101\x03\x02\x02" +
		"\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0103\x070\x02\x02\u0103\x15\x03" +
		"\x02\x02\x02\u0104\u0105\x05z>\x02\u0105\u0106\x05\x14\v\x02\u0106\x17" +
		"\x03\x02\x02\x02\u0107\u0108\x07\t\x02\x02\u0108\u0109\x05\x16\f\x02\u0109" +
		"\x19\x03\x02\x02\x02\u010A\u010B\x07\t\x02\x02\u010B\u0117\x073\x02\x02" +
		"\u010C\u0111\x05\x16\f\x02\u010D\u010E\x076\x02\x02\u010E\u0110\x05\x16" +
		"\f\x02\u010F\u010D\x03\x02\x02\x02\u0110\u0113\x03\x02\x02\x02\u0111\u010F" +
		"\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0115\x03\x02\x02\x02" +
		"\u0113\u0111\x03\x02\x02\x02\u0114\u0116\x076\x02\x02\u0115\u0114\x03" +
		"\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0118\x03\x02\x02\x02\u0117" +
		"\u010C\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0119\x03\x02" +
		"\x02\x02\u0119\u011A\x074\x02\x02\u011A\x1B\x03\x02\x02\x02\u011B\u011C" +
		"\x07\n\x02\x02\u011C\u011D\x05\x16\f\x02\u011D\x1D\x03\x02\x02\x02\u011E" +
		"\u011F\x07\n\x02\x02\u011F\u012B\x073\x02\x02\u0120\u0125\x05\x16\f\x02" +
		"\u0121\u0122\x076\x02\x02\u0122\u0124\x05\x16\f\x02\u0123\u0121\x03\x02" +
		"\x02\x02\u0124\u0127\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125" +
		"\u0126\x03\x02\x02\x02\u0126\u0129\x03\x02\x02\x02\u0127\u0125\x03\x02" +
		"\x02\x02\u0128\u012A\x076\x02\x02\u0129\u0128\x03\x02\x02\x02\u0129\u012A" +
		"\x03\x02\x02\x02\u012A\u012C\x03\x02\x02\x02\u012B\u0120\x03\x02\x02\x02" +
		"\u012B\u012C\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x07" +
		"4\x02\x02\u012E\x1F\x03\x02\x02\x02\u012F\u0130\x07\x17\x02\x02\u0130" +
		"\u0134\x073\x02\x02\u0131\u0133\x05\"\x12\x02\u0132\u0131\x03\x02\x02" +
		"\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0135" +
		"\x03\x02\x02\x02\u0135\u0137\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02" +
		"\u0137\u0138\x074\x02\x02\u0138!\x03\x02\x02\x02\u0139\u013A\x05z>\x02" +
		"\u013A\u013B\x07;\x02\x02\u013B\u013E\x05<\x1F\x02\u013C\u013D\x07E\x02" +
		"\x02\u013D\u013F\x05b2\x02\u013E\u013C\x03\x02\x02\x02\u013E\u013F\x03" +
		"\x02\x02\x02\u013F\u0152\x03\x02\x02\x02\u0140\u0141\x05z>\x02\u0141\u0142" +
		"\x071\x02\x02\u0142\u0147\x05$\x13\x02\u0143\u0144\x076\x02\x02\u0144" +
		"\u0146\x05$\x13\x02\u0145\u0143\x03\x02\x02\x02\u0146\u0149\x03\x02\x02" +
		"\x02\u0147\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014A" +
		"\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u014A\u014B\x072\x02\x02" +
		"\u014B\u014C\x07;\x02\x02\u014C\u014F\x05<\x1F\x02\u014D\u014E\x07E\x02" +
		"\x02\u014E\u0150\x05b2\x02\u014F\u014D\x03\x02\x02\x02\u014F\u0150\x03" +
		"\x02\x02\x02\u0150\u0152\x03\x02\x02\x02\u0151\u0139\x03\x02\x02\x02\u0151" +
		"\u0140\x03\x02\x02\x02\u0152#\x03\x02\x02\x02\u0153\u0154\x05z>\x02\u0154" +
		"\u0155\x07;\x02\x02\u0155\u0157\x03\x02\x02\x02\u0156\u0153\x03\x02\x02" +
		"\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u0159" +
		"\x05<\x1F\x02\u0159%\x03\x02\x02\x02\u015A\u015B\x07=\x02\x02\u015B\u015C" +
		"\x07\x10\x02\x02\u015C\u015D\x05\x14\v\x02\u015D\u015E\x05h5\x02\u015E" +
		"\'\x03\x02\x02\x02\u015F\u0160\x07=\x02\x02\u0160\u0161\x07\x10\x02\x02" +
		"\u0161\u0162\x05\x14\v\x02\u0162)\x03\x02\x02\x02\u0163\u0165\x07\x11" +
		"\x02\x02\u0164\u0166\x07L\x02\x02\u0165\u0164\x03\x02\x02\x02\u0165\u0166" +
		"\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0168\x07=\x02\x02" +
		"\u0168\u0169\x05z>\x02\u0169\u016A\x05\x14\v\x02\u016A\u016B\x05h5\x02" +
		"\u016B+\x03\x02\x02\x02\u016C\u016E\x07\x11\x02\x02\u016D\u016F\x07L\x02" +
		"\x02\u016E\u016D\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0170" +
		"\x03\x02\x02\x02\u0170\u0171\x07=\x02\x02\u0171\u0172\x05z>\x02\u0172" +
		"\u0173\x05\x14\v\x02\u0173-\x03\x02\x02\x02\u0174\u0175\x07\x12\x02\x02" +
		"\u0175\u0176\x07=\x02\x02\u0176\u0177\x05z>\x02\u0177\u017A\x05\x14\v" +
		"\x02\u0178\u0179\x07@\x02\x02\u0179\u017B\x05<\x1F\x02\u017A\u0178\x03" +
		"\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C" +
		"\u017D\x05h5\x02\u017D/\x03\x02\x02\x02\u017E\u017F\x07\x12\x02\x02\u017F" +
		"\u0180\x07=\x02\x02\u0180\u0181\x05z>\x02\u0181\u0184\x05\x14\v\x02\u0182" +
		"\u0183\x07@\x02\x02\u0183\u0185\x05<\x1F\x02\u0184\u0182\x03\x02\x02\x02" +
		"\u0184\u0185\x03\x02\x02\x02\u01851\x03\x02\x02\x02\u0186\u0189\x07\x13" +
		"\x02\x02\u0187\u0188\x075\x02\x02\u0188\u018A\x05z>\x02\u0189\u0187\x03" +
		"\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B" +
		"\u018C\x05z>\x02\u018C\u018D\x05\x14\v\x02\u018D\u018E\x05h5\x02\u018E" +
		"3\x03\x02\x02\x02\u018F\u0190\x07*\x02\x02\u0190\u0191\x05z>\x02\u0191" +
		"\u0192\x073\x02\x02\u0192\u0199\x056\x1C\x02\u0193\u0195\x056\x1C\x02" +
		"\u0194\u0196\x076\x02\x02\u0195\u0194\x03\x02\x02\x02\u0195\u0196\x03" +
		"\x02\x02\x02\u0196\u0198\x03\x02\x02\x02\u0197\u0193\x03\x02\x02\x02\u0198" +
		"\u019B\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u0199\u019A\x03\x02" +
		"\x02\x02\u019A\u019C\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019C" +
		"\u019D\x074\x02\x02\u019D5\x03\x02\x02\x02\u019E\u01A1\x058\x1D\x02\u019F" +
		"\u01A1\x05:\x1E\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u019F\x03\x02\x02" +
		"\x02\u01A17\x03\x02\x02\x02\u01A2\u01A3\x07=\x02\x02\u01A3\u01A4\x05z" +
		">\x02\u01A4\u01A6\x07/\x02\x02\u01A5\u01A7\x05\x12\n\x02\u01A6\u01A5\x03" +
		"\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8" +
		"\u01A9\x070\x02\x02\u01A9\u01B3\x03\x02\x02\x02\u01AA\u01AB\x07=\x02\x02" +
		"\u01AB\u01AC\x05z>\x02\u01AC\u01AE\x073\x02\x02\u01AD\u01AF\x05\x12\n" +
		"\x02\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B0" +
		"\x03\x02\x02\x02\u01B0\u01B1\x074\x02\x02\u01B1\u01B3\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\u01B2\u01A2\x03\x02\x02\x02\u01B2\u01AA\x03\x02\x02\x02\u01B3" +
		"9\x03\x02\x02\x02\u01B4\u01B5\x07=\x02\x02\u01B5\u01B6\x05z>\x02\u01B6" +
		";\x03\x02\x02\x02\u01B7\u01B8\b\x1F\x01\x02\u01B8\u01CA\x05B\"\x02\u01B9" +
		"\u01CA\x05D#\x02\u01BA\u01CA\x05@!\x02\u01BB\u01CA\x05> \x02\u01BC\u01C5" +
		"\x071\x02\x02\u01BD\u01C2\x05<\x1F\x02\u01BE\u01BF\x076\x02\x02\u01BF" +
		"\u01C1\x05<\x1F\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1\u01C4\x03\x02\x02" +
		"\x02\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C6" +
		"\x03\x02\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C5\u01BD\x03\x02\x02\x02" +
		"\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01CA\x07" +
		"2\x02\x02\u01C8\u01CA\x05F$\x02\u01C9\u01B7\x03\x02\x02\x02\u01C9\u01B9" +
		"\x03\x02\x02\x02\u01C9\u01BA\x03\x02\x02\x02\u01C9\u01BB\x03\x02\x02\x02" +
		"\u01C9\u01BC\x03\x02\x02\x02\u01C9\u01C8\x03\x02\x02\x02\u01CA\u01D5\x03" +
		"\x02\x02\x02\u01CB\u01CC\f\x06\x02\x02\u01CC\u01D4\x078\x02\x02\u01CD" +
		"\u01CE\f\x05\x02\x02\u01CE\u01D0\x071\x02\x02\u01CF\u01D1\x07Y\x02\x02" +
		"\u01D0\u01CF\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\x03" +
		"\x02\x02\x02\u01D2\u01D4\x072\x02\x02\u01D3\u01CB\x03\x02\x02\x02\u01D3" +
		"\u01CD\x03\x02\x02\x02\u01D4\u01D7\x03\x02\x02\x02\u01D5\u01D3\x03\x02" +
		"\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6=\x03\x02\x02\x02\u01D7\u01D5" +
		"\x03\x02\x02\x02\u01D8\u01DA\x079\x02\x02\u01D9\u01D8\x03\x02\x02\x02" +
		"\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DD\x07" +
		"/\x02\x02\u01DC\u01DE\x05\x12\n\x02\u01DD\u01DC\x03\x02\x02\x02\u01DD" +
		"\u01DE\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E0\x070\x02" +
		"\x02\u01E0\u01E1\x07@\x02\x02\u01E1\u01E2\x05<\x1F\x02\u01E2?\x03\x02" +
		"\x02\x02\u01E3\u01E4\t\x02\x02\x02\u01E4\u01E5\x05B\"\x02\u01E5A\x03\x02" +
		"\x02\x02\u01E6\u01EB\x05z>\x02\u01E7\u01E8\x075\x02\x02\u01E8\u01EA\x05" +
		"z>\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB\u01E9" +
		"\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01ECC\x03\x02\x02\x02\u01ED" +
		"\u01EB\x03\x02\x02\x02\u01EE\u01F3\x05B\"\x02\u01EF\u01F0\x07/\x02\x02" +
		"\u01F0\u01F1\x05b2\x02\u01F1\u01F2\x070\x02\x02\u01F2\u01F4\x03\x02\x02" +
		"\x02\u01F3\u01EF\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F5" +
		"\x03\x02\x02\x02\u01F5\u01F6\x075\x02\x02\u01F6\u01F7\x07=\x02\x02\u01F7" +
		"\u01F8\x05z>\x02\u01F8E\x03\x02\x02\x02\u01F9\u01FD\x05H%\x02\u01FA\u01FD" +
		"\x054\x1B\x02\u01FB\u01FD\x05J&\x02\u01FC\u01F9\x03\x02\x02\x02\u01FC" +
		"\u01FA\x03\x02\x02\x02\u01FC\u01FB\x03\x02\x02\x02\u01FDG\x03\x02\x02" +
		"\x02\u01FE\u0200\x07)\x02\x02\u01FF\u0201\x05z>\x02\u0200\u01FF\x03\x02" +
		"\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202" +
		"\u020B\x07/\x02\x02\u0203\u0208\x05\x10\t\x02\u0204\u0205\x076\x02\x02" +
		"\u0205\u0207\x05\x10\t\x02\u0206\u0204\x03\x02\x02\x02\u0207\u020A\x03" +
		"\x02\x02\x02\u0208\u0206\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209" +
		"\u020C\x03\x02\x02\x02\u020A\u0208\x03\x02\x02\x02\u020B\u0203\x03\x02" +
		"\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D" +
		"\u0221\x070\x02\x02\u020E\u0210\x07)\x02\x02\u020F\u0211\x05z>\x02\u0210" +
		"\u020F\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0212\x03\x02" +
		"\x02\x02\u0212\u0213\x073\x02\x02\u0213\u0218\x05\x10\t\x02\u0214\u0215" +
		"\x076\x02\x02\u0215\u0217\x05\x10\t\x02\u0216\u0214\x03\x02\x02\x02\u0217" +
		"\u021A\x03\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0219\x03\x02" +
		"\x02\x02\u0219\u021C\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021B" +
		"\u021D\x076\x02\x02\u021C\u021B\x03\x02\x02\x02\u021C\u021D\x03\x02\x02" +
		"\x02\u021D\u021E\x03\x02\x02\x02\u021E\u021F\x074\x02\x02\u021F\u0221" +
		"\x03\x02\x02\x02\u0220\u01FE\x03\x02\x02\x02\u0220\u020E\x03\x02\x02\x02" +
		"\u0221I\x03\x02\x02\x02\u0222\u0223\x07+\x02\x02\u0223\u0224\x05z>\x02" +
		"\u0224\u0225\x07E\x02\x02\u0225\u0226\x05<\x1F\x02\u0226K\x03\x02\x02" +
		"\x02\u0227\u0228\x07$\x02\x02\u0228\u022A\x05z>\x02\u0229\u022B\x079\x02" +
		"\x02\u022A\u0229\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022C" +
		"\x03\x02\x02\x02\u022C\u022F\x05\x14\v\x02\u022D\u022E\x07@\x02\x02\u022E" +
		"\u0230\x05<\x1F\x02\u022F\u022D\x03\x02\x02\x02\u022F\u0230\x03\x02\x02" +
		"\x02\u0230\u0231\x03\x02\x02\x02\u0231\u0232\x05h5\x02\u0232M\x03\x02" +
		"\x02\x02\u0233\u0235\x07>\x02\x02\u0234\u0236\x07>\x02\x02\u0235\u0234" +
		"\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02" +
		"\u0237\u023D\x05B\"\x02\u0238\u023A\x07/\x02\x02\u0239\u023B\x05n8\x02" +
		"\u023A\u0239\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023C\x03" +
		"\x02\x02\x02\u023C\u023E\x070\x02\x02\u023D\u0238\x03\x02\x02\x02\u023D" +
		"\u023E\x03\x02\x02\x02\u023EO\x03\x02\x02\x02\u023F\u024B\x073\x02\x02" +
		"\u0240\u0245\x05p9\x02\u0241\u0242\x076\x02\x02\u0242\u0244\x05p9\x02" +
		"\u0243\u0241\x03\x02\x02\x02\u0244\u0247\x03\x02\x02\x02\u0245\u0243\x03" +
		"\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0249\x03\x02\x02\x02\u0247" +
		"\u0245\x03\x02\x02\x02\u0248\u024A\x076\x02\x02\u0249\u0248\x03\x02\x02" +
		"\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024C\x03\x02\x02\x02\u024B\u0240" +
		"\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02" +
		"\u024D\u024E\x074\x02\x02\u024EQ\x03\x02\x02\x02\u024F\u0250\x05N(\x02" +
		"\u0250\u0251\x05h5\x02\u0251\u02CA\x03\x02\x02\x02\u0252\u0254\x05N(\x02" +
		"\u0253\u0252\x03\x02\x02\x02\u0254\u0257\x03\x02\x02\x02\u0255\u0253\x03" +
		"\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0258\x03\x02\x02\x02\u0257" +
		"\u0255\x03\x02\x02\x02\u0258\u02CA\x05T+\x02\u0259\u025B\x05N(\x02\u025A" +
		"\u0259\x03\x02\x02\x02\u025B\u025E\x03\x02\x02\x02\u025C\u025A\x03\x02" +
		"\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025F\x03\x02\x02\x02\u025E" +
		"\u025C\x03\x02\x02\x02\u025F\u02CA\x05V,\x02\u0260\u0262\x05N(\x02\u0261" +
		"\u0260\x03\x02\x02\x02\u0262\u0265\x03\x02\x02\x02\u0263\u0261\x03\x02" +
		"\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0266\x03\x02\x02\x02\u0265" +
		"\u0263\x03\x02\x02\x02\u0266\u02CA\x05X-\x02\u0267\u0269\x05N(\x02\u0268" +
		"\u0267\x03\x02\x02\x02\u0269\u026C\x03\x02\x02\x02\u026A\u0268\x03\x02" +
		"\x02\x02\u026A\u026B\x03\x02\x02\x02\u026B\u026D\x03\x02\x02\x02\u026C" +
		"\u026A\x03\x02\x02\x02\u026D\u02CA\x05^0\x02\u026E\u0270\x05N(\x02\u026F" +
		"\u026E\x03\x02\x02\x02\u0270\u0273\x03\x02\x02\x02\u0271\u026F\x03\x02" +
		"\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0274\x03\x02\x02\x02\u0273" +
		"\u0271\x03\x02\x02\x02\u0274\u02CA\x05t;\x02\u0275\u0277\x05N(\x02\u0276" +
		"\u0275\x03\x02\x02\x02\u0277\u027A\x03\x02\x02\x02\u0278\u0276\x03\x02" +
		"\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279\u027B\x03\x02\x02\x02\u027A" +
		"\u0278\x03\x02\x02\x02\u027B\u02CA\x05x=\x02\u027C\u027E\x05N(\x02\u027D" +
		"\u027C\x03\x02\x02\x02\u027E\u0281\x03\x02\x02\x02\u027F\u027D\x03\x02" +
		"\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280\u0283\x03\x02\x02\x02\u0281" +
		"\u027F\x03\x02\x02\x02\u0282\u0284\x07\v\x02\x02\u0283\u0282\x03\x02\x02" +
		"\x02\u0283\u0284\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0286" +
		"\x07\r\x02\x02\u0286\u0288\x05b2\x02\u0287\u0289\x05P)\x02\u0288\u0287" +
		"\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289\u02CA\x03\x02\x02\x02" +
		"\u028A\u028C\x05N(\x02\u028B\u028A\x03\x02\x02\x02\u028C\u028F\x03\x02" +
		"\x02\x02\u028D\u028B\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E" +
		"\u0291\x03\x02\x02\x02\u028F\u028D\x03\x02\x02\x02\u0290\u0292\x07\v\x02" +
		"\x02\u0291\u0290\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u0293" +
		"\x03\x02\x02\x02\u0293\u0294\x07\x0F\x02\x02\u0294\u0295\x07=\x02\x02" +
		"\u0295\u02CA\x05b2\x02\u0296\u0298\x05N(\x02\u0297\u0296\x03\x02\x02\x02" +
		"\u0298\u029B\x03\x02\x02\x02\u0299\u0297\x03\x02\x02\x02\u0299\u029A\x03" +
		"\x02\x02\x02\u029A\u029D\x03\x02\x02\x02\u029B\u0299\x03\x02\x02\x02\u029C" +
		"\u029E\x07\v\x02\x02\u029D\u029C\x03\x02\x02\x02\u029D\u029E\x03\x02\x02" +
		"\x02\u029E\u029F\x03\x02\x02\x02\u029F\u02A1\x07\f\x02\x02\u02A0\u02A2" +
		"\x07=\x02\x02\u02A1\u02A0\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02" +
		"\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A5\x05b2\x02\u02A4\u02A6\x05P)\x02" +
		"\u02A5\u02A4\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02CA\x03" +
		"\x02\x02\x02\u02A7\u02A9\x05N(\x02\u02A8\u02A7\x03\x02\x02\x02\u02A9\u02AC" +
		"\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02" +
		"\u02AB\u02AE\x03\x02\x02\x02\u02AC\u02AA\x03\x02\x02\x02\u02AD\u02AF\x07" +
		"\v\x02\x02\u02AE\u02AD\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF" +
		"\u02B0\x03\x02\x02\x02\u02B0\u02B1\x07,\x02\x02\u02B1\u02CA\x05b2\x02" +
		"\u02B2\u02B4\x05N(\x02\u02B3\u02B2\x03\x02\x02\x02\u02B4\u02B7\x03\x02" +
		"\x02\x02\u02B5\u02B3\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6" +
		"\u02B8\x03\x02\x02\x02\u02B7\u02B5\x03\x02\x02\x02\u02B8\u02B9\x07(\x02" +
		"\x02\u02B9\u02CA\x05b2\x02\u02BA\u02BC\x05N(\x02\u02BB\u02BA\x03\x02\x02" +
		"\x02\u02BC\u02BF\x03\x02\x02\x02\u02BD\u02BB\x03\x02\x02\x02\u02BD\u02BE" +
		"\x03\x02\x02\x02\u02BE\u02C0\x03\x02\x02\x02\u02BF\u02BD\x03\x02\x02\x02" +
		"\u02C0\u02C1\x07\'\x02\x02\u02C1\u02CA\x05b2\x02\u02C2\u02C4\x05N(\x02" +
		"\u02C3\u02C2\x03\x02\x02\x02\u02C4\u02C7\x03\x02\x02\x02\u02C5\u02C3\x03" +
		"\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02\u02C6\u02C8\x03\x02\x02\x02\u02C7" +
		"\u02C5\x03\x02\x02\x02\u02C8\u02CA\x05b2\x02\u02C9\u024F\x03\x02\x02\x02" +
		"\u02C9\u0255\x03\x02\x02\x02\u02C9\u025C\x03\x02\x02\x02\u02C9\u0263\x03" +
		"\x02\x02\x02\u02C9\u026A\x03\x02\x02\x02\u02C9\u0271\x03\x02\x02\x02\u02C9" +
		"\u0278\x03\x02\x02\x02\u02C9\u027F\x03\x02\x02\x02\u02C9\u028D\x03\x02" +
		"\x02\x02\u02C9\u0299\x03\x02\x02\x02\u02C9\u02AA\x03\x02\x02\x02\u02C9" +
		"\u02B5\x03\x02\x02\x02\u02C9\u02BD\x03\x02\x02\x02\u02C9\u02C5\x03\x02" +
		"\x02\x02\u02CAS\x03\x02\x02\x02\u02CB\u02CE\x07\x03\x02\x02\u02CC\u02CF" +
		"\x05h5\x02\u02CD\u02CF\x05R*\x02\u02CE\u02CC\x03\x02\x02\x02\u02CE\u02CD" +
		"\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CFU\x03\x02\x02\x02\u02D0" +
		"\u02D1\x07%\x02\x02\u02D1\u02D4\x05\\/\x02\u02D2\u02D3\x07E\x02\x02\u02D3" +
		"\u02D5\x05b2\x02\u02D4\u02D2\x03\x02\x02\x02\u02D4\u02D5\x03\x02\x02\x02" +
		"\u02D5W\x03\x02\x02\x02\u02D6\u02D7\x07&\x02\x02\u02D7\u02D8\x05z>\x02" +
		"\u02D8\u02D9\x07E\x02\x02\u02D9\u02DA\x05b2\x02\u02DAY\x03\x02\x02\x02" +
		"\u02DB\u02DE\x05z>\x02\u02DC\u02DD\x07;\x02\x02\u02DD\u02DF\x05<\x1F\x02" +
		"\u02DE\u02DC\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF[\x03\x02" +
		"\x02\x02\u02E0\u02F7\x05Z.\x02\u02E1\u02E2\x073\x02\x02\u02E2\u02E6\x05" +
		"Z.\x02\u02E3\u02E5\x076\x02\x02\u02E4\u02E3\x03\x02\x02\x02\u02E5\u02E8" +
		"\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E6\u02E7\x03\x02\x02\x02" +
		"\u02E7\u02E9\x03\x02\x02\x02\u02E8\u02E6\x03\x02\x02\x02\u02E9\u02EA\x07" +
		"4\x02\x02\u02EA\u02F7\x03\x02\x02\x02\u02EB\u02EC\x071\x02\x02\u02EC\u02F1" +
		"\x05Z.\x02\u02ED\u02EE\x076\x02\x02\u02EE\u02F0\x05Z.\x02\u02EF\u02ED" +
		"\x03\x02\x02\x02\u02F0\u02F3\x03\x02\x02\x02\u02F1\u02EF\x03\x02\x02\x02" +
		"\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F4\x03\x02\x02\x02\u02F3\u02F1\x03" +
		"\x02\x02\x02\u02F4\u02F5\x072\x02\x02\u02F5\u02F7\x03\x02\x02\x02\u02F6" +
		"\u02E0\x03\x02\x02\x02\u02F6\u02E1\x03\x02\x02\x02\u02F6\u02EB\x03\x02" +
		"\x02\x02\u02F7]\x03\x02\x02\x02\u02F8\u02F9\x05`1\x02\u02F9\u02FA\t\x03" +
		"\x02\x02\u02FA\u02FB\x05b2\x02\u02FB_\x03\x02\x02\x02\u02FC\u030E\x05" +
		"z>\x02\u02FD\u02FE\x05b2\x02\u02FE\u02FF\x075\x02\x02\u02FF\u0300\x05" +
		"z>\x02\u0300\u030E\x03\x02\x02\x02\u0301\u0302\x05b2\x02\u0302\u0303\x07" +
		"1\x02\x02\u0303\u0308\x05b2\x02\u0304\u0305\x076\x02\x02\u0305\u0307\x05" +
		"b2\x02\u0306\u0304\x03\x02\x02\x02\u0307\u030A\x03\x02\x02\x02\u0308\u0306" +
		"\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030B\x03\x02\x02\x02" +
		"\u030A\u0308\x03\x02\x02\x02\u030B\u030C\x072\x02\x02\u030C\u030E\x03" +
		"\x02\x02\x02\u030D\u02FC\x03\x02\x02\x02\u030D\u02FD\x03\x02\x02\x02\u030D" +
		"\u0301\x03\x02\x02\x02\u030Ea\x03\x02\x02\x02\u030F\u0310\b2\x01\x02\u0310" +
		"\u0311\x07/\x02\x02\u0311\u0312\x05b2\x02\u0312\u0313\x070\x02\x02\u0313" +
		"\u0354\x03\x02\x02\x02\u0314\u0315\x05<\x1F\x02\u0315\u0316\x07<\x02\x02" +
		"\u0316\u0317\x05z>\x02\u0317\u0354\x03\x02\x02\x02\u0318\u031A\x05<\x1F" +
		"\x02\u0319\u031B\x079\x02\x02\u031A\u0319\x03\x02\x02\x02\u031A\u031B" +
		"\x03\x02\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C\u0325\x07/\x02\x02" +
		"\u031D\u0322\x05n8\x02\u031E\u031F\x076\x02\x02\u031F\u0321\x05n8\x02" +
		"\u0320\u031E\x03\x02\x02\x02\u0321\u0324\x03\x02\x02\x02\u0322\u0320\x03" +
		"\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323\u0326\x03\x02\x02\x02\u0324" +
		"\u0322\x03\x02\x02\x02\u0325\u031D\x03\x02\x02\x02\u0325\u0326\x03\x02" +
		"\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327\u0328\x070\x02\x02\u0328\u0354" +
		"\x03\x02\x02\x02\u0329\u0354\x05j6\x02\u032A\u032B\x07\x1D\x02\x02\u032B" +
		"\u0354\x05b2\x0F\u032C\u0354\x05t;\x02\u032D\u032E\x07\x0E\x02\x02\u032E" +
		"\u0354\x05b2\v\u032F\u0330\x07\'\x02\x02\u0330\u0354\x05b2\n\u0331\u0354" +
		"\x05f4\x02\u0332\u033B\x071\x02\x02\u0333\u0338\x05b2\x02\u0334\u0335" +
		"\x076\x02\x02\u0335\u0337\x05b2\x02\u0336\u0334\x03\x02\x02\x02\u0337" +
		"\u033A\x03\x02\x02\x02\u0338\u0336\x03\x02\x02\x02\u0338\u0339\x03\x02" +
		"\x02\x02\u0339\u033C\x03\x02\x02\x02\u033A\u0338\x03\x02\x02\x02\u033B" +
		"\u0333\x03\x02\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C\u033D\x03\x02" +
		"\x02\x02\u033D\u0354\x072\x02\x02\u033E\u0340\x05<\x1F\x02\u033F\u033E" +
		"\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02" +
		"\u0341\u034D\x073\x02\x02\u0342\u0347\x05p9\x02\u0343\u0344\x076\x02\x02" +
		"\u0344\u0346\x05p9\x02\u0345\u0343\x03\x02\x02\x02\u0346\u0349\x03\x02" +
		"\x02\x02\u0347\u0345\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348" +
		"\u034B\x03\x02\x02\x02\u0349\u0347\x03\x02\x02\x02\u034A\u034C\x076\x02" +
		"\x02\u034B\u034A\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02\u034C\u034E" +
		"\x03\x02\x02\x02\u034D\u0342\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02" +
		"\u034E\u034F\x03\x02\x02\x02\u034F\u0354\x074\x02\x02\u0350\u0354\x05" +
		"D#\x02\u0351\u0354\x05r:\x02\u0352\u0354\x05z>\x02\u0353\u030F\x03\x02" +
		"\x02\x02\u0353\u0314\x03\x02\x02\x02\u0353\u0318\x03\x02\x02\x02\u0353" +
		"\u0329\x03\x02\x02\x02\u0353\u032A\x03\x02\x02\x02\u0353\u032C\x03\x02" +
		"\x02\x02\u0353\u032D\x03\x02\x02\x02\u0353\u032F\x03\x02\x02\x02\u0353" +
		"\u0331\x03\x02\x02\x02\u0353\u0332\x03\x02\x02\x02\u0353\u033F\x03\x02" +
		"\x02\x02\u0353\u0350\x03\x02\x02\x02\u0353\u0351\x03\x02\x02\x02\u0353" +
		"\u0352\x03\x02\x02\x02\u0354\u03A1\x03\x02\x02\x02\u0355\u0357\f\x1F\x02" +
		"\x02\u0356\u0358\t\x04\x02\x02\u0357\u0356\x03\x02\x02\x02\u0357\u0358" +
		"\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359\u035A\x075\x02\x02" +
		"\u035A\u03A0\x05z>\x02\u035B\u035C\f\x1E\x02\x02\u035C\u035D\x07-\x02" +
		"\x02\u035D\u03A0\x05<\x1F\x02\u035E\u035F\f\x1D\x02\x02\u035F\u0360\x07" +
		"1\x02\x02\u0360\u0365\x05n8\x02\u0361\u0362\x076\x02\x02\u0362\u0364\x05" +
		"n8\x02\u0363\u0361\x03\x02\x02\x02\u0364\u0367\x03\x02\x02\x02\u0365\u0363" +
		"\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u0368\x03\x02\x02\x02" +
		"\u0367\u0365\x03\x02\x02\x02\u0368\u0369\x072\x02\x02\u0369\u03A0\x03" +
		"\x02\x02\x02\u036A\u036B\f\x1C\x02\x02\u036B\u036C\x07<\x02\x02\u036C" +
		"\u03A0\x05z>\x02\u036D\u036F\f\x1A\x02\x02\u036E\u0370\x079\x02\x02\u036F" +
		"\u036E\x03\x02\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370\u0371\x03\x02" +
		"\x02\x02\u0371\u037A\x07/\x02\x02\u0372\u0377\x05n8\x02\u0373\u0374\x07" +
		"6\x02\x02\u0374\u0376\x05n8\x02\u0375\u0373\x03\x02\x02\x02\u0376\u0379" +
		"\x03\x02\x02\x02\u0377\u0375\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02" +
		"\u0378\u037B\x03\x02\x02\x02\u0379\u0377\x03\x02\x02\x02\u037A\u0372\x03" +
		"\x02\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B\u037C\x03\x02\x02\x02\u037C" +
		"\u03A0\x070\x02\x02\u037D\u037E\f\x18\x02\x02\u037E\u037F\t\x05\x02\x02" +
		"\u037F\u03A0\x05b2\x02\u0380\u0381\f\x17\x02\x02\u0381\u0382\t\x06\x02" +
		"\x02\u0382\u03A0\x05b2\x02\u0383\u0384\f\x16\x02\x02\u0384\u0385\t\x07" +
		"\x02\x02\u0385\u03A0\x05b2\x02\u0386\u0387\f\x15\x02\x02\u0387\u0388\t" +
		"\b\x02\x02\u0388\u03A0\x05b2\x02\u0389\u038A\f\x14\x02\x02\u038A\u03A0" +
		"\x078\x02\x02\u038B\u038C\f\x13\x02\x02\u038C\u038E\x07\x19\x02\x02\u038D" +
		"\u038F\x07\x1D\x02\x02\u038E\u038D\x03\x02\x02\x02\u038E\u038F\x03\x02" +
		"\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390\u03A0\x05<\x1F\x02\u0391\u0392" +
		"\f\x12\x02\x02\u0392\u0393\x07\x15\x02\x02\u0393\u03A0\x05b2\x02\u0394" +
		"\u0395\f\x11\x02\x02\u0395\u0396\x077\x02\x02\u0396\u03A0\x05b2\x02\u0397" +
		"\u0398\f\x0E\x02\x02\u0398\u0399\x07 \x02\x02\u0399\u03A0\x05b2\x02\u039A" +
		"\u039B\f\r\x02\x02\u039B\u039C\x07!\x02\x02\u039C\u03A0\x05b2\x02\u039D" +
		"\u039E\f\x03\x02\x02\u039E\u03A0\x07.\x02\x02\u039F\u0355\x03\x02\x02" +
		"\x02\u039F\u035B\x03\x02\x02\x02\u039F\u035E\x03\x02\x02\x02\u039F\u036A" +
		"\x03\x02\x02\x02\u039F\u036D\x03\x02\x02\x02\u039F\u037D\x03\x02\x02\x02" +
		"\u039F\u0380\x03\x02\x02\x02\u039F\u0383\x03\x02\x02\x02\u039F\u0386\x03" +
		"\x02\x02\x02\u039F\u0389\x03\x02\x02\x02\u039F\u038B\x03\x02\x02\x02\u039F" +
		"\u0391\x03\x02\x02\x02\u039F\u0394\x03\x02\x02\x02\u039F\u0397\x03\x02" +
		"\x02\x02\u039F\u039A\x03\x02\x02\x02\u039F\u039D\x03\x02\x02\x02\u03A0" +
		"\u03A3\x03\x02\x02\x02\u03A1\u039F\x03\x02\x02\x02\u03A1\u03A2\x03\x02" +
		"\x02\x02\u03A2c\x03\x02\x02\x02\u03A3\u03A1\x03\x02\x02\x02\u03A4\u03AD" +
		"\x07B\x02\x02\u03A5\u03AA\x05\x10\t\x02\u03A6\u03A7\x076\x02\x02\u03A7" +
		"\u03A9\x05\x10\t\x02\u03A8\u03A6\x03\x02\x02\x02\u03A9\u03AC\x03\x02\x02" +
		"\x02\u03AA\u03A8\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB\u03AE" +
		"\x03\x02\x02\x02\u03AC\u03AA\x03\x02\x02\x02\u03AD\u03A5\x03\x02\x02\x02" +
		"\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02\u03AF\u03B0\x07" +
		"B\x02\x02\u03B0e\x03\x02\x02\x02\u03B1\u03B3\x079\x02\x02\u03B2\u03B1" +
		"\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02" +
		"\u03B4\u03BB\x05d3\x02\u03B5\u03B6\x07@\x02\x02\u03B6\u03B8\x05<\x1F\x02" +
		"\u03B7\u03B5\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02\x02\u03B8\u03B9\x03" +
		"\x02\x02\x02\u03B9\u03BC\x05h5\x02\u03BA\u03BC\x05R*\x02\u03BB\u03B7\x03" +
		"\x02\x02\x02\u03BB\u03BA\x03\x02\x02\x02\u03BCg\x03\x02\x02\x02\u03BD" +
		"\u03C2\x073\x02\x02\u03BE\u03C1\x05R*\x02\u03BF\u03C1\x07:\x02\x02\u03C0" +
		"\u03BE\x03\x02\x02\x02\u03C0\u03BF\x03\x02\x02\x02\u03C1\u03C4\x03\x02" +
		"\x02\x02\u03C2\u03C0\x03\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3" +
		"\u03C5\x03\x02\x02\x02\u03C4\u03C2\x03\x02\x02\x02\u03C5\u03C6\x074\x02" +
		"\x02\u03C6i\x03\x02\x02\x02\u03C7\u03C8\x07\x1A\x02\x02\u03C8\u03CC\x05" +
		"h5\x02\u03C9\u03CB\x05l7\x02\u03CA\u03C9\x03\x02\x02\x02\u03CB\u03CE\x03" +
		"\x02\x02\x02\u03CC\u03CA\x03\x02\x02\x02\u03CC\u03CD\x03\x02\x02\x02\u03CD" +
		"\u03D0\x03\x02\x02\x02\u03CE\u03CC\x03\x02\x02\x02\u03CF\u03D1\x05v<\x02" +
		"\u03D0\u03CF\x03\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1k\x03\x02" +
		"\x02\x02\u03D2\u03D3\x07\x1B\x02\x02\u03D3\u03D4\x05<\x1F\x02\u03D4\u03D5" +
		"\x05h5\x02\u03D5\u03DE\x03\x02\x02\x02\u03D6\u03D7\x07\x1B\x02\x02\u03D7" +
		"\u03D8\x05z>\x02\u03D8\u03D9\x07;\x02\x02\u03D9\u03DA\x05<\x1F\x02\u03DA" +
		"\u03DB\x03\x02\x02\x02\u03DB\u03DC\x05h5\x02\u03DC\u03DE\x03\x02\x02\x02" +
		"\u03DD\u03D2\x03\x02\x02\x02\u03DD\u03D6\x03\x02\x02\x02\u03DEm\x03\x02" +
		"\x02\x02\u03DF\u03E0\x05z>\x02\u03E0\u03E1\x07E\x02\x02\u03E1\u03E3\x03" +
		"\x02\x02\x02\u03E2\u03DF\x03\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3" +
		"\u03E4\x03\x02\x02\x02\u03E4\u03E5\x05b2\x02\u03E5o\x03\x02\x02\x02\u03E6" +
		"\u03E9\x05z>\x02\u03E7\u03E8\x07;\x02\x02\u03E8\u03EA\x05b2\x02\u03E9" +
		"\u03E7\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02\x02\u03EAq\x03\x02\x02" +
		"\x02\u03EB\u03F1\x07X\x02\x02\u03EC\u03F1\x07Y\x02\x02\u03ED\u03F1\x07" +
		"Z\x02\x02\u03EE\u03F1\x07[\x02\x02\u03EF\u03F1\x07\x1E\x02\x02\u03F0\u03EB" +
		"\x03\x02\x02\x02\u03F0\u03EC\x03\x02\x02\x02\u03F0\u03ED\x03\x02\x02\x02" +
		"\u03F0\u03EE\x03\x02\x02\x02\u03F0\u03EF\x03\x02\x02\x02\u03F1s\x03\x02" +
		"\x02\x02\u03F2\u03F3\x07\x18\x02\x02\u03F3\u03F4\x05b2\x02\u03F4\u03F6" +
		"\x05h5\x02\u03F5\u03F7\x05v<\x02\u03F6\u03F5\x03\x02\x02\x02\u03F6\u03F7" +
		"\x03\x02\x02\x02\u03F7u\x03\x02\x02\x02\u03F8\u03F9\x07\x1C\x02\x02\u03F9" +
		"\u03FD\x05h5\x02\u03FA\u03FB\x07\x1C\x02\x02\u03FB\u03FD\x05R*\x02\u03FC" +
		"\u03F8\x03\x02\x02\x02\u03FC\u03FA\x03\x02\x02\x02\u03FDw\x03\x02\x02" +
		"\x02\u03FE\u03FF\x07\x14\x02\x02\u03FF\u0400\x05\\/\x02\u0400\u0401\x07" +
		"\x15\x02\x02\u0401\u0402\x05b2\x02\u0402\u0403\x05h5\x02\u0403y\x03\x02" +
		"\x02\x02\u0404\u0407\x07W\x02\x02\u0405\u0407\x05|?\x02\u0406\u0404\x03" +
		"\x02\x02\x02\u0406\u0405\x03\x02\x02\x02\u0407{\x03\x02\x02\x02\u0408" +
		"\u0409\t\t\x02\x02\u0409}\x03\x02\x02\x02\x85\x80\x82\x8B\x90\x97\x9B" +
		"\xA2\xA9\xB1\xC1\xC9\xDB\xE0\xE5\xEB\xED\xF4\xFD\u0100\u0111\u0115\u0117" +
		"\u0125\u0129\u012B\u0134\u013E\u0147\u014F\u0151\u0156\u0165\u016E\u017A" +
		"\u0184\u0189\u0195\u0199\u01A0\u01A6\u01AE\u01B2\u01C2\u01C5\u01C9\u01D0" +
		"\u01D3\u01D5\u01D9\u01DD\u01EB\u01F3\u01FC\u0200\u0208\u020B\u0210\u0218" +
		"\u021C\u0220\u022A\u022F\u0235\u023A\u023D\u0245\u0249\u024B\u0255\u025C" +
		"\u0263\u026A\u0271\u0278\u027F\u0283\u0288\u028D\u0291\u0299\u029D\u02A1" +
		"\u02A5\u02AA\u02AE\u02B5\u02BD\u02C5\u02C9\u02CE\u02D4\u02DE\u02E6\u02F1" +
		"\u02F6\u0308\u030D\u031A\u0322\u0325\u0338\u033B\u033F\u0347\u034B\u034D" +
		"\u0353\u0357\u0365\u036F\u0377\u037A\u038E\u039F\u03A1\u03AA\u03AD\u03B2" +
		"\u03B7\u03BB\u03C0\u03C2\u03CC\u03D0\u03DD\u03E2\u03E9\u03F0\u03F6\u03FC" +
		"\u0406";
	public static readonly _serializedATN: string = Utils.join(
		[
			CWScriptParser._serializedATNSegment0,
			CWScriptParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CWScriptParser.__ATN) {
			CWScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CWScriptParser._serializedATN));
		}

		return CWScriptParser.__ATN;
	}

}

export class SourceFileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CWScriptParser.EOF, 0); }
	public topLevelStmt(): TopLevelStmtContext[];
	public topLevelStmt(i: number): TopLevelStmtContext;
	public topLevelStmt(i?: number): TopLevelStmtContext | TopLevelStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopLevelStmtContext);
		} else {
			return this.getRuleContext(i, TopLevelStmtContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.SEMI);
		} else {
			return this.getToken(CWScriptParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_sourceFile; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterSourceFile) {
			listener.enterSourceFile(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitSourceFile) {
			listener.exitSourceFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitSourceFile) {
			return visitor.visitSourceFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopLevelStmtContext extends ParserRuleContext {
	public importStmt(): ImportStmtContext | undefined {
		return this.tryGetRuleContext(0, ImportStmtContext);
	}
	public contractDefn(): ContractDefnContext | undefined {
		return this.tryGetRuleContext(0, ContractDefnContext);
	}
	public interfaceDefn(): InterfaceDefnContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDefnContext);
	}
	public stmt(): StmtContext | undefined {
		return this.tryGetRuleContext(0, StmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_topLevelStmt; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTopLevelStmt) {
			listener.enterTopLevelStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTopLevelStmt) {
			listener.exitTopLevelStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTopLevelStmt) {
			return visitor.visitTopLevelStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractDefnContext extends ParserRuleContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public _name!: IdentContext;
	public _base!: TypePathContext;
	public _typePath!: TypePathContext;
	public _interfaces: TypePathContext[] = [];
	public _body!: ContractBlockContext;
	public CONTRACT(): TerminalNode { return this.getToken(CWScriptParser.CONTRACT, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPLEMENTS, 0); }
	public contractBlock(): ContractBlockContext | undefined {
		return this.tryGetRuleContext(0, ContractBlockContext);
	}
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	public typePath(): TypePathContext[];
	public typePath(i: number): TypePathContext;
	public typePath(i?: number): TypePathContext | TypePathContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypePathContext);
		} else {
			return this.getRuleContext(i, TypePathContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_contractDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterContractDefn) {
			listener.enterContractDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitContractDefn) {
			listener.exitContractDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitContractDefn) {
			return visitor.visitContractDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDefnContext extends ParserRuleContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public _name!: IdentContext;
	public _base!: TypePathContext;
	public _body!: ContractBlockContext;
	public INTERFACE(): TerminalNode { return this.getToken(CWScriptParser.INTERFACE, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public contractBlock(): ContractBlockContext | undefined {
		return this.tryGetRuleContext(0, ContractBlockContext);
	}
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	public typePath(): TypePathContext | undefined {
		return this.tryGetRuleContext(0, TypePathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_interfaceDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInterfaceDefn) {
			listener.enterInterfaceDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInterfaceDefn) {
			listener.exitInterfaceDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDefn) {
			return visitor.visitInterfaceDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractBlockContext extends ParserRuleContext {
	public _contractItem!: ContractItemContext;
	public _body: ContractItemContext[] = [];
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public contractItem(): ContractItemContext[];
	public contractItem(i: number): ContractItemContext;
	public contractItem(i?: number): ContractItemContext | ContractItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractItemContext);
		} else {
			return this.getRuleContext(i, ContractItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_contractBlock; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterContractBlock) {
			listener.enterContractBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitContractBlock) {
			listener.exitContractBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitContractBlock) {
			return visitor.visitContractBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_importStmt; }
	public copyFrom(ctx: ImportStmtContext): void {
		super.copyFrom(ctx);
	}
}
export class ImportAllStmtContext extends ImportStmtContext {
	public _src!: Token;
	public IMPORT(): TerminalNode { return this.getToken(CWScriptParser.IMPORT, 0); }
	public MUL(): TerminalNode { return this.getToken(CWScriptParser.MUL, 0); }
	public FROM(): TerminalNode { return this.getToken(CWScriptParser.FROM, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.StringLiteral, 0); }
	constructor(ctx: ImportStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterImportAllStmt) {
			listener.enterImportAllStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitImportAllStmt) {
			listener.exitImportAllStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitImportAllStmt) {
			return visitor.visitImportAllStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImportItemsStmtContext extends ImportStmtContext {
	public _ident!: IdentContext;
	public _items: IdentContext[] = [];
	public _src!: Token;
	public IMPORT(): TerminalNode { return this.getToken(CWScriptParser.IMPORT, 0); }
	public FROM(): TerminalNode { return this.getToken(CWScriptParser.FROM, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.StringLiteral, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: ImportStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterImportItemsStmt) {
			listener.enterImportItemsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitImportItemsStmt) {
			listener.exitImportItemsStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitImportItemsStmt) {
			return visitor.visitImportItemsStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractItemContext extends ParserRuleContext {
	public typeDefn(): TypeDefnContext | undefined {
		return this.tryGetRuleContext(0, TypeDefnContext);
	}
	public constStmt_(): ConstStmt_Context | undefined {
		return this.tryGetRuleContext(0, ConstStmt_Context);
	}
	public fnDefn(): FnDefnContext | undefined {
		return this.tryGetRuleContext(0, FnDefnContext);
	}
	public errorDefn(): ErrorDefnContext | undefined {
		return this.tryGetRuleContext(0, ErrorDefnContext);
	}
	public errorDefnBlock(): ErrorDefnBlockContext | undefined {
		return this.tryGetRuleContext(0, ErrorDefnBlockContext);
	}
	public eventDefn(): EventDefnContext | undefined {
		return this.tryGetRuleContext(0, EventDefnContext);
	}
	public eventDefnBlock(): EventDefnBlockContext | undefined {
		return this.tryGetRuleContext(0, EventDefnBlockContext);
	}
	public stateDefnBlock(): StateDefnBlockContext | undefined {
		return this.tryGetRuleContext(0, StateDefnBlockContext);
	}
	public instantiateDefn(): InstantiateDefnContext | undefined {
		return this.tryGetRuleContext(0, InstantiateDefnContext);
	}
	public instantiateDecl(): InstantiateDeclContext | undefined {
		return this.tryGetRuleContext(0, InstantiateDeclContext);
	}
	public execDefn(): ExecDefnContext | undefined {
		return this.tryGetRuleContext(0, ExecDefnContext);
	}
	public execDecl(): ExecDeclContext | undefined {
		return this.tryGetRuleContext(0, ExecDeclContext);
	}
	public queryDefn(): QueryDefnContext | undefined {
		return this.tryGetRuleContext(0, QueryDefnContext);
	}
	public queryDecl(): QueryDeclContext | undefined {
		return this.tryGetRuleContext(0, QueryDeclContext);
	}
	public replyDefn(): ReplyDefnContext | undefined {
		return this.tryGetRuleContext(0, ReplyDefnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_contractItem; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterContractItem) {
			listener.enterContractItem(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitContractItem) {
			listener.exitContractItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitContractItem) {
			return visitor.visitContractItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public _name!: IdentContext;
	public _optional!: Token;
	public _ty!: TypeExprContext;
	public _default!: ExprContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	public QUEST(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUEST, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_param; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterParam) {
			listener.enterParam(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitParam) {
			listener.exitParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitParam) {
			return visitor.visitParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamListContext extends ParserRuleContext {
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_paramList; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterParamList) {
			listener.enterParamList(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitParamList) {
			listener.exitParamList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitParamList) {
			return visitor.visitParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnParamsContext extends ParserRuleContext {
	public _param!: ParamContext;
	public _params: ParamContext[] = [];
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnParams; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFnParams) {
			listener.enterFnParams(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFnParams) {
			listener.exitFnParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFnParams) {
			return visitor.visitFnParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDefn_fnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _params!: FnParamsContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public fnParams(): FnParamsContext | undefined {
		return this.tryGetRuleContext(0, FnParamsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_structDefn_fn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructDefn_fn) {
			listener.enterStructDefn_fn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructDefn_fn) {
			listener.exitStructDefn_fn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructDefn_fn) {
			return visitor.visitStructDefn_fn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorDefnContext extends ParserRuleContext {
	public _defn!: StructDefn_fnContext;
	public ERROR(): TerminalNode { return this.getToken(CWScriptParser.ERROR, 0); }
	public structDefn_fn(): StructDefn_fnContext {
		return this.getRuleContext(0, StructDefn_fnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_errorDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterErrorDefn) {
			listener.enterErrorDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitErrorDefn) {
			listener.exitErrorDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitErrorDefn) {
			return visitor.visitErrorDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorDefnBlockContext extends ParserRuleContext {
	public _structDefn_fn!: StructDefn_fnContext;
	public _defns: StructDefn_fnContext[] = [];
	public ERROR(): TerminalNode { return this.getToken(CWScriptParser.ERROR, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public structDefn_fn(): StructDefn_fnContext[];
	public structDefn_fn(i: number): StructDefn_fnContext;
	public structDefn_fn(i?: number): StructDefn_fnContext | StructDefn_fnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructDefn_fnContext);
		} else {
			return this.getRuleContext(i, StructDefn_fnContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_errorDefnBlock; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterErrorDefnBlock) {
			listener.enterErrorDefnBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitErrorDefnBlock) {
			listener.exitErrorDefnBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitErrorDefnBlock) {
			return visitor.visitErrorDefnBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventDefnContext extends ParserRuleContext {
	public EVENT(): TerminalNode { return this.getToken(CWScriptParser.EVENT, 0); }
	public structDefn_fn(): StructDefn_fnContext {
		return this.getRuleContext(0, StructDefn_fnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_eventDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEventDefn) {
			listener.enterEventDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEventDefn) {
			listener.exitEventDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEventDefn) {
			return visitor.visitEventDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventDefnBlockContext extends ParserRuleContext {
	public _structDefn_fn!: StructDefn_fnContext;
	public _defns: StructDefn_fnContext[] = [];
	public EVENT(): TerminalNode { return this.getToken(CWScriptParser.EVENT, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public structDefn_fn(): StructDefn_fnContext[];
	public structDefn_fn(i: number): StructDefn_fnContext;
	public structDefn_fn(i?: number): StructDefn_fnContext | StructDefn_fnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructDefn_fnContext);
		} else {
			return this.getRuleContext(i, StructDefn_fnContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_eventDefnBlock; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEventDefnBlock) {
			listener.enterEventDefnBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEventDefnBlock) {
			listener.exitEventDefnBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEventDefnBlock) {
			return visitor.visitEventDefnBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateDefnBlockContext extends ParserRuleContext {
	public _stateDefn!: StateDefnContext;
	public _defns: StateDefnContext[] = [];
	public STATE(): TerminalNode { return this.getToken(CWScriptParser.STATE, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public stateDefn(): StateDefnContext[];
	public stateDefn(i: number): StateDefnContext;
	public stateDefn(i?: number): StateDefnContext | StateDefnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StateDefnContext);
		} else {
			return this.getRuleContext(i, StateDefnContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stateDefnBlock; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateDefnBlock) {
			listener.enterStateDefnBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateDefnBlock) {
			listener.exitStateDefnBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateDefnBlock) {
			return visitor.visitStateDefnBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateDefnContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stateDefn; }
	public copyFrom(ctx: StateDefnContext): void {
		super.copyFrom(ctx);
	}
}
export class StateDefn_ItemContext extends StateDefnContext {
	public _name!: IdentContext;
	public _ty!: TypeExprContext;
	public _default!: ExprContext;
	public COLON(): TerminalNode { return this.getToken(CWScriptParser.COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: StateDefnContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateDefn_Item) {
			listener.enterStateDefn_Item(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateDefn_Item) {
			listener.exitStateDefn_Item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateDefn_Item) {
			return visitor.visitStateDefn_Item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StateDefn_MapContext extends StateDefnContext {
	public _name!: IdentContext;
	public _mapKeyDefn!: MapKeyDefnContext;
	public _mapKeys: MapKeyDefnContext[] = [];
	public _ty!: TypeExprContext;
	public _default!: ExprContext;
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public COLON(): TerminalNode { return this.getToken(CWScriptParser.COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public mapKeyDefn(): MapKeyDefnContext[];
	public mapKeyDefn(i: number): MapKeyDefnContext;
	public mapKeyDefn(i?: number): MapKeyDefnContext | MapKeyDefnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapKeyDefnContext);
		} else {
			return this.getRuleContext(i, MapKeyDefnContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: StateDefnContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStateDefn_Map) {
			listener.enterStateDefn_Map(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStateDefn_Map) {
			listener.exitStateDefn_Map(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStateDefn_Map) {
			return visitor.visitStateDefn_Map(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapKeyDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _ty!: TypeExprContext;
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_mapKeyDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMapKeyDefn) {
			listener.enterMapKeyDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMapKeyDefn) {
			listener.exitMapKeyDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMapKeyDefn) {
			return visitor.visitMapKeyDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstantiateDefnContext extends ParserRuleContext {
	public _params!: FnParamsContext;
	public _body!: BlockContext;
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public INSTANTIATE(): TerminalNode { return this.getToken(CWScriptParser.INSTANTIATE, 0); }
	public fnParams(): FnParamsContext {
		return this.getRuleContext(0, FnParamsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_instantiateDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInstantiateDefn) {
			listener.enterInstantiateDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInstantiateDefn) {
			listener.exitInstantiateDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInstantiateDefn) {
			return visitor.visitInstantiateDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstantiateDeclContext extends ParserRuleContext {
	public _params!: FnParamsContext;
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public INSTANTIATE(): TerminalNode { return this.getToken(CWScriptParser.INSTANTIATE, 0); }
	public fnParams(): FnParamsContext {
		return this.getRuleContext(0, FnParamsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_instantiateDecl; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInstantiateDecl) {
			listener.enterInstantiateDecl(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInstantiateDecl) {
			listener.exitInstantiateDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInstantiateDecl) {
			return visitor.visitInstantiateDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecDefnContext extends ParserRuleContext {
	public _tup!: Token;
	public _name!: IdentContext;
	public _params!: FnParamsContext;
	public _body!: BlockContext;
	public EXEC(): TerminalNode { return this.getToken(CWScriptParser.EXEC, 0); }
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public fnParams(): FnParamsContext {
		return this.getRuleContext(0, FnParamsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_execDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecDefn) {
			listener.enterExecDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecDefn) {
			listener.exitExecDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecDefn) {
			return visitor.visitExecDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecDeclContext extends ParserRuleContext {
	public _tup!: Token;
	public _name!: IdentContext;
	public _params!: FnParamsContext;
	public EXEC(): TerminalNode { return this.getToken(CWScriptParser.EXEC, 0); }
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public fnParams(): FnParamsContext {
		return this.getRuleContext(0, FnParamsContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_execDecl; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecDecl) {
			listener.enterExecDecl(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecDecl) {
			listener.exitExecDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecDecl) {
			return visitor.visitExecDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _params!: FnParamsContext;
	public _retTy!: TypeExprContext;
	public _body!: BlockContext;
	public QUERY(): TerminalNode { return this.getToken(CWScriptParser.QUERY, 0); }
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public fnParams(): FnParamsContext {
		return this.getRuleContext(0, FnParamsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_queryDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterQueryDefn) {
			listener.enterQueryDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitQueryDefn) {
			listener.exitQueryDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitQueryDefn) {
			return visitor.visitQueryDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryDeclContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _params!: FnParamsContext;
	public _retTy!: TypeExprContext;
	public QUERY(): TerminalNode { return this.getToken(CWScriptParser.QUERY, 0); }
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public fnParams(): FnParamsContext {
		return this.getRuleContext(0, FnParamsContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_queryDecl; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterQueryDecl) {
			listener.enterQueryDecl(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitQueryDecl) {
			listener.exitQueryDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitQueryDecl) {
			return visitor.visitQueryDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReplyDefnContext extends ParserRuleContext {
	public _on!: IdentContext;
	public _name!: IdentContext;
	public _params!: FnParamsContext;
	public _body!: BlockContext;
	public REPLY(): TerminalNode { return this.getToken(CWScriptParser.REPLY, 0); }
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public fnParams(): FnParamsContext {
		return this.getRuleContext(0, FnParamsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_replyDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterReplyDefn) {
			listener.enterReplyDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitReplyDefn) {
			listener.exitReplyDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitReplyDefn) {
			return visitor.visitReplyDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _variant_!: Variant_Context;
	public _variants: Variant_Context[] = [];
	public ENUM(): TerminalNode { return this.getToken(CWScriptParser.ENUM, 0); }
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public variant_(): Variant_Context[];
	public variant_(i: number): Variant_Context;
	public variant_(i?: number): Variant_Context | Variant_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Variant_Context);
		} else {
			return this.getRuleContext(i, Variant_Context);
		}
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_enumDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEnumDefn) {
			listener.enterEnumDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEnumDefn) {
			listener.exitEnumDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEnumDefn) {
			return visitor.visitEnumDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variant_Context extends ParserRuleContext {
	public variant_struct(): Variant_structContext | undefined {
		return this.tryGetRuleContext(0, Variant_structContext);
	}
	public variant_unit(): Variant_unitContext | undefined {
		return this.tryGetRuleContext(0, Variant_unitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_variant_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterVariant_) {
			listener.enterVariant_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitVariant_) {
			listener.exitVariant_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitVariant_) {
			return visitor.visitVariant_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variant_structContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _members!: ParamListContext;
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RPAREN, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_variant_struct; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterVariant_struct) {
			listener.enterVariant_struct(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitVariant_struct) {
			listener.exitVariant_struct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitVariant_struct) {
			return visitor.visitVariant_struct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variant_unitContext extends ParserRuleContext {
	public _name!: IdentContext;
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_variant_unit; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterVariant_unit) {
			listener.enterVariant_unit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitVariant_unit) {
			listener.exitVariant_unit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitVariant_unit) {
			return visitor.visitVariant_unit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeExpr; }
	public copyFrom(ctx: TypeExprContext): void {
		super.copyFrom(ctx);
	}
}
export class PathTContext extends TypeExprContext {
	public typePath(): TypePathContext {
		return this.getRuleContext(0, TypePathContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterPathT) {
			listener.enterPathT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitPathT) {
			listener.exitPathT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitPathT) {
			return visitor.visitPathT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VariantTContext extends TypeExprContext {
	public typeVariant(): TypeVariantContext {
		return this.getRuleContext(0, TypeVariantContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterVariantT) {
			listener.enterVariantT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitVariantT) {
			listener.exitVariantT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitVariantT) {
			return visitor.visitVariantT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LensTContext extends TypeExprContext {
	public typeLens(): TypeLensContext {
		return this.getRuleContext(0, TypeLensContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterLensT) {
			listener.enterLensT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitLensT) {
			listener.exitLensT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitLensT) {
			return visitor.visitLensT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FnTContext extends TypeExprContext {
	public fnType(): FnTypeContext {
		return this.getRuleContext(0, FnTypeContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFnT) {
			listener.enterFnT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFnT) {
			listener.exitFnT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFnT) {
			return visitor.visitFnT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OptionTContext extends TypeExprContext {
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public QUEST(): TerminalNode { return this.getToken(CWScriptParser.QUEST, 0); }
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterOptionT) {
			listener.enterOptionT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitOptionT) {
			listener.exitOptionT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitOptionT) {
			return visitor.visitOptionT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListTContext extends TypeExprContext {
	public _len!: Token;
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public IntLiteral(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IntLiteral, 0); }
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterListT) {
			listener.enterListT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitListT) {
			listener.exitListT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitListT) {
			return visitor.visitListT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleTContext extends TypeExprContext {
	public _typeExpr!: TypeExprContext;
	public _items: TypeExprContext[] = [];
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public typeExpr(): TypeExprContext[];
	public typeExpr(i: number): TypeExprContext;
	public typeExpr(i?: number): TypeExprContext | TypeExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeExprContext);
		} else {
			return this.getRuleContext(i, TypeExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleT) {
			listener.enterTupleT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleT) {
			listener.exitTupleT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleT) {
			return visitor.visitTupleT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DefnTContext extends TypeExprContext {
	public typeDefn(): TypeDefnContext {
		return this.getRuleContext(0, TypeDefnContext);
	}
	constructor(ctx: TypeExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDefnT) {
			listener.enterDefnT(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDefnT) {
			listener.exitDefnT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDefnT) {
			return visitor.visitDefnT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnTypeContext extends ParserRuleContext {
	public _fallible!: Token;
	public _params!: ParamListContext;
	public _retTy!: TypeExprContext;
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public ARROW(): TerminalNode { return this.getToken(CWScriptParser.ARROW, 0); }
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnType; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFnType) {
			listener.enterFnType(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFnType) {
			listener.exitFnType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFnType) {
			return visitor.visitFnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeLensContext extends ParserRuleContext {
	public _scope!: Token;
	public typePath(): TypePathContext {
		return this.getRuleContext(0, TypePathContext);
	}
	public INSTANTIATE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.INSTANTIATE, 0); }
	public EXEC(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXEC, 0); }
	public QUERY(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUERY, 0); }
	public MUT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeLens; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeLens) {
			listener.enterTypeLens(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeLens) {
			listener.exitTypeLens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeLens) {
			return visitor.visitTypeLens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypePathContext extends ParserRuleContext {
	public _ident!: IdentContext;
	public _segments: IdentContext[] = [];
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.DOT);
		} else {
			return this.getToken(CWScriptParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typePath; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypePath) {
			listener.enterTypePath(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypePath) {
			listener.exitTypePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypePath) {
			return visitor.visitTypePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeVariantContext extends ParserRuleContext {
	public _variant!: IdentContext;
	public typePath(): TypePathContext {
		return this.getRuleContext(0, TypePathContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DOT, 0); }
	public HASH(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.HASH, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LPAREN, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RPAREN, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeVariant; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeVariant) {
			listener.enterTypeVariant(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeVariant) {
			listener.exitTypeVariant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeVariant) {
			return visitor.visitTypeVariant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefnContext extends ParserRuleContext {
	public structDefn(): StructDefnContext | undefined {
		return this.tryGetRuleContext(0, StructDefnContext);
	}
	public enumDefn(): EnumDefnContext | undefined {
		return this.tryGetRuleContext(0, EnumDefnContext);
	}
	public typeAliasDefn(): TypeAliasDefnContext | undefined {
		return this.tryGetRuleContext(0, TypeAliasDefnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeDefn) {
			listener.enterTypeDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeDefn) {
			listener.exitTypeDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeDefn) {
			return visitor.visitTypeDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _param!: ParamContext;
	public _members: ParamContext[] = [];
	public STRUCT(): TerminalNode { return this.getToken(CWScriptParser.STRUCT, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RPAREN, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_structDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructDefn) {
			listener.enterStructDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructDefn) {
			listener.exitStructDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructDefn) {
			return visitor.visitStructDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAliasDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _value!: TypeExprContext;
	public TYPE(): TerminalNode { return this.getToken(CWScriptParser.TYPE, 0); }
	public EQ(): TerminalNode { return this.getToken(CWScriptParser.EQ, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_typeAliasDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeAliasDefn) {
			listener.enterTypeAliasDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeAliasDefn) {
			listener.exitTypeAliasDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeAliasDefn) {
			return visitor.visitTypeAliasDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnDefnContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _fallible!: Token;
	public _params!: FnParamsContext;
	public _retTy!: TypeExprContext;
	public _body!: BlockContext;
	public FN(): TerminalNode { return this.getToken(CWScriptParser.FN, 0); }
	public fnParams(): FnParamsContext {
		return this.getRuleContext(0, FnParamsContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_fnDefn; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFnDefn) {
			listener.enterFnDefn(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFnDefn) {
			listener.exitFnDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFnDefn) {
			return visitor.visitFnDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotContext extends ParserRuleContext {
	public _isTag!: Token;
	public _path!: TypePathContext;
	public _arg!: ArgContext;
	public _args: ArgContext[] = [];
	public AT(): TerminalNode[];
	public AT(i: number): TerminalNode;
	public AT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.AT);
		} else {
			return this.getToken(CWScriptParser.AT, i);
		}
	}
	public typePath(): TypePathContext | undefined {
		return this.tryGetRuleContext(0, TypePathContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RPAREN, 0); }
	public arg(): ArgContext | undefined {
		return this.tryGetRuleContext(0, ArgContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_annot; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAnnot) {
			listener.enterAnnot(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAnnot) {
			listener.exitAnnot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAnnot) {
			return visitor.visitAnnot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallOptionsContext extends ParserRuleContext {
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.RBRACE, 0); }
	public memberVal(): MemberValContext[];
	public memberVal(i: number): MemberValContext;
	public memberVal(i?: number): MemberValContext | MemberValContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberValContext);
		} else {
			return this.getRuleContext(i, MemberValContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_callOptions; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterCallOptions) {
			listener.enterCallOptions(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitCallOptions) {
			listener.exitCallOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitCallOptions) {
			return visitor.visitCallOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_stmt; }
	public copyFrom(ctx: StmtContext): void {
		super.copyFrom(ctx);
	}
}
export class AnnotBlockStmtContext extends StmtContext {
	public annot(): AnnotContext {
		return this.getRuleContext(0, AnnotContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAnnotBlockStmt) {
			listener.enterAnnotBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAnnotBlockStmt) {
			listener.exitAnnotBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAnnotBlockStmt) {
			return visitor.visitAnnotBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DebugStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public debugStmt_(): DebugStmt_Context {
		return this.getRuleContext(0, DebugStmt_Context);
	}
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDebugStmt) {
			listener.enterDebugStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDebugStmt) {
			listener.exitDebugStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDebugStmt) {
			return visitor.visitDebugStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LetStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public letStmt_(): LetStmt_Context {
		return this.getRuleContext(0, LetStmt_Context);
	}
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterLetStmt) {
			listener.enterLetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitLetStmt) {
			listener.exitLetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitLetStmt) {
			return visitor.visitLetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public constStmt_(): ConstStmt_Context {
		return this.getRuleContext(0, ConstStmt_Context);
	}
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterConstStmt) {
			listener.enterConstStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitConstStmt) {
			listener.exitConstStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitConstStmt) {
			return visitor.visitConstStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public assignStmt_(): AssignStmt_Context {
		return this.getRuleContext(0, AssignStmt_Context);
	}
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAssignStmt) {
			listener.enterAssignStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAssignStmt) {
			listener.exitAssignStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignStmt) {
			return visitor.visitAssignStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public ifStmt_(): IfStmt_Context {
		return this.getRuleContext(0, IfStmt_Context);
	}
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public forStmt_(): ForStmt_Context {
		return this.getRuleContext(0, ForStmt_Context);
	}
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterForStmt) {
			listener.enterForStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitForStmt) {
			listener.exitForStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitForStmt) {
			return visitor.visitForStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public _defer!: Token;
	public _options!: CallOptionsContext;
	public EXEC_NOW(): TerminalNode { return this.getToken(CWScriptParser.EXEC_NOW, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	public DEFER(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DEFER, 0); }
	public callOptions(): CallOptionsContext | undefined {
		return this.tryGetRuleContext(0, CallOptionsContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExecStmt) {
			listener.enterExecStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExecStmt) {
			listener.exitExecStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExecStmt) {
			return visitor.visitExecStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DelegateExecStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public _defer!: Token;
	public DELEGATE_EXEC(): TerminalNode { return this.getToken(CWScriptParser.DELEGATE_EXEC, 0); }
	public HASH(): TerminalNode { return this.getToken(CWScriptParser.HASH, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	public DEFER(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DEFER, 0); }
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDelegateExecStmt) {
			listener.enterDelegateExecStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDelegateExecStmt) {
			listener.exitDelegateExecStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDelegateExecStmt) {
			return visitor.visitDelegateExecStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InstantiateStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public _defer!: Token;
	public _new!: Token;
	public _options!: CallOptionsContext;
	public INSTANTIATE_NOW(): TerminalNode { return this.getToken(CWScriptParser.INSTANTIATE_NOW, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	public DEFER(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DEFER, 0); }
	public HASH(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.HASH, 0); }
	public callOptions(): CallOptionsContext | undefined {
		return this.tryGetRuleContext(0, CallOptionsContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInstantiateStmt) {
			listener.enterInstantiateStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInstantiateStmt) {
			listener.exitInstantiateStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInstantiateStmt) {
			return visitor.visitInstantiateStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmitStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public _defer!: Token;
	public EMIT(): TerminalNode { return this.getToken(CWScriptParser.EMIT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	public DEFER(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DEFER, 0); }
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEmitStmt) {
			listener.enterEmitStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEmitStmt) {
			listener.exitEmitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEmitStmt) {
			return visitor.visitEmitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public RETURN(): TerminalNode { return this.getToken(CWScriptParser.RETURN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FailStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public FAIL(): TerminalNode { return this.getToken(CWScriptParser.FAIL, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFailStmt) {
			listener.enterFailStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFailStmt) {
			listener.exitFailStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFailStmt) {
			return visitor.visitFailStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprStmtContext extends StmtContext {
	public _annot!: AnnotContext;
	public _ann: AnnotContext[] = [];
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public annot(): AnnotContext[];
	public annot(i: number): AnnotContext;
	public annot(i?: number): AnnotContext | AnnotContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotContext);
		} else {
			return this.getRuleContext(i, AnnotContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterExprStmt) {
			listener.enterExprStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitExprStmt) {
			listener.exitExprStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitExprStmt) {
			return visitor.visitExprStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DebugStmt_Context extends ParserRuleContext {
	public DEBUG(): TerminalNode { return this.getToken(CWScriptParser.DEBUG, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public stmt(): StmtContext | undefined {
		return this.tryGetRuleContext(0, StmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_debugStmt_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDebugStmt_) {
			listener.enterDebugStmt_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDebugStmt_) {
			listener.exitDebugStmt_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDebugStmt_) {
			return visitor.visitDebugStmt_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetStmt_Context extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(CWScriptParser.LET, 0); }
	public let_binding(): Let_bindingContext {
		return this.getRuleContext(0, Let_bindingContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_letStmt_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterLetStmt_) {
			listener.enterLetStmt_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitLetStmt_) {
			listener.exitLetStmt_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitLetStmt_) {
			return visitor.visitLetStmt_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstStmt_Context extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(CWScriptParser.CONST, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public EQ(): TerminalNode { return this.getToken(CWScriptParser.EQ, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_constStmt_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterConstStmt_) {
			listener.enterConstStmt_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitConstStmt_) {
			listener.exitConstStmt_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitConstStmt_) {
			return visitor.visitConstStmt_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentBinding_Context extends ParserRuleContext {
	public _name!: IdentContext;
	public _ty!: TypeExprContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_identBinding_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdentBinding_) {
			listener.enterIdentBinding_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdentBinding_) {
			listener.exitIdentBinding_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentBinding_) {
			return visitor.visitIdentBinding_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Let_bindingContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_let_binding; }
	public copyFrom(ctx: Let_bindingContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentBindingContext extends Let_bindingContext {
	public identBinding_(): IdentBinding_Context {
		return this.getRuleContext(0, IdentBinding_Context);
	}
	constructor(ctx: Let_bindingContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdentBinding) {
			listener.enterIdentBinding(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdentBinding) {
			listener.exitIdentBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentBinding) {
			return visitor.visitIdentBinding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructBindingContext extends Let_bindingContext {
	public _identBinding_!: IdentBinding_Context;
	public _bindings: IdentBinding_Context[] = [];
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public identBinding_(): IdentBinding_Context | undefined {
		return this.tryGetRuleContext(0, IdentBinding_Context);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: Let_bindingContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructBinding) {
			listener.enterStructBinding(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructBinding) {
			listener.exitStructBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructBinding) {
			return visitor.visitStructBinding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleBindingContext extends Let_bindingContext {
	public _identBinding_!: IdentBinding_Context;
	public _bindings: IdentBinding_Context[] = [];
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public identBinding_(): IdentBinding_Context[];
	public identBinding_(i: number): IdentBinding_Context;
	public identBinding_(i?: number): IdentBinding_Context | IdentBinding_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentBinding_Context);
		} else {
			return this.getRuleContext(i, IdentBinding_Context);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: Let_bindingContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleBinding) {
			listener.enterTupleBinding(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleBinding) {
			listener.exitTupleBinding(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleBinding) {
			return visitor.visitTupleBinding(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignStmt_Context extends ParserRuleContext {
	public _lhs!: AssignLHSContext;
	public _assignOp!: Token;
	public _rhs!: ExprContext;
	public assignLHS(): AssignLHSContext | undefined {
		return this.tryGetRuleContext(0, AssignLHSContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public PLUS_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PLUS_EQ, 0); }
	public MINUS_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MINUS_EQ, 0); }
	public MUL_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL_EQ, 0); }
	public DIV_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DIV_EQ, 0); }
	public MOD_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MOD_EQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_assignStmt_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAssignStmt_) {
			listener.enterAssignStmt_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAssignStmt_) {
			listener.exitAssignStmt_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignStmt_) {
			return visitor.visitAssignStmt_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignLHSContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_assignLHS; }
	public copyFrom(ctx: AssignLHSContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentLHSContext extends AssignLHSContext {
	public _symbol!: IdentContext;
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(ctx: AssignLHSContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdentLHS) {
			listener.enterIdentLHS(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdentLHS) {
			listener.exitIdentLHS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentLHS) {
			return visitor.visitIdentLHS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DotLHSContext extends AssignLHSContext {
	public _obj!: ExprContext;
	public _member!: IdentContext;
	public DOT(): TerminalNode { return this.getToken(CWScriptParser.DOT, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(ctx: AssignLHSContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDotLHS) {
			listener.enterDotLHS(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDotLHS) {
			listener.exitDotLHS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDotLHS) {
			return visitor.visitDotLHS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexLHSContext extends AssignLHSContext {
	public _obj!: ExprContext;
	public _expr!: ExprContext;
	public _args: ExprContext[] = [];
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: AssignLHSContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIndexLHS) {
			listener.enterIndexLHS(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIndexLHS) {
			listener.exitIndexLHS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIndexLHS) {
			return visitor.visitIndexLHS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class GroupedExprContext extends ExprContext {
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterGroupedExpr) {
			listener.enterGroupedExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitGroupedExpr) {
			listener.exitGroupedExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitGroupedExpr) {
			return visitor.visitGroupedExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DotExprContext extends ExprContext {
	public _unwrap!: Token;
	public _member!: IdentContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public DOT(): TerminalNode { return this.getToken(CWScriptParser.DOT, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public QUEST(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUEST, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDotExpr) {
			listener.enterDotExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDotExpr) {
			listener.exitDotExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDotExpr) {
			return visitor.visitDotExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AsExprContext extends ExprContext {
	public _ty!: TypeExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public AS(): TerminalNode { return this.getToken(CWScriptParser.AS, 0); }
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAsExpr) {
			listener.enterAsExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAsExpr) {
			listener.exitAsExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAsExpr) {
			return visitor.visitAsExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexExprContext extends ExprContext {
	public _arg!: ArgContext;
	public _args: ArgContext[] = [];
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public arg(): ArgContext[];
	public arg(i: number): ArgContext;
	public arg(i?: number): ArgContext | ArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgContext);
		} else {
			return this.getRuleContext(i, ArgContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIndexExpr) {
			listener.enterIndexExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIndexExpr) {
			listener.exitIndexExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIndexExpr) {
			return visitor.visitIndexExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DColonExprContext extends ExprContext {
	public _member!: IdentContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public D_COLON(): TerminalNode { return this.getToken(CWScriptParser.D_COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDColonExpr) {
			listener.enterDColonExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDColonExpr) {
			listener.exitDColonExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDColonExpr) {
			return visitor.visitDColonExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeDColonExprContext extends ExprContext {
	public _member!: IdentContext;
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public D_COLON(): TerminalNode { return this.getToken(CWScriptParser.D_COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeDColonExpr) {
			listener.enterTypeDColonExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeDColonExpr) {
			listener.exitTypeDColonExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeDColonExpr) {
			return visitor.visitTypeDColonExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FnCallExprContext extends ExprContext {
	public _fallible!: Token;
	public _arg!: ArgContext;
	public _args: ArgContext[] = [];
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public arg(): ArgContext[];
	public arg(i: number): ArgContext;
	public arg(i?: number): ArgContext | ArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgContext);
		} else {
			return this.getRuleContext(i, ArgContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFnCallExpr) {
			listener.enterFnCallExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFnCallExpr) {
			listener.exitFnCallExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFnCallExpr) {
			return visitor.visitFnCallExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeFnCallExprContext extends ExprContext {
	public _fallible!: Token;
	public _arg!: ArgContext;
	public _args: ArgContext[] = [];
	public typeExpr(): TypeExprContext {
		return this.getRuleContext(0, TypeExprContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(CWScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CWScriptParser.RPAREN, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public arg(): ArgContext[];
	public arg(i: number): ArgContext;
	public arg(i?: number): ArgContext | ArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgContext);
		} else {
			return this.getRuleContext(i, ArgContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTypeFnCallExpr) {
			listener.enterTypeFnCallExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTypeFnCallExpr) {
			listener.exitTypeFnCallExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeFnCallExpr) {
			return visitor.visitTypeFnCallExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulExprContext extends ExprContext {
	public _op!: Token;
	public _rhs!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MOD, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMulExpr) {
			listener.enterMulExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMulExpr) {
			listener.exitMulExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMulExpr) {
			return visitor.visitMulExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddExprContext extends ExprContext {
	public _op!: Token;
	public _rhs!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.MINUS, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAddExpr) {
			listener.enterAddExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAddExpr) {
			listener.exitAddExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAddExpr) {
			return visitor.visitAddExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CompExprContext extends ExprContext {
	public _op!: Token;
	public _rhs!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.GT, 0); }
	public LT_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LT_EQ, 0); }
	public GT_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.GT_EQ, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterCompExpr) {
			listener.enterCompExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitCompExpr) {
			listener.exitCompExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitCompExpr) {
			return visitor.visitCompExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqExprContext extends ExprContext {
	public _op!: Token;
	public _rhs!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public EQ_EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ_EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.NEQ, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterEqExpr) {
			listener.enterEqExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitEqExpr) {
			listener.exitEqExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitEqExpr) {
			return visitor.visitEqExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NoneCheckExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public QUEST(): TerminalNode { return this.getToken(CWScriptParser.QUEST, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterNoneCheckExpr) {
			listener.enterNoneCheckExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitNoneCheckExpr) {
			listener.exitNoneCheckExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitNoneCheckExpr) {
			return visitor.visitNoneCheckExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IsExprContext extends ExprContext {
	public _negative!: Token;
	public _rhs!: TypeExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IS(): TerminalNode { return this.getToken(CWScriptParser.IS, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.NOT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIsExpr) {
			listener.enterIsExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIsExpr) {
			listener.exitIsExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIsExpr) {
			return visitor.visitIsExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InExprContext extends ExprContext {
	public _rhs!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public IN(): TerminalNode { return this.getToken(CWScriptParser.IN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterInExpr) {
			listener.enterInExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitInExpr) {
			listener.exitInExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitInExpr) {
			return visitor.visitInExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShortTryExprContext extends ExprContext {
	public _rhs!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public D_QUEST(): TerminalNode { return this.getToken(CWScriptParser.D_QUEST, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterShortTryExpr) {
			listener.enterShortTryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitShortTryExpr) {
			listener.exitShortTryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitShortTryExpr) {
			return visitor.visitShortTryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TryCatchElseExprContext extends ExprContext {
	public tryCatchElseExpr_(): TryCatchElseExpr_Context {
		return this.getRuleContext(0, TryCatchElseExpr_Context);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTryCatchElseExpr) {
			listener.enterTryCatchElseExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTryCatchElseExpr) {
			listener.exitTryCatchElseExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTryCatchElseExpr) {
			return visitor.visitTryCatchElseExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExprContext extends ExprContext {
	public NOT(): TerminalNode { return this.getToken(CWScriptParser.NOT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterNotExpr) {
			listener.enterNotExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitNotExpr) {
			listener.exitNotExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitNotExpr) {
			return visitor.visitNotExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndExprContext extends ExprContext {
	public _rhs!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(CWScriptParser.AND, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterAndExpr) {
			listener.enterAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitAndExpr) {
			listener.exitAndExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitAndExpr) {
			return visitor.visitAndExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrExprContext extends ExprContext {
	public _rhs!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(CWScriptParser.OR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterOrExpr) {
			listener.enterOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitOrExpr) {
			listener.exitOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitOrExpr) {
			return visitor.visitOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfExprContext extends ExprContext {
	public ifStmt_(): IfStmt_Context {
		return this.getRuleContext(0, IfStmt_Context);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIfExpr) {
			listener.enterIfExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIfExpr) {
			listener.exitIfExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIfExpr) {
			return visitor.visitIfExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QueryNowExprContext extends ExprContext {
	public QUERY_NOW(): TerminalNode { return this.getToken(CWScriptParser.QUERY_NOW, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterQueryNowExpr) {
			listener.enterQueryNowExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitQueryNowExpr) {
			listener.exitQueryNowExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitQueryNowExpr) {
			return visitor.visitQueryNowExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FailExprContext extends ExprContext {
	public FAIL(): TerminalNode { return this.getToken(CWScriptParser.FAIL, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterFailExpr) {
			listener.enterFailExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitFailExpr) {
			listener.exitFailExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitFailExpr) {
			return visitor.visitFailExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClosureExprContext extends ExprContext {
	public closure(): ClosureContext {
		return this.getRuleContext(0, ClosureContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterClosureExpr) {
			listener.enterClosureExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitClosureExpr) {
			listener.exitClosureExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitClosureExpr) {
			return visitor.visitClosureExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleExprContext extends ExprContext {
	public _expr!: ExprContext;
	public _items: ExprContext[] = [];
	public LBRACK(): TerminalNode { return this.getToken(CWScriptParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(CWScriptParser.RBRACK, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTupleExpr) {
			listener.enterTupleExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTupleExpr) {
			listener.exitTupleExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTupleExpr) {
			return visitor.visitTupleExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructExprContext extends ExprContext {
	public _memberVal!: MemberValContext;
	public _members: MemberValContext[] = [];
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public memberVal(): MemberValContext[];
	public memberVal(i: number): MemberValContext;
	public memberVal(i?: number): MemberValContext | MemberValContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberValContext);
		} else {
			return this.getRuleContext(i, MemberValContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStructExpr) {
			listener.enterStructExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStructExpr) {
			listener.exitStructExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStructExpr) {
			return visitor.visitStructExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnitVariantExprContext extends ExprContext {
	public typeVariant(): TypeVariantContext {
		return this.getRuleContext(0, TypeVariantContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterUnitVariantExpr) {
			listener.enterUnitVariantExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitUnitVariantExpr) {
			listener.exitUnitVariantExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitUnitVariantExpr) {
			return visitor.visitUnitVariantExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExprContext extends ExprContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterLiteralExpr) {
			listener.enterLiteralExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitLiteralExpr) {
			listener.exitLiteralExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpr) {
			return visitor.visitLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentExprContext extends ExprContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdentExpr) {
			listener.enterIdentExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdentExpr) {
			listener.exitIdentExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentExpr) {
			return visitor.visitIdentExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Grouped2ExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public TILDE(): TerminalNode { return this.getToken(CWScriptParser.TILDE, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterGrouped2Expr) {
			listener.enterGrouped2Expr(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitGrouped2Expr) {
			listener.exitGrouped2Expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitGrouped2Expr) {
			return visitor.visitGrouped2Expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClosureParamsContext extends ParserRuleContext {
	public _param!: ParamContext;
	public _params: ParamContext[] = [];
	public BAR(): TerminalNode[];
	public BAR(i: number): TerminalNode;
	public BAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.BAR);
		} else {
			return this.getToken(CWScriptParser.BAR, i);
		}
	}
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.COMMA);
		} else {
			return this.getToken(CWScriptParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_closureParams; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterClosureParams) {
			listener.enterClosureParams(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitClosureParams) {
			listener.exitClosureParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitClosureParams) {
			return visitor.visitClosureParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClosureContext extends ParserRuleContext {
	public _fallible!: Token;
	public _params!: ClosureParamsContext;
	public _retTy!: TypeExprContext;
	public stmt(): StmtContext | undefined {
		return this.tryGetRuleContext(0, StmtContext);
	}
	public closureParams(): ClosureParamsContext | undefined {
		return this.tryGetRuleContext(0, ClosureParamsContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.BANG, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ARROW, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_closure; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterClosure) {
			listener.enterClosure(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitClosure) {
			listener.exitClosure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitClosure) {
			return visitor.visitClosure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public _stmt!: StmtContext;
	public _body: StmtContext[] = [];
	public LBRACE(): TerminalNode { return this.getToken(CWScriptParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(CWScriptParser.RBRACE, 0); }
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CWScriptParser.SEMI);
		} else {
			return this.getToken(CWScriptParser.SEMI, i);
		}
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_block; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryCatchElseExpr_Context extends ParserRuleContext {
	public _body!: BlockContext;
	public _catchClause!: CatchClauseContext;
	public _catches: CatchClauseContext[] = [];
	public _else_!: ElseClauseContext;
	public TRY(): TerminalNode { return this.getToken(CWScriptParser.TRY, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	public elseClause(): ElseClauseContext | undefined {
		return this.tryGetRuleContext(0, ElseClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_tryCatchElseExpr_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterTryCatchElseExpr_) {
			listener.enterTryCatchElseExpr_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitTryCatchElseExpr_) {
			listener.exitTryCatchElseExpr_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitTryCatchElseExpr_) {
			return visitor.visitTryCatchElseExpr_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_catchClause; }
	public copyFrom(ctx: CatchClauseContext): void {
		super.copyFrom(ctx);
	}
}
export class CatchContext extends CatchClauseContext {
	public _ty!: TypeExprContext;
	public _body!: BlockContext;
	public CATCH(): TerminalNode { return this.getToken(CWScriptParser.CATCH, 0); }
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(ctx: CatchClauseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterCatch) {
			listener.enterCatch(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitCatch) {
			listener.exitCatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitCatch) {
			return visitor.visitCatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CatchBindContext extends CatchClauseContext {
	public _name!: IdentContext;
	public _ty!: TypeExprContext;
	public _body!: BlockContext;
	public CATCH(): TerminalNode { return this.getToken(CWScriptParser.CATCH, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public typeExpr(): TypeExprContext | undefined {
		return this.tryGetRuleContext(0, TypeExprContext);
	}
	constructor(ctx: CatchClauseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterCatchBind) {
			listener.enterCatchBind(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitCatchBind) {
			listener.exitCatchBind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitCatchBind) {
			return visitor.visitCatchBind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _value!: ExprContext;
	public EQ(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EQ, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_arg; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterArg) {
			listener.enterArg(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitArg) {
			listener.exitArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitArg) {
			return visitor.visitArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberValContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _value!: ExprContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.COLON, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_memberVal; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterMemberVal) {
			listener.enterMemberVal(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitMemberVal) {
			listener.exitMemberVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitMemberVal) {
			return visitor.visitMemberVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class StringLitContext extends LiteralContext {
	public StringLiteral(): TerminalNode { return this.getToken(CWScriptParser.StringLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterStringLit) {
			listener.enterStringLit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitStringLit) {
			listener.exitStringLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitStringLit) {
			return visitor.visitStringLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntLitContext extends LiteralContext {
	public IntLiteral(): TerminalNode { return this.getToken(CWScriptParser.IntLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIntLit) {
			listener.enterIntLit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIntLit) {
			listener.exitIntLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIntLit) {
			return visitor.visitIntLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DecLitContext extends LiteralContext {
	public DecLiteral(): TerminalNode { return this.getToken(CWScriptParser.DecLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterDecLit) {
			listener.enterDecLit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitDecLit) {
			listener.exitDecLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitDecLit) {
			return visitor.visitDecLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolLitContext extends LiteralContext {
	public BoolLiteral(): TerminalNode { return this.getToken(CWScriptParser.BoolLiteral, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterBoolLit) {
			listener.enterBoolLit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitBoolLit) {
			listener.exitBoolLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitBoolLit) {
			return visitor.visitBoolLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NoneLitContext extends LiteralContext {
	public NONE(): TerminalNode { return this.getToken(CWScriptParser.NONE, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterNoneLit) {
			listener.enterNoneLit(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitNoneLit) {
			listener.exitNoneLit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitNoneLit) {
			return visitor.visitNoneLit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmt_Context extends ParserRuleContext {
	public _pred!: ExprContext;
	public _body!: BlockContext;
	public _else_!: ElseClauseContext;
	public IF(): TerminalNode { return this.getToken(CWScriptParser.IF, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public elseClause(): ElseClauseContext | undefined {
		return this.tryGetRuleContext(0, ElseClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_ifStmt_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIfStmt_) {
			listener.enterIfStmt_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIfStmt_) {
			listener.exitIfStmt_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIfStmt_) {
			return visitor.visitIfStmt_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseClauseContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(CWScriptParser.ELSE, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public stmt(): StmtContext | undefined {
		return this.tryGetRuleContext(0, StmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_elseClause; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterElseClause) {
			listener.enterElseClause(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitElseClause) {
			listener.exitElseClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitElseClause) {
			return visitor.visitElseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStmt_Context extends ParserRuleContext {
	public _binding!: Let_bindingContext;
	public _iter!: ExprContext;
	public _body!: BlockContext;
	public FOR(): TerminalNode { return this.getToken(CWScriptParser.FOR, 0); }
	public IN(): TerminalNode { return this.getToken(CWScriptParser.IN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public let_binding(): Let_bindingContext | undefined {
		return this.tryGetRuleContext(0, Let_bindingContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_forStmt_; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterForStmt_) {
			listener.enterForStmt_(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitForStmt_) {
			listener.exitForStmt_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitForStmt_) {
			return visitor.visitForStmt_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentContext extends ParserRuleContext {
	public Ident(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.Ident, 0); }
	public reservedKeyword(): ReservedKeywordContext | undefined {
		return this.tryGetRuleContext(0, ReservedKeywordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_ident; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterIdent) {
			listener.enterIdent(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitIdent) {
			listener.exitIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitIdent) {
			return visitor.visitIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedKeywordContext extends ParserRuleContext {
	public CONTRACT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.CONTRACT, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.INTERFACE, 0); }
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPORT, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IMPLEMENTS, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXTENDS, 0); }
	public ERROR(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ERROR, 0); }
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EVENT, 0); }
	public INSTANTIATE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.INSTANTIATE, 0); }
	public EXEC(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EXEC, 0); }
	public QUERY(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.QUERY, 0); }
	public REPLY(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.REPLY, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FOR, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IN, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FROM, 0); }
	public STATE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.STATE, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.IF, 0); }
	public FN(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FN, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ELSE, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.OR, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.FALSE, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.LET, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.STRUCT, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.ENUM, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.TYPE, 0); }
	public EMIT(): TerminalNode | undefined { return this.tryGetToken(CWScriptParser.EMIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CWScriptParser.RULE_reservedKeyword; }
	// @Override
	public enterRule(listener: CWScriptParserListener): void {
		if (listener.enterReservedKeyword) {
			listener.enterReservedKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: CWScriptParserListener): void {
		if (listener.exitReservedKeyword) {
			listener.exitReservedKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CWScriptParserVisitor<Result>): Result {
		if (visitor.visitReservedKeyword) {
			return visitor.visitReservedKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}



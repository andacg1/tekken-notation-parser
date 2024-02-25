// Generated from src/grammar/TekkenNotation.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import TekkenNotationVisitor from "./TekkenNotationVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class TekkenNotationParser extends Parser {
	public static readonly ACTION_INPUT = 1;
	public static readonly MOVEMENT_INPUT = 2;
	public static readonly SPECIAL_INPUT = 3;
	public static readonly ACTION_COMBINATOR = 4;
	public static readonly JUST_FRAME_COMBINATOR = 5;
	public static readonly IMMEDIATE_COMBINATOR = 6;
	public static readonly DELAYED_COMBINATOR = 7;
	public static readonly ALTERNATIVE_COMBINATOR = 8;
	public static readonly MOVEMENT_COMBINATOR = 9;
	public static readonly MOVE_SEPARATOR = 10;
	public static readonly INSTRUCTION_SEPARATOR = 11;
	public static readonly OPTIONAL_START_DELIMITER = 12;
	public static readonly OPTIONAL_END_DELIMITER = 13;
	public static readonly THROW_BREAK_START_DELIMITER = 14;
	public static readonly THROW_BREAK_END_DELIMITER = 15;
	public static readonly ANY_SPACE = 16;
	public static readonly SINGLE_SPACE = 17;
	public static readonly TEXT = 18;
	public static readonly OTHER = 19;
	public static readonly WS = 20;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_combo = 0;
	public static readonly RULE_move = 1;
	public static readonly RULE_instruction = 2;
	public static readonly RULE_movement = 3;
	public static readonly RULE_action = 4;
	public static readonly RULE_special = 5;
	public static readonly RULE_text = 6;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            "'+'", "':'", 
                                                            "'~'", "'<'", 
                                                            "'_'", "'/'", 
                                                            "';'", null, 
                                                            null, null, 
                                                            "'{'", "'}'", 
                                                            null, "' '" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "ACTION_INPUT", 
                                                             "MOVEMENT_INPUT", 
                                                             "SPECIAL_INPUT", 
                                                             "ACTION_COMBINATOR", 
                                                             "JUST_FRAME_COMBINATOR", 
                                                             "IMMEDIATE_COMBINATOR", 
                                                             "DELAYED_COMBINATOR", 
                                                             "ALTERNATIVE_COMBINATOR", 
                                                             "MOVEMENT_COMBINATOR", 
                                                             "MOVE_SEPARATOR", 
                                                             "INSTRUCTION_SEPARATOR", 
                                                             "OPTIONAL_START_DELIMITER", 
                                                             "OPTIONAL_END_DELIMITER", 
                                                             "THROW_BREAK_START_DELIMITER", 
                                                             "THROW_BREAK_END_DELIMITER", 
                                                             "ANY_SPACE", 
                                                             "SINGLE_SPACE", 
                                                             "TEXT", "OTHER", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"combo", "move", "instruction", "movement", "action", "special", "text",
	];
	public get grammarFileName(): string { return "TekkenNotation.g4"; }
	public get literalNames(): (string | null)[] { return TekkenNotationParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return TekkenNotationParser.symbolicNames; }
	public get ruleNames(): string[] { return TekkenNotationParser.ruleNames; }
	public get serializedATN(): number[] { return TekkenNotationParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, TekkenNotationParser._ATN, TekkenNotationParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public combo(): ComboContext {
		let localctx: ComboContext = new ComboContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, TekkenNotationParser.RULE_combo);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 19;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 14;
					this.move();
					this.state = 15;
					this.match(TekkenNotationParser.MOVE_SEPARATOR);
					}
					}
				}
				this.state = 21;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 22;
			this.move();
			this.state = 24;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 23;
				this.match(TekkenNotationParser.MOVE_SEPARATOR);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public move(): MoveContext {
		let localctx: MoveContext = new MoveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, TekkenNotationParser.RULE_move);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 71680) !== 0)) {
					{
					{
					this.state = 26;
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 71680) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					this.state = 31;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 32;
				this.instruction();
				this.state = 36;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 33;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 75776) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						}
						}
					}
					this.state = 38;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
				}
				}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 333838) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public instruction(): InstructionContext {
		let localctx: InstructionContext = new InstructionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, TekkenNotationParser.RULE_instruction);
		let _la: number;
		try {
			this.state = 59;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 43;
				this.movement();
				this.state = 46;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 240) !== 0)) {
					{
					this.state = 44;
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 240) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 45;
					this.action();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 48;
				this.special();
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 240) !== 0)) {
					{
					this.state = 49;
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 240) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 50;
					this.action();
					}
				}

				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 53;
				this.action();
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 240) !== 0)) {
					{
					this.state = 54;
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 240) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 55;
					this.action();
					}
				}

				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 58;
				this.text();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public movement(): MovementContext {
		let localctx: MovementContext = new MovementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, TekkenNotationParser.RULE_movement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 61;
			this.match(TekkenNotationParser.MOVEMENT_INPUT);
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 62;
				this.match(TekkenNotationParser.MOVEMENT_COMBINATOR);
				this.state = 63;
				this.match(TekkenNotationParser.MOVEMENT_INPUT);
				}
				}
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public action(): ActionContext {
		let localctx: ActionContext = new ActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, TekkenNotationParser.RULE_action);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 69;
			this.match(TekkenNotationParser.ACTION_INPUT);
			this.state = 74;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 70;
					this.match(TekkenNotationParser.ACTION_COMBINATOR);
					this.state = 71;
					this.match(TekkenNotationParser.ACTION_INPUT);
					}
					}
				}
				this.state = 76;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public special(): SpecialContext {
		let localctx: SpecialContext = new SpecialContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, TekkenNotationParser.RULE_special);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 77;
			this.match(TekkenNotationParser.SPECIAL_INPUT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public text(): TextContext {
		let localctx: TextContext = new TextContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, TekkenNotationParser.RULE_text);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 79;
			this.match(TekkenNotationParser.TEXT);
			this.state = 84;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 80;
					this.match(TekkenNotationParser.INSTRUCTION_SEPARATOR);
					this.state = 81;
					this.match(TekkenNotationParser.TEXT);
					}
					}
				}
				this.state = 86;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,20,88,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,1,0,1,0,1,0,5,0,18,8,0,10,
	0,12,0,21,9,0,1,0,1,0,3,0,25,8,0,1,1,5,1,28,8,1,10,1,12,1,31,9,1,1,1,1,
	1,5,1,35,8,1,10,1,12,1,38,9,1,4,1,40,8,1,11,1,12,1,41,1,2,1,2,1,2,3,2,47,
	8,2,1,2,1,2,1,2,3,2,52,8,2,1,2,1,2,1,2,3,2,57,8,2,1,2,3,2,60,8,2,1,3,1,
	3,1,3,5,3,65,8,3,10,3,12,3,68,9,3,1,4,1,4,1,4,5,4,73,8,4,10,4,12,4,76,9,
	4,1,5,1,5,1,6,1,6,1,6,5,6,83,8,6,10,6,12,6,86,9,6,1,6,0,0,7,0,2,4,6,8,10,
	12,0,3,2,0,11,12,16,16,3,0,11,11,13,13,16,16,1,0,4,7,94,0,19,1,0,0,0,2,
	39,1,0,0,0,4,59,1,0,0,0,6,61,1,0,0,0,8,69,1,0,0,0,10,77,1,0,0,0,12,79,1,
	0,0,0,14,15,3,2,1,0,15,16,5,10,0,0,16,18,1,0,0,0,17,14,1,0,0,0,18,21,1,
	0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,22,1,0,0,0,21,19,1,0,0,0,22,24,3,2,
	1,0,23,25,5,10,0,0,24,23,1,0,0,0,24,25,1,0,0,0,25,1,1,0,0,0,26,28,7,0,0,
	0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,32,1,0,0,0,
	31,29,1,0,0,0,32,36,3,4,2,0,33,35,7,1,0,0,34,33,1,0,0,0,35,38,1,0,0,0,36,
	34,1,0,0,0,36,37,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,39,29,1,0,0,0,40,41,
	1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,3,1,0,0,0,43,46,3,6,3,0,44,45,7,
	2,0,0,45,47,3,8,4,0,46,44,1,0,0,0,46,47,1,0,0,0,47,60,1,0,0,0,48,51,3,10,
	5,0,49,50,7,2,0,0,50,52,3,8,4,0,51,49,1,0,0,0,51,52,1,0,0,0,52,60,1,0,0,
	0,53,56,3,8,4,0,54,55,7,2,0,0,55,57,3,8,4,0,56,54,1,0,0,0,56,57,1,0,0,0,
	57,60,1,0,0,0,58,60,3,12,6,0,59,43,1,0,0,0,59,48,1,0,0,0,59,53,1,0,0,0,
	59,58,1,0,0,0,60,5,1,0,0,0,61,66,5,2,0,0,62,63,5,9,0,0,63,65,5,2,0,0,64,
	62,1,0,0,0,65,68,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,7,1,0,0,0,68,66,
	1,0,0,0,69,74,5,1,0,0,70,71,5,4,0,0,71,73,5,1,0,0,72,70,1,0,0,0,73,76,1,
	0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,9,1,0,0,0,76,74,1,0,0,0,77,78,5,3,
	0,0,78,11,1,0,0,0,79,84,5,18,0,0,80,81,5,11,0,0,81,83,5,18,0,0,82,80,1,
	0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,13,1,0,0,0,86,84,1,0,
	0,0,12,19,24,29,36,41,46,51,56,59,66,74,84];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TekkenNotationParser.__ATN) {
			TekkenNotationParser.__ATN = new ATNDeserializer().deserialize(TekkenNotationParser._serializedATN);
		}

		return TekkenNotationParser.__ATN;
	}


	static DecisionsToDFA = TekkenNotationParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ComboContext extends ParserRuleContext {
	constructor(parser?: TekkenNotationParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public move_list(): MoveContext[] {
		return this.getTypedRuleContexts(MoveContext) as MoveContext[];
	}
	public move(i: number): MoveContext {
		return this.getTypedRuleContext(MoveContext, i) as MoveContext;
	}
	public MOVE_SEPARATOR_list(): TerminalNode[] {
	    	return this.getTokens(TekkenNotationParser.MOVE_SEPARATOR);
	}
	public MOVE_SEPARATOR(i: number): TerminalNode {
		return this.getToken(TekkenNotationParser.MOVE_SEPARATOR, i);
	}
    public get ruleIndex(): number {
    	return TekkenNotationParser.RULE_combo;
	}
	// @Override
	public accept<Result>(visitor: TekkenNotationVisitor<Result>): Result {
		if (visitor.visitCombo) {
			return visitor.visitCombo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MoveContext extends ParserRuleContext {
	constructor(parser?: TekkenNotationParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public instruction_list(): InstructionContext[] {
		return this.getTypedRuleContexts(InstructionContext) as InstructionContext[];
	}
	public instruction(i: number): InstructionContext {
		return this.getTypedRuleContext(InstructionContext, i) as InstructionContext;
	}
	public INSTRUCTION_SEPARATOR_list(): TerminalNode[] {
	    	return this.getTokens(TekkenNotationParser.INSTRUCTION_SEPARATOR);
	}
	public INSTRUCTION_SEPARATOR(i: number): TerminalNode {
		return this.getToken(TekkenNotationParser.INSTRUCTION_SEPARATOR, i);
	}
	public ANY_SPACE_list(): TerminalNode[] {
	    	return this.getTokens(TekkenNotationParser.ANY_SPACE);
	}
	public ANY_SPACE(i: number): TerminalNode {
		return this.getToken(TekkenNotationParser.ANY_SPACE, i);
	}
	public OPTIONAL_START_DELIMITER_list(): TerminalNode[] {
	    	return this.getTokens(TekkenNotationParser.OPTIONAL_START_DELIMITER);
	}
	public OPTIONAL_START_DELIMITER(i: number): TerminalNode {
		return this.getToken(TekkenNotationParser.OPTIONAL_START_DELIMITER, i);
	}
	public OPTIONAL_END_DELIMITER_list(): TerminalNode[] {
	    	return this.getTokens(TekkenNotationParser.OPTIONAL_END_DELIMITER);
	}
	public OPTIONAL_END_DELIMITER(i: number): TerminalNode {
		return this.getToken(TekkenNotationParser.OPTIONAL_END_DELIMITER, i);
	}
    public get ruleIndex(): number {
    	return TekkenNotationParser.RULE_move;
	}
	// @Override
	public accept<Result>(visitor: TekkenNotationVisitor<Result>): Result {
		if (visitor.visitMove) {
			return visitor.visitMove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	constructor(parser?: TekkenNotationParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public movement(): MovementContext {
		return this.getTypedRuleContext(MovementContext, 0) as MovementContext;
	}
	public action_list(): ActionContext[] {
		return this.getTypedRuleContexts(ActionContext) as ActionContext[];
	}
	public action(i: number): ActionContext {
		return this.getTypedRuleContext(ActionContext, i) as ActionContext;
	}
	public ACTION_COMBINATOR(): TerminalNode {
		return this.getToken(TekkenNotationParser.ACTION_COMBINATOR, 0);
	}
	public JUST_FRAME_COMBINATOR(): TerminalNode {
		return this.getToken(TekkenNotationParser.JUST_FRAME_COMBINATOR, 0);
	}
	public DELAYED_COMBINATOR(): TerminalNode {
		return this.getToken(TekkenNotationParser.DELAYED_COMBINATOR, 0);
	}
	public IMMEDIATE_COMBINATOR(): TerminalNode {
		return this.getToken(TekkenNotationParser.IMMEDIATE_COMBINATOR, 0);
	}
	public special(): SpecialContext {
		return this.getTypedRuleContext(SpecialContext, 0) as SpecialContext;
	}
	public text(): TextContext {
		return this.getTypedRuleContext(TextContext, 0) as TextContext;
	}
    public get ruleIndex(): number {
    	return TekkenNotationParser.RULE_instruction;
	}
	// @Override
	public accept<Result>(visitor: TekkenNotationVisitor<Result>): Result {
		if (visitor.visitInstruction) {
			return visitor.visitInstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MovementContext extends ParserRuleContext {
	constructor(parser?: TekkenNotationParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MOVEMENT_INPUT_list(): TerminalNode[] {
	    	return this.getTokens(TekkenNotationParser.MOVEMENT_INPUT);
	}
	public MOVEMENT_INPUT(i: number): TerminalNode {
		return this.getToken(TekkenNotationParser.MOVEMENT_INPUT, i);
	}
	public MOVEMENT_COMBINATOR_list(): TerminalNode[] {
	    	return this.getTokens(TekkenNotationParser.MOVEMENT_COMBINATOR);
	}
	public MOVEMENT_COMBINATOR(i: number): TerminalNode {
		return this.getToken(TekkenNotationParser.MOVEMENT_COMBINATOR, i);
	}
    public get ruleIndex(): number {
    	return TekkenNotationParser.RULE_movement;
	}
	// @Override
	public accept<Result>(visitor: TekkenNotationVisitor<Result>): Result {
		if (visitor.visitMovement) {
			return visitor.visitMovement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionContext extends ParserRuleContext {
	constructor(parser?: TekkenNotationParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ACTION_INPUT_list(): TerminalNode[] {
	    	return this.getTokens(TekkenNotationParser.ACTION_INPUT);
	}
	public ACTION_INPUT(i: number): TerminalNode {
		return this.getToken(TekkenNotationParser.ACTION_INPUT, i);
	}
	public ACTION_COMBINATOR_list(): TerminalNode[] {
	    	return this.getTokens(TekkenNotationParser.ACTION_COMBINATOR);
	}
	public ACTION_COMBINATOR(i: number): TerminalNode {
		return this.getToken(TekkenNotationParser.ACTION_COMBINATOR, i);
	}
    public get ruleIndex(): number {
    	return TekkenNotationParser.RULE_action;
	}
	// @Override
	public accept<Result>(visitor: TekkenNotationVisitor<Result>): Result {
		if (visitor.visitAction) {
			return visitor.visitAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecialContext extends ParserRuleContext {
	constructor(parser?: TekkenNotationParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SPECIAL_INPUT(): TerminalNode {
		return this.getToken(TekkenNotationParser.SPECIAL_INPUT, 0);
	}
    public get ruleIndex(): number {
    	return TekkenNotationParser.RULE_special;
	}
	// @Override
	public accept<Result>(visitor: TekkenNotationVisitor<Result>): Result {
		if (visitor.visitSpecial) {
			return visitor.visitSpecial(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TextContext extends ParserRuleContext {
	constructor(parser?: TekkenNotationParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TEXT_list(): TerminalNode[] {
	    	return this.getTokens(TekkenNotationParser.TEXT);
	}
	public TEXT(i: number): TerminalNode {
		return this.getToken(TekkenNotationParser.TEXT, i);
	}
	public INSTRUCTION_SEPARATOR_list(): TerminalNode[] {
	    	return this.getTokens(TekkenNotationParser.INSTRUCTION_SEPARATOR);
	}
	public INSTRUCTION_SEPARATOR(i: number): TerminalNode {
		return this.getToken(TekkenNotationParser.INSTRUCTION_SEPARATOR, i);
	}
    public get ruleIndex(): number {
    	return TekkenNotationParser.RULE_text;
	}
	// @Override
	public accept<Result>(visitor: TekkenNotationVisitor<Result>): Result {
		if (visitor.visitText) {
			return visitor.visitText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

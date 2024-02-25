// Generated from src/grammar/TekkenNotation.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { ComboContext } from "./TekkenNotationParser";
import { MoveContext } from "./TekkenNotationParser";
import { InstructionContext } from "./TekkenNotationParser";
import { MovementContext } from "./TekkenNotationParser";
import { ActionContext } from "./TekkenNotationParser";
import { SpecialContext } from "./TekkenNotationParser";
import { TextContext } from "./TekkenNotationParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TekkenNotationParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class TekkenNotationVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `TekkenNotationParser.combo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCombo?: (ctx: ComboContext) => Result;
	/**
	 * Visit a parse tree produced by `TekkenNotationParser.move`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMove?: (ctx: MoveContext) => Result;
	/**
	 * Visit a parse tree produced by `TekkenNotationParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;
	/**
	 * Visit a parse tree produced by `TekkenNotationParser.movement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMovement?: (ctx: MovementContext) => Result;
	/**
	 * Visit a parse tree produced by `TekkenNotationParser.action`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction?: (ctx: ActionContext) => Result;
	/**
	 * Visit a parse tree produced by `TekkenNotationParser.special`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecial?: (ctx: SpecialContext) => Result;
	/**
	 * Visit a parse tree produced by `TekkenNotationParser.text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitText?: (ctx: TextContext) => Result;
}


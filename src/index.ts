import { CharStream, CommonTokenStream } from 'antlr4';

import TekkenNotationLexer from "./parser/TekkenNotationLexer";
import TekkenNotationParser from "./parser/TekkenNotationParser";
import { TekkenCombo } from './types';
import { TekkenVisitor } from './visitor';

export * from './types';
export * from './visitor';
export { default as TekkenNotationParser } from './parser/TekkenNotationParser';

/**
 * Parse a Tekken combo notation string into a TekkenCombo object.
 * @param {string} notation
 * @example parseTekkenNotation('d/f,2;b,4');
 */
export function parseTekkenNotation(notation: string): TekkenCombo {
    const charStream = new CharStream(notation);


    const lexer = new TekkenNotationLexer(charStream);

    const tokens = new CommonTokenStream(lexer);

    const parser = new TekkenNotationParser(tokens);
	parser.buildParseTrees = true;

    const tree = parser.combo();

    const visitor = new TekkenVisitor();


    return visitor.visit(tree) as TekkenCombo;
}

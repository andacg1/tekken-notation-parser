# Installing

### npm
```bash
npm i tekken-parser
```

### Yarn
```bash
yarn add tekken-parser
```

# Usage

```ts
import { parseTekkenNotation } from "tekken-parser";

const tree = parseTekkenNotation('d/f 1+2, SEN 2, 3, 4; f+3, 4, 3+4');
```


# Contributing

## Setup
1. Clone the repository
2. `npm install`
3. Install ANTLR4
   1. `pip install antlr4-tools`
4. `npm run watch`

## Notes
- There is currently no watch mode for the ANTLR4 grammar (`TekkenNotation.g4`).

---
# TODO
- [ ] Optional moves


---
# Credit

### [Tekken Parser Monorepo](https://github.com/rherwig/tekken-parser)
This project was forked off the parser in this monorepo.
The initial goal was to let the parser be used as a standalone package.

More improvements have been made since then, especially around grammar flexibility.

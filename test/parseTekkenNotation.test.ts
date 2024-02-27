import { parseTekkenNotation } from "@/src";

describe('parseTekkenNotation', () => {
    test('parses basic Tekken notation', () => {
        const tree = parseTekkenNotation('d/f 1+2, SEN 2, 3, 4');
        const instructions = tree.moves[0].instructions;
        expect(instructions).toMatchInlineSnapshot(`
[
  {
    "inputs": [
      {
        "notation": "d",
      },
      {
        "notation": "f",
      },
    ],
    "notation": "d/f",
    "slug": "df",
    "type": "MOVEMENT",
  },
  {
    "inputs": [
      {
        "notation": "1",
      },
      {
        "notation": "2",
      },
    ],
    "notation": "1+2",
    "slug": "12",
    "type": "ACTION",
  },
  {
    "inputs": [],
    "notation": "SEN",
    "slug": "SEN",
    "type": "SPECIAL",
  },
  {
    "inputs": [
      {
        "notation": "2",
      },
    ],
    "notation": "2",
    "slug": "2",
    "type": "ACTION",
  },
  {
    "inputs": [
      {
        "notation": "3",
      },
    ],
    "notation": "3",
    "slug": "3",
    "type": "ACTION",
  },
  {
    "inputs": [
      {
        "notation": "4",
      },
    ],
    "notation": "4",
    "slug": "4",
    "type": "ACTION",
  },
]
`)
    });
    test('parses optional inputs', () => {
        const tree = parseTekkenNotation('1, (dash), 2');
        const instructions = tree.moves[0].instructions;
    })
});

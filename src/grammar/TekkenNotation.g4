grammar TekkenNotation;

combo: (move MOVE_SEPARATOR)* move (MOVE_SEPARATOR)?;

move: ((INSTRUCTION_SEPARATOR | ANY_SPACE | OPTIONAL_START_DELIMITER)* instruction (INSTRUCTION_SEPARATOR | ANY_SPACE | OPTIONAL_END_DELIMITER)* )+;

instruction
    : movement ((ACTION_COMBINATOR | JUST_FRAME_COMBINATOR | DELAYED_COMBINATOR | IMMEDIATE_COMBINATOR) action)?
    | special ((ACTION_COMBINATOR | JUST_FRAME_COMBINATOR | DELAYED_COMBINATOR | IMMEDIATE_COMBINATOR) action)?
    | action ((ACTION_COMBINATOR | JUST_FRAME_COMBINATOR | DELAYED_COMBINATOR | IMMEDIATE_COMBINATOR) action)?
    | text
    ;

movement: MOVEMENT_INPUT (MOVEMENT_COMBINATOR MOVEMENT_INPUT)* ;
action: ACTION_INPUT (ACTION_COMBINATOR ACTION_INPUT)*;
special: SPECIAL_INPUT ;
text: TEXT (INSTRUCTION_SEPARATOR TEXT)*;

ACTION_INPUT: [1234] ;

MOVEMENT_INPUT
    : [nfbduNFBDU]
    | ('QCF' | 'QCB' | 'HCF' | 'HCB')
    ;

SPECIAL_INPUT
    : MOVEMENT_ALIAS
    | RAGE_ALIAS
    | WALL_ALIAS
    | STATE_ALIAS
    | STANCE_ALIAS
    ;

ACTION_COMBINATOR: '+' ;
JUST_FRAME_COMBINATOR: ':' ;
IMMEDIATE_COMBINATOR: '~' ;
DELAYED_COMBINATOR: '<' ;
ALTERNATIVE_COMBINATOR: '_' ;
MOVEMENT_COMBINATOR: '/' ;
MOVE_SEPARATOR: ';' ;
INSTRUCTION_SEPARATOR: ',' | ' ' ;

OPTIONAL_START_DELIMITER: '[' | '(' ;
OPTIONAL_END_DELIMITER: ']' | ')';
THROW_BREAK_START_DELIMITER: '{' ;
THROW_BREAK_END_DELIMITER: '}' ;


fragment ACTION_ACTION_COMBINATOR
    : ACTION_COMBINATOR
    | IMMEDIATE_COMBINATOR
    | DELAYED_COMBINATOR
    ;

fragment MOVEMENT_ALIAS
    : 'DASH'
    | 'CD'
    | 'SS'
    | 'SSL'
    | 'SSR'
    | 'SW'
    | 'SWL'
    | 'SWR'
    ;

fragment RAGE_ALIAS
    : 'RAGE'
    | 'RAGEART'
    | 'RAGEDRIVE'
    | 'RA'
    | 'RD'
    ;

fragment WALL_ALIAS
    : 'WALL'
    | 'W!'
    | 'W'
    ;

fragment HIT_ALIAS
    : 'S!'
    | 'S'
    | 'A!'
    | 'A'
    | 'KND'
    | 'CH'
    ;

fragment STATE_ALIAS
    : 'BT'
    | 'FC'
    | 'WS'
    | 'WR'
    ;

fragment STANCE_ALIAS: 'WRA' | 'BDS' | 'FB' | 'EFB' | 'EFF' | 'ZEN' | 'HND' | 'RLX' | 'AOP' | 'RDS' | 'LFF' | 'RFF' | 'LFS' | 'RFS' | 'VTS' | 'DSS' | 'TFS' | 'HMS' | 'HBS' | 'ROL' | 'CRA' | 'SNA' | 'TGR' | 'DGN' | 'PAN' | 'PHX' | 'PLD' | 'FCD RLX' | 'SIT SNA' | 'DRU' | 'INS' | 'FLE' | 'DGF' | 'MED' | 'KIN' | 'NSS' | 'PDP' | 'FLA' | 'CES' | 'KNP' | 'STC' | 'SDW' | 'HAZ' | 'CDS' | 'ALB' | 'DCK' | 'Ext DCK' | 'PKB' | 'SWY' | 'LWV' | 'RWV' | 'FLK' | 'SIT' | 'TAI' | 'CAT' | 'CJM' | 'KNK' | 'BOK' | 'HPF' | 'LCT' | 'DES' | 'BOOT' | 'FLY' | 'SEN' | 'DEN' | 'SAV' | 'TRT' | 'MNT' | 'SCR' | 'MTS' | 'SWS' | 'ROC' | 'AKS' | 'BOB' | 'BAL' | 'JGS' | 'INT' | 'RSS' | 'RSS B' | 'KAT' | 'GOL' | 'SG' | 'STB' ;
ANY_SPACE: SINGLE_SPACE+;
SINGLE_SPACE: ' ';

TEXT: OTHER;
OTHER: [a-zA-Z0-9']+;

WS: [\n\t\r]+ -> skip;

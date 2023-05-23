export class TreeNode{
    constructor(source, target, piece, name, pickPercentage, whiteWR, blackWR, drawRate, moveNumber){
        this.source         = source         || null;
        this.target         = target         || null;
        this.piece          = piece          || null;
        this.name           = name           || null;
        this.pickPercentage = pickPercentage;
        this.whiteWinRate   = whiteWR        || null;
        this.blackWinRate   = blackWR        || null;
        this.drawRate       = drawRate       || null;
        this.moveNumber           = moveNumber;
        this.children = [];
    }

    //Pesquisa da jogada realizada
    findNode(source, target, piece, moveNumber) {
        if (this.source === source &&this.target === target &&this.piece === piece && this.moveNumber === moveNumber)
          return this; 

        for (const child of this.children) {
            const foundNode = child.findNode(source, target, piece, moveNumber);
            if (foundNode) 
                return foundNode; 
        }
        return null; 
    }

}

//Criação do nó raiz da árvore
export const tree = new TreeNode();

//Todas primeiras jogadas possíveis na árvore
tree.children=[     
    new TreeNode('e2', 'e4', 'wP', "King's Pawn Opening",  59, 49, 47, 4, 1),
    new TreeNode('d2', 'd4', 'wP', "Queen's Pawn Opening", 26, 50, 45, 5, 1),
    new TreeNode('g1', 'f3', 'wN', "Zukertort Opening",     4, 51, 44, 5, 1),
    new TreeNode('c2', 'c4', 'wP', "English Opening",       3, 51, 45, 5, 1),
    new TreeNode('e2', 'e3', 'wP', "Van't Kruijs Opening",  2, 47, 49, 4, 1),
    new TreeNode('g2', 'g3', 'wP', "Hungarian Opening",     2, 50, 46, 4, 1),
    new TreeNode('b2', 'b3', 'wP', "Nimzo-Larsen Attack",   2, 50, 46, 4, 1),
    new TreeNode('f2', 'f4', 'wP', "Bird Opening",          1, 50, 47, 3, 1),
    new TreeNode('d2', 'd3', 'wP', "Mieses Opening",        1, 48, 49, 3, 1),
    new TreeNode('b1', 'c3', 'wN', "Van Geet Opening",      1, 49, 47, 4, 1),
    new TreeNode('b2', 'b4', 'wP', "Polish Opening",        0, 51, 45, 4, 1),
    new TreeNode('c2', 'c3', 'wP', "Saragossa Opening",     0, 48, 48, 4, 1)
];

//Todas respostas para a primeira abertura (King's Pawn Opening)
tree.children[0].children=[     
    new TreeNode('e7', 'e5', 'bP', "King's Pawn Game",     41, 51, 45, 4, 2),
    new TreeNode('c7', 'c5', 'bP', "Sicilian Defense",     19, 48, 48, 4, 2),
    new TreeNode('e7', 'e6', 'bP', "French Defense",       10, 48, 48, 4, 2),
    new TreeNode('d7', 'd5', 'bP', "Scandinavian Defense", 10, 49, 47, 4, 2),
    new TreeNode('c7', 'c6', 'bP', "Caro-Kann Defense",     7, 47, 49, 4, 2),
    new TreeNode('d7', 'd6', 'bP', "Pirc Defense",          4, 49, 47, 4, 2),
    new TreeNode('g7', 'g6', 'bP', "Modern Defense",        3, 49, 48, 3, 2),
    new TreeNode('b7', 'b6', 'bP', "Owen Defense",          2, 50, 47, 3, 2),
    new TreeNode('g8', 'f6', 'bN', "Alekhine Defense",      2, 48, 48, 4, 2),
    new TreeNode('b8', 'c6', 'bN', "Nimzowitsch Defense",   1, 50, 46, 4, 2),
    new TreeNode('a7', 'a6', 'bP', "St. George Defense",    0, 51, 46, 3, 2),
    new TreeNode('f7', 'f5', 'bP', "Duras Gambit",          0, 51, 46, 3, 2)
];


tree.children[1].children=[     
    new TreeNode('d7', 'd5', 'bP', "Queen's Pawn Game", 42, 52, 44, 4, 2),
    new TreeNode('g8', 'f6', 'bN', "Indian Defense",    20, 49, 47, 4, 2),
    new TreeNode('e7', 'e6', 'bP', "Horwitz Defense",   10, 51, 45, 4, 2),
    new TreeNode('e7', 'e5', 'bP', "Englund Gambit",     6, 49, 47, 4, 2),
    new TreeNode('g7', 'g6', 'bP', "Modern Defense",     5, 49, 47, 4, 2),
    new TreeNode('c7', 'c5', 'bP', "Benoni Defense",     5, 48, 49, 3, 2),
    new TreeNode('d7', 'd6', 'bP', "Queen's Pawn Game",  4, 49, 47, 4, 2),
    new TreeNode('c7', 'c6', 'bP', "No known name",      4, 50, 46, 4, 2),
    new TreeNode('b7', 'b6', 'bP', "English Defense",    2, 50, 46, 4, 2),
    new TreeNode('f7', 'f5', 'bP', "Dutch Defense",      2, 50, 46, 4, 2),
    new TreeNode('b8', 'c6', 'bP', "Mikenas Defense",    1, 53, 44, 3, 2),
    new TreeNode('f7', 'f6', 'bP', "No known name",      0, 54, 43, 3, 2)
];

tree.children[2].children=[     
    new TreeNode('d7', 'd5', 'bP', "Zukerfort Opening",             32, 51, 44, 5, 2),
    new TreeNode('g8', 'f6', 'bN', "Zukerfort Opening",             16, 50, 45, 5, 2),
    new TreeNode('c7', 'c5', 'bP', "Sicilian Invitation",           10, 50, 46, 4, 2),
    new TreeNode('e7', 'e6', 'bP', "Queen's Gambit Invitation",     9, 52, 43, 5, 2),
    new TreeNode('b8', 'c6', 'bN', "Black Mustang Defense",         7, 51, 45, 4, 2),
    new TreeNode('d7', 'd6', 'bP', "Pirc Inivtation",               6, 51, 45, 4, 2),
    new TreeNode('g7', 'g6', 'bP', "Kingside Fianccheto",           5, 49, 46, 5, 2),
    new TreeNode('e7', 'e5', 'bP', "Ross Gambit",                   5, 53, 43, 4, 2),
    new TreeNode('c7', 'c6', 'bP', "Slav Invitation",               5, 51, 45, 4, 2),
    new TreeNode('b7', 'b6', 'bP', "Queenside Fianccheto",          3, 52, 44, 4, 2),
    new TreeNode('f7', 'f5', 'bP', "Dutch Variation",               2, 51, 45, 4, 2),
    new TreeNode('f7', 'f6', 'bP', "Arctic Defense",                1, 54, 42, 4, 2)
];

tree.children[3].children=[     
    new TreeNode('e7', 'e5', 'bP', "King's English Variation",             32, 51, 44, 5, 2),
    new TreeNode('g8', 'f6', 'bP', "Anglo Indian Defense",             16, 50, 45, 5, 2),
    new TreeNode('c7', 'c5', 'bP', "Symmetrical Variation",           10, 50, 46, 4, 2),
    new TreeNode('e7', 'e6', 'bP', "Agincourt Defense",                 9, 52, 43, 5, 2),
    new TreeNode('d7', 'd5', 'bN', "Anglo Scandinavian Defense",         7, 51, 45, 4, 2),
    new TreeNode('g7', 'g6', 'bP', "Great Snake Variation",               6, 51, 45, 4, 2),
    new TreeNode('c7', 'c6', 'bP', "Caro-Kann Defensive System",           5, 49, 46, 5, 2),
    new TreeNode('d7', 'd6', 'bP', "No known name",                   5, 53, 43, 4, 2),
    new TreeNode('b7', 'b6', 'bP', "No known name",               5, 51, 45, 4, 2),
    new TreeNode('f7', 'f5', 'bP', "Anglo-Dutch Defense",          3, 52, 44, 4, 2),
    new TreeNode('b8', 'c6', 'bN', "Anglo-Lithuanian Variation",               2, 51, 45, 4, 2),
    new TreeNode('b7', 'b5', 'bP', "Jaenisch Gambit",                1, 54, 42, 4, 2)
];

tree.children[4].children=[     
    new TreeNode('e7', 'e5', 'bP', "No known name",             32, 51, 44, 5, 2),
    new TreeNode('g8', 'f6', 'bP', "No known name",             16, 50, 45, 5, 2),
    new TreeNode('c7', 'c5', 'bP', "No known name",           10, 50, 46, 4, 2),
    new TreeNode('e7', 'e6', 'bP', "No known name",     9, 52, 43, 5, 2),
    new TreeNode('d7', 'd5', 'bN', "No known name",         7, 51, 45, 4, 2),
    new TreeNode('g7', 'g6', 'bP', "No known name",               6, 51, 45, 4, 2),
    new TreeNode('c7', 'c6', 'bP', "No known name",           5, 49, 46, 5, 2),
    new TreeNode('d7', 'd6', 'bP', "No known name",                   5, 53, 43, 4, 2),
    new TreeNode('b7', 'b6', 'bP', "No known name",               5, 51, 45, 4, 2),
    new TreeNode('f7', 'f5', 'bP', "No known name",          3, 52, 44, 4, 2),
    new TreeNode('b8', 'c6', 'bN', "No known name",               2, 51, 45, 4, 2),
    new TreeNode('b7', 'b5', 'bP', "No known name",                1, 54, 42, 4, 2)
];

tree.children[5].children=[     
    new TreeNode('e7', 'e5', 'bP', "No known name",             32, 51, 44, 5, 2),
    new TreeNode('g8', 'f6', 'bP', "No known name",             16, 50, 45, 5, 2),
    new TreeNode('c7', 'c5', 'bP', "No known name",           10, 50, 46, 4, 2),
    new TreeNode('e7', 'e6', 'bP', "Indian Defense",     9, 52, 43, 5, 2),
    new TreeNode('d7', 'd5', 'bN', "Sicilian Invitation",         7, 51, 45, 4, 2),
    new TreeNode('g7', 'g6', 'bP', "Symmetrical Variation",               6, 51, 45, 4, 2),
    new TreeNode('c7', 'c6', 'bP', "No known name",           5, 49, 46, 5, 2),
    new TreeNode('d7', 'd6', 'bP', "No known name",                   5, 53, 43, 4, 2),
    new TreeNode('b7', 'b6', 'bP', "No known name",               5, 51, 45, 4, 2),
    new TreeNode('f7', 'f5', 'bP', "No known name",          3, 52, 44, 4, 2),
    new TreeNode('b8', 'c6', 'bN', "Lasker Simul Special",               2, 51, 45, 4, 2),
    new TreeNode('b7', 'b5', 'bP', "Dutch Defense",                1, 54, 42, 4, 2)
];

tree.children[6].children=[     
    new TreeNode('e7', 'e5', 'bP', "Modern Variation",          28, 50, 46, 4, 2),
    new TreeNode('d7', 'd5', 'bP', "Classical Variation",       24, 50, 46, 4, 2),
    new TreeNode('g8', 'f6', 'bN', "Indian Variation",          12, 49, 47, 4, 2),
    new TreeNode('e7', 'e6', 'bP', "No known name",             9, 52, 45, 3, 2),
    new TreeNode('c7', 'c5', 'bP', "English Variation",         7, 50, 46, 4, 2),
    new TreeNode('g7', 'g6', 'bP', "Symmetrical Variation",     5, 50, 43, 7, 2),
    new TreeNode('c7', 'c6', 'bP', "No known name",             4, 53, 46, 3, 2),
    new TreeNode('d7', 'd6', 'bP', "No known name",             4, 50, 46, 4, 2),
    new TreeNode('b7', 'b6', 'bP', "Symmetrical Variation",     4, 50, 46, 4, 2),
    new TreeNode('b8', 'c6', 'bN', "No known name",             2, 51, 45, 4, 2),
    new TreeNode('b8', 'c6', 'bP', "Dutch Variation",           1, 51, 46, 3, 2),
    new TreeNode('a7', 'a5', 'bP', "No known name",             1, 49, 47, 4, 2)
];

tree.children[7].children=[     
    new TreeNode('d7', 'd5', 'bP', "Dutch Variation",        36, 50, 46, 4, 2),
    new TreeNode('e7', 'e6', 'bP', "No known name",          11, 51, 45, 4, 2),
    new TreeNode('c7', 'c5', 'bP', "No known name",          11, 49, 47, 4, 2),
    new TreeNode('e7', 'e5', 'bP', "From's Gambit",          10, 47, 49, 3, 2),
    new TreeNode('g8', 'f6', 'bN', "Bird Opening",           7, 49, 47, 4, 2),
    new TreeNode('d7', 'd6', 'bP', "No known name",          5, 49, 47, 4, 2),
    new TreeNode('g7', 'g6', 'bP', "No known name",          5, 47, 49, 4, 2),
    new TreeNode('c7', 'c6', 'bP', "No known name",          5, 50, 46, 4, 2),
    new TreeNode('b8', 'c6', 'bN', "No known name",          4, 50, 46, 4, 2),
    new TreeNode('b7', 'b6', 'bP', "No known name",          3, 50, 46, 4, 2),
    new TreeNode('f7', 'f5', 'bP', "No known name",          3, 52, 44, 3, 2),
    new TreeNode('f7', 'f6', 'bP', "No known name",          0, 52, 44, 4, 2)
];

tree.children[8].children=[     
    new TreeNode('d7', 'd5', 'bP', "No known name",        32, 48, 48, 4, 2),
    new TreeNode('e7', 'e5', 'bP', "Reversed Rat",         21, 47, 49, 4, 2),
    new TreeNode('g8', 'f6', 'bN', "No known name",        10, 47, 49, 4, 2),
    new TreeNode('e7', 'e6', 'bP', "No known name",        10, 49, 47, 4, 2),
    new TreeNode('c7', 'c5', 'bP', "No known name",        8, 47, 49, 4, 2),
    new TreeNode('g7', 'g6', 'bP', "No known name",        6, 47, 49, 4, 2),
    new TreeNode('d7', 'd6', 'bP', "No known name",        4, 48, 48, 4, 2),
    new TreeNode('c7', 'c6', 'bP', "No known name",        4, 47, 49, 4, 2),
    new TreeNode('b7', 'b6', 'bP', "No known name",        3, 48, 49, 3, 2),
    new TreeNode('b8', 'c6', 'bN', "No known name",        1, 47, 49, 4, 2),
    new TreeNode('f7', 'f5', 'bP', "No known name",        1, 49, 47, 3, 2),
    new TreeNode('a7', 'a6', 'bP', "No known name",        0, 49, 46, 5, 2)
];

tree.children[9].children=[     
    new TreeNode('d7', 'd5', 'bP', "No known name",        24, 49, 47, 4, 2),
    new TreeNode('e7', 'e5', 'bP', "Reversed Nimzowitsch", 24, 49, 47, 4, 2),
    new TreeNode('g8', 'f6', 'bN', "No known name",        14, 49, 46, 5, 2),
    new TreeNode('e7', 'e6', 'bP', "No known name",        9, 49, 47, 4, 2),
    new TreeNode('c7', 'c5', 'bP', "No known name",        7, 47, 49, 4, 2),
    new TreeNode('g7', 'g6', 'bP', "No known name",        6, 49, 47, 4, 2),
    new TreeNode('c7', 'c6', 'bP', "No known name",        5, 49, 48, 3, 2),
    new TreeNode('d7', 'd6', 'bP', "No known name",        4, 50, 46, 4, 2),
    new TreeNode('b7', 'c6', 'bN', "No known name",        3, 50, 45, 5, 2),
    new TreeNode('b7', 'b6', 'bP', "No known name",        2, 50, 47, 3, 2),
    new TreeNode('f7', 'f5', 'bP', "No known name",        1, 52, 45, 3, 2),
    new TreeNode('a7', 'a6', 'bP', "No known name",        0, 49, 47, 4, 2)
];

tree.children[10].children=[     
    new TreeNode('e7', 'e5', 'bP', "No known name",        36, 53, 44, 3, 2),
    new TreeNode('d7', 'd5', 'bP', "No known name",        21, 52, 45, 3, 2),
    new TreeNode('e7', 'e5', 'bP', "No known name",        11, 52, 44, 4, 2),
    new TreeNode('g8', 'f6', 'bN', "No known name",        11, 48, 48, 4, 2),
    new TreeNode('g7', 'g6', 'bP', "No known name",        5, 53, 43, 4, 2),
    new TreeNode('c7', 'c6', 'bP', "Outflank Variation",   4, 48, 48, 4, 2),
    new TreeNode('d7', 'd6', 'bP', "No known name",        3, 49, 47, 4, 2),
    new TreeNode('c7', 'c5', 'bP', "Birmingham Gambit",    3, 50, 47, 3, 2),
    new TreeNode('b7', 'b6', 'bP', "No known name",        3, 50, 46, 4, 2),
    new TreeNode('a7', 'a5', 'bP', "No known name",        2, 47, 48, 5, 2),
    new TreeNode('b7', 'b5', 'bP', "Symmetrical Variation",1, 53, 41, 6, 2),
    new TreeNode('f7', 'f5', 'bP', "Dutvh Defense",        1, 50, 46, 4, 2)
];

tree.children[11].children=[     
    new TreeNode('e7', 'e5', 'bP', "No known name",        29, 48, 48, 3, 2),
    new TreeNode('d7', 'd5', 'bP', "No known name",        24, 48, 48, 3, 2),
    new TreeNode('g8', 'f6', 'bN', "No known name",        10, 47, 49, 4, 2),
    new TreeNode('e7', 'e6', 'bP', "No known name",        9, 49, 48, 3, 2),
    new TreeNode('c7', 'c5', 'bP', "No known name",        9, 48, 49, 3, 2),
    new TreeNode('g7', 'g6', 'bP', "No known name",        6, 47, 49, 4, 2),
    new TreeNode('c7', 'c6', 'bP', "No known name",        4, 48, 48, 4, 2),
    new TreeNode('d7', 'd6', 'bP', "No known name",        4, 49, 48, 3, 2),
    new TreeNode('b7', 'b6', 'bP', "No known name",        3, 48, 49, 3, 2),
    new TreeNode('b8', 'c6', 'bN', "No known name",        1, 49, 47, 4, 2),
    new TreeNode('f7', 'f5', 'bP', "Dutvh Defense",        1, 49, 47, 4, 2),
    new TreeNode('f7', 'f6', 'bP', "No known name",        0, 50, 46, 4, 2)
];

//Todas respostas para a primeira resposta da primeira abertura (King's Pawn Game)
tree.children[0].children[0].children=[     
    new TreeNode('g1', 'f3', 'wN', "King's Knight Opening", 63, 51, 45, 4, 3),
    new TreeNode('f1', 'c4', 'wB', "Bishp's Opening",       10, 51, 45, 4, 3),
    new TreeNode('d2', 'd4', 'wP', "Center Game",            6, 52, 44, 4, 3),
    new TreeNode('f2', 'f4', 'wP', "King's Gambit",          6, 53, 44, 3, 3),
    new TreeNode('b1', 'c3', 'wN', "Vienna Game",            6, 51, 45, 4, 3),
    new TreeNode('d2', 'd3', 'wP', "Leonardis Variation",    3, 48, 48, 4, 3),
    new TreeNode('d1', 'h5', 'wQ', "Wayward Queen Attack",   2, 50, 46, 4, 3),
    new TreeNode('d1', 'f3', 'wQ', "Napoleon Attack",        1, 49, 47, 4, 3),
    new TreeNode('c2', 'c3', 'wP', "MacLeod Attack",         1, 49, 47, 4, 3),
    new TreeNode('c2', 'c4', 'wP', "English Opening",        0, 48, 48, 4, 3),
    new TreeNode('f2', 'f3', 'wP', "King's Head Openin",     0, 42, 54, 4, 3),
    new TreeNode('g2', 'g3', 'wP', "No known name",          0, 48, 48, 4, 3)
]

//Todas respostas para a primeira resposta da primeira abertura (King's Pawn Game)
tree.children[0].children[0].children=[     
    new TreeNode('g1', 'f3', 'wN', "King's Knight Opening", 63, 51, 45, 4, 3),
    new TreeNode('f1', 'c4', 'wB', "Bishp's Opening",       10, 51, 45, 4, 3),
    new TreeNode('d2', 'd4', 'wP', "Center Game",            6, 52, 44, 4, 3),
    new TreeNode('f2', 'f4', 'wP', "King's Gambit",          6, 53, 44, 3, 3),
    new TreeNode('b1', 'c3', 'wN', "Vienna Game",            6, 51, 45, 4, 3),
    new TreeNode('d2', 'd3', 'wP', "Leonardis Variation",    3, 48, 48, 4, 3),
    new TreeNode('d1', 'h5', 'wQ', "Wayward Queen Attack",   2, 50, 46, 4, 3),
    new TreeNode('d1', 'f3', 'wQ', "Napoleon Attack",        1, 49, 47, 4, 3),
    new TreeNode('c2', 'c3', 'wP', "MacLeod Attack",         1, 49, 47, 4, 3),
    new TreeNode('c2', 'c4', 'wP', "English Opening",        0, 48, 48, 4, 3),
    new TreeNode('f2', 'f3', 'wP', "King's Head Openin",     0, 42, 54, 4, 3),
    new TreeNode('g2', 'g3', 'wP', "No known name",          0, 48, 48, 4, 3)
]

tree.children[0].children[1].children=[
    new TreeNode('g1', 'f3', 'wN', "Sicilian Defense", 55, 48, 48, 4, 3),
    new TreeNode('b1', 'c3', 'wN', "Closed", 10, 49, 47, 4, 3),
    new TreeNode('f1', 'c4', 'wB', "Bowdler Attack", 10, 45, 41, 4, 3),
    new TreeNode('d2', 'd4', 'wP', "Smith-Morra Gambit", 9, 49, 48, 3, 3),
    new TreeNode('c2', 'c3', 'wP', "Alapin Variation", 5, 50, 46, 4, 3),
    new TreeNode('f2', 'f4', 'wP', "McDonnel Attack", 5, 48, 49, 3, 3),
    new TreeNode('d2', 'd3', 'wP', "No known name", 3, 46, 50, 4, 3),
    new TreeNode('c2', 'c4', 'wP', "Stauton-Cochrane Variation", 1, 46, 50, 4, 3),
    new TreeNode('b2', 'b4', 'wP', "Wing Gambit", 1, 49, 47, 4, 3),
    new TreeNode('d1', 'f3', 'wQ', "No known name", 1, 44, 53, 3, 3),
    new TreeNode('e4', 'e5', 'wP', "No known name", 1, 45, 51, 4, 3),
    new TreeNode('d1', 'h5', 'wQ', "No known name", 1, 42, 55, 3, 3)
];

tree.children[0].children[2].children=[
    new TreeNode('d2', 'd4', 'wP', "Normal variation", 44, 49, 47, 4, 3),
    new TreeNode('g1', 'f3', 'wN', "Knight Variation", 30, 48, 49, 3, 3),
    new TreeNode('b1', 'c3', 'wN', "Queen's Knight", 7, 48, 48, 4, 3),
    new TreeNode('f1', 'c4', 'wB', "No known name", 5, 45, 52, 3, 3),
    new TreeNode('f2', 'f4', 'wP', "La Bourdonnais Variation", 4, 48, 49, 3, 3),
    new TreeNode('d2', 'd3', 'wP', "King's Indiant Attack", 4, 49, 47, 4, 3),
    new TreeNode('e4', 'e5', 'wP', "Steinitz Attack", 3, 46, 50, 4, 3),
    new TreeNode('c2', 'c4', 'wP', "Steiner Variation", 2, 51, 45, 4, 3),
    new TreeNode('d1', 'f3', 'wQ', "No knonw name", 1, 44, 52, 4, 3),
    new TreeNode('b2', 'b3', 'wP', "Horwitz Attack", 1, 50, 46, 4, 3),
    new TreeNode('d1', 'e2', 'wQ', "Chigorin Variation", 0, 53, 43, 4, 3),
    new TreeNode('c2', 'c3', 'wP', "No known name", 0, 46, 50, 4, 3)
];

tree.children[0].children[3].children=[
    new TreeNode('e4', 'd5', 'wP', "No knonw name", 67, 50, 46, 4, 3),
    new TreeNode('e4', 'e5', 'wP', "No knonw name", 11, 49, 47, 4, 3),
    new TreeNode('g1', 'f3', 'wN', "Zukertort Opening", 8, 47, 50, 3, 3),
    new TreeNode('b1', 'c3', 'wN', "No knonw name", 6, 48, 48, 4, 3),
    new TreeNode('d2', 'd4', 'wP', "Blackmar-Diemer Gambit", 3, 49, 48, 3, 3,),
    new TreeNode('d2', 'd3', 'wP', "No knonw name", 2, 45, 49, 4, 3),
    new TreeNode('f2', 'f3', 'wP', "No knonw name", 1, 44, 52, 4, 3),
    new TreeNode('d1', 'f3', 'wQ', "No knonw name", 1, 45, 52, 3, 3),
    new TreeNode('f2', 'f4', 'wP', "Bird Opening", 1, 46, 51, 3, 3),
    new TreeNode('f1', 'c4', 'wB', "No knonw name", 1, 35, 62, 3, 3),
    new TreeNode('d1', 'h5', 'wQ', "No knonw name", 0, 40, 56, 4, 3),
    new TreeNode('f1', 'd3', 'wB', "No knonw name", 0, 44, 52, 4, 3)
];

tree.children[0].children[4].children=[
    new TreeNode('d2', 'd4', 'wP', "Caro-Kann Defense", 42, 49, 47, 4, 3),
    new TreeNode('g1', 'f3', 'wN', "No knonw name", 30, 46, 50, 4, 3),
    new TreeNode('b1', 'c3', 'wN', "Caro-Kann Defense", 47, 48, 5, 3),
    new TreeNode('f1', 'c4', 'wB', "Hillbilly Attack", 7, 43, 53, 4, 3),
    new TreeNode('f2', 'f4', 'wP', "No knonw name", 4, 48, 49, 3, 3),
    new TreeNode('d2', 'd3', 'wP', "breyer Variation", 3, 47, 48, 5, 3),
    new TreeNode('c2', 'c4', 'wP', "Accelerated Panov Attack", 2, 50, 45, 5, 3),
    new TreeNode('e4', 'e5', 'wP', "No knonw name", 1, 47, 49, 4, 3),
    new TreeNode('d1', 'f3', 'wQ', "No knonw name", 1, 44, 52, 4, 3),
    new TreeNode('c1', 'c3', 'wP', "No knonw name", 1, 46, 51, 3, 3),
    new TreeNode('d1', 'h5', 'wQ', "No knonw name", 0, 40, 56, 6, 3),
    new TreeNode('g2', 'g3', 'wP', "No knonw name", 0, 46, 50, 4, 3)
];

tree.children[0].children[5].children=[
    new TreeNode('d2', 'd4', 'wP', "Pirc Defense", 46, 49, 47, 4, 3),
    new TreeNode('g1', 'f3', 'wN', "No knonw name", 29, 49, 48, 3, 3),
    new TreeNode('b1', 'c3', 'wN', "No knonw name", 29, 49, 48, 3, 3),
    new TreeNode('f1', 'c4', 'wB', "No knonw name", 7, 50, 47, 3, 3),
    new TreeNode('f2', 'f4', 'wP', "Rat Defense", 4, 50, 47, 3, 3),
    new TreeNode('d2', 'd3', 'wP', "No knonw name", 3, 48, 48, 4, 3),
    new TreeNode('d1', 'f3', 'wQ', "No knonw name", 1, 48, 48, 4, 3),
    new TreeNode('c2', 'c4', 'wP', "No knonw name", 1, 48, 48, 4, 3),
    new TreeNode('c2', 'c3', 'wP', "No knonw name", 0, 48, 48, 4, 3),
    new TreeNode('e4', 'e5', 'wP', "No knonw name", 0, 48, 48, 4, 3),
    new TreeNode('d1', 'h5', 'wQ', "No knonw name", 0, 44, 52, 4, 3),
    new TreeNode('g2', 'g3', 'wP', "No knonw name", 0, 49, 47, 4, 3)
];

tree.children[0].children[6].children=[
    new TreeNode('d2', 'd4', 'wP', "No knonw name", 41, 49, 47, 4, 3),
    new TreeNode('g1', 'f3', 'wN', "No knonw name", 29, 49, 48, 3, 3),
    new TreeNode('b1', 'c3', 'wN', "No knonw name", 8, 50, 47, 3, 3),
    new TreeNode('f1', 'c4', 'wB', "No knonw name", 8, 48, 49, 3, 3),
    new TreeNode('f2', 'f4', 'wP', "No knonw name", 5, 49, 48, 3, 3),
    new TreeNode('d2', 'd3', 'wP', "No knonw name", 3, 47, 49, 4, 3),
    new TreeNode('e2', 'e5', 'wP', "No knonw name", 2, 46, 50, 4, 3),
    new TreeNode('d1', 'f3', 'wQ', "No knonw name", 1, 46, 51, 3, 3),
    new TreeNode('c2', 'c3', 'wP', "No knonw name", 1, 46, 50, 4, 3),
    new TreeNode('h2', 'h4', 'wP', "No knonw name", 1, 53, 43, 4, 3),
    new TreeNode('b2', 'b3', 'wP', "No knonw name", 1, 44, 52, 4, 3),
    new TreeNode('g2', 'g3', 'wP', "No knonw name", 0, 47, 48, 5, 3)
];

tree.children[0].children[7].children=[
    new TreeNode('d2', 'd4', 'wP', "No knonw name", 37, 51, 45, 4, 3),
    new TreeNode('g1', 'f3', 'wN', "No knonw name", 32, 50, 47, 3, 3),
    new TreeNode('b1', 'c3', 'wN', "No knonw name", 9, 50, 46, 4, 3),
    new TreeNode('f1', 'c4', 'wB', "No knonw name", 9, 49, 48, 3, 3),
    new TreeNode('f2', 'f4', 'wP', "No knonw name", 4, 50, 47, 3, 3),
    new TreeNode('d2', 'd3', 'wP', "No knonw name", 3, 48, 48, 2, 3),
    new TreeNode('d1', 'f3', 'wQ', "No knonw name", 2, 47, 50, 3, 3),
    new TreeNode('g2', 'g3', 'wP', "No knonw name", 1, 50, 46, 4, 3),
    new TreeNode('e2', 'e5', 'wP', "No knonw name", 1, 48, 49, 3, 3),
    new TreeNode('c2', 'c4', 'wP', "No knonw name", 1, 49, 47, 4, 3),
    new TreeNode('f2', 'f3', 'wP', "No knonw name", 1, 46, 50, 4, 3),
    new TreeNode('f1', 'e2', 'wB', "No knonw name", 1, 55, 42, 3, 3)
];

tree.children[0].children[8].children=[
    new TreeNode('e4', 'e5', 'wP', "No knonw name", 45, 49, 47, 4, 3),
    new TreeNode('b1', 'c3', 'wN', "No knonw name", 30, 49, 47, 4, 3),
    new TreeNode('g1', 'f3', 'wN', "Zukertort Opening", 9, 45, 52, 3, 3),
    new TreeNode('d2', 'd3', 'wP', "Maroczy Variation", 7, 48, 48, 4, 3),
    new TreeNode('f2', 'c4', 'wB', "Krejcik Variation", 3, 46, 50, 4, 3),
    new TreeNode('d2', 'd4', 'wP', "Indian Defense", 2, 46, 51, 3, 3),
    new TreeNode('d1', 'f3', 'wQ', "No knonw name", 1, 49, 48, 3, 3),
    new TreeNode('f2', 'f3', 'wP', "No knonw name", 1, 44, 51, 5, 3),
    new TreeNode('f2', 'f4', 'wP', "No knonw name", 1, 45, 52, 3, 3),
    new TreeNode('f1', 'd3', 'wB', "No knonw name", 0, 46, 50, 4, 3),
    new TreeNode('d1', 'e2', 'wQ', "No knonw name", 0, 47, 49, 4, 3),
    new TreeNode('c2', 'c3', 'wP', "No knonw name", 0, 44, 53, 3, 3)
];

tree.children[0].children[9].children=[
    new TreeNode('g1', 'f3', 'wN', "Declined Variation", 41, 51, 45, 4, 3),
    new TreeNode('d2', 'd4', 'wP', "Nimzowitsch Defense", 28, 50, 46, 4, 3),
    new TreeNode('b1', 'c3', 'wN', "No knonw name", 9, 51, 45, 4, 3),
    new TreeNode('f1', 'c4', 'wB', "No knonw name", 8, 51, 46, 3, 3),
    new TreeNode('f2', 'f4', 'wP', "No knonw name", 4, 50, 47, 3, 3),
    new TreeNode('d2', 'd3', 'wP', "No knonw name", 3, 48, 48, 4, 3),
    new TreeNode('f1', 'b5', 'wB', "Pseudo-spanish Variation", 2, 49, 47, 4, 3),
    new TreeNode('c2', 'c3', 'wP', "No knonw name", 1, 48, 48, 4, 3),
    new TreeNode('d1', 'f3', 'wB', "No knonw name", 1, 49, 47, 4, 3),
    new TreeNode('d1', 'h5', 'wQ', "No knonw name", 1, 45, 51, 4, 3),
    new TreeNode('g2', 'g3', 'wP', "No knonw name", 0, 48, 48, 4, 3),
    new TreeNode('c2', 'c4', 'wP', "No knonw name", 0, 48, 48, 4, 3)
];

//TO MEXENO AQ

//Todas respostas para a segunda abertura (Queen's Pawn Opening)
tree.children[1].children=[     
    new TreeNode('d7', 'd5', 'bP', "Queen's Pawn Game", 42, 52, 44, 4, 2),
    new TreeNode('g8', 'f6', 'bN', "Indian Defense",    20, 49, 47, 4, 2),
    new TreeNode('e7', 'e6', 'bP', "Horwitz Defense",   10, 51, 45, 4, 2),
    new TreeNode('e7', 'e5', 'bP', "Englund Gambit",     6, 49, 47, 4, 2),
    new TreeNode('g7', 'g6', 'bP', "Modern Defense",     5, 49, 47, 4, 2),
    new TreeNode('c7', 'c5', 'bP', "Benoni Defense",     5, 48, 49, 3, 2),
    new TreeNode('d7', 'd6', 'bP', "Queen's Pawn Game",  4, 49, 47, 4, 2),
    new TreeNode('c7', 'c6', 'bP', "No known name",      4, 50, 46, 4, 2),
    new TreeNode('b7', 'b6', 'bP', "English Defense",    2, 50, 46, 4, 2),
    new TreeNode('f7', 'f5', 'bP', "Dutch Defense",      2, 50, 46, 4, 2),
    new TreeNode('b8', 'c6', 'bP', "Mikenas Defense",    1, 53, 44, 3, 2),
    new TreeNode('f7', 'f6', 'bP', "No known name",      0, 54, 43, 3, 2)
];

tree.children[1].children[0].children=[
    new TreeNode('c2', 'c4', 'wP', "Queen's Gambit",            41, 53, 43, 4, 3),
    new TreeNode('c1', 'f4', 'wB', "Accelerated Londo System",  18, 52, 44, 4, 3),
    new TreeNode('g1', 'f3', 'wN', "Zukertort Variation",       17, 52, 44, 4, 3),
    new TreeNode('e2', 'e3', 'wP', "Queen's Pawn Game",         10, 50, 46, 4, 3),
    new TreeNode('b1', 'c3', 'wN', "Chigorin Variation",        6, 50, 46, 4, 3),
    new TreeNode('e2', 'e4', 'wP', "Blackmar-Diemer Gambit",    2, 51, 46, 3, 3),
    new TreeNode('c1', 'g5', 'wB', "Levitsky Attack",           2, 54, 43, 2, 3),
    new TreeNode('c2', 'c3', 'wP', "No known name",             2, 49, 46, 5, 3),
    new TreeNode('g2', 'g3', 'wP', "No known name",             1, 50, 49, 1, 3),
    new TreeNode('f2', 'f4', 'wP', "Mason Attack",              1, 50, 45, 5, 3),
    new TreeNode('h2', 'h3', 'wP', "No known name",             0, 49, 46, 5, 3),
    new TreeNode('f2', 'f3', 'wP', "No known name",             0, 45, 51, 4, 3)
]

//ANA B MEXENO AQ


tree.children[2].children=[     
    new TreeNode('d7', 'd5', 'bP', "Zukerfort Opening",             32, 51, 44, 5, 2),
    new TreeNode('g8', 'f6', 'bN', "Zukerfort Opening",             16, 50, 45, 5, 2),
    new TreeNode('c7', 'c5', 'bP', "Sicilian Invitation",           10, 50, 46, 4, 2),
    new TreeNode('e7', 'e6', 'bP', "Queen's Gambit Invitation",     9, 52, 43, 5, 2),
    new TreeNode('b8', 'c6', 'bN', "Black Mustang Defense",         7, 51, 45, 4, 2),
    new TreeNode('d7', 'd6', 'bP', "Pirc Inivtation",               6, 51, 45, 4, 2),
    new TreeNode('g7', 'g6', 'bP', "Kingside Fianccheto",           5, 49, 46, 5, 2),
    new TreeNode('e7', 'e5', 'bP', "Ross Gambit",                   5, 53, 43, 4, 2),
    new TreeNode('c7', 'c6', 'bP', "Slav Invitation",               5, 51, 45, 4, 2),
    new TreeNode('b7', 'b6', 'bP', "Queenside Fianccheto",          3, 52, 44, 4, 2),
    new TreeNode('f7', 'f5', 'bP', "Dutch Variation",               2, 51, 45, 4, 2),
    new TreeNode('f7', 'f6', 'bP', "Arctic Defense",                1, 54, 42, 4, 2)
];

tree.children[3].children=[     
    new TreeNode('e7', 'e5', 'bP', "King's English Variation",             32, 51, 44, 5, 2),
    new TreeNode('g8', 'f6', 'bP', "Anglo Indian Defense",             16, 50, 45, 5, 2),
    new TreeNode('c7', 'c5', 'bP', "Symmetrical Variation",           10, 50, 46, 4, 2),
    new TreeNode('e7', 'e6', 'bP', "Agincourt Defense",                 9, 52, 43, 5, 2),
    new TreeNode('d7', 'd5', 'bN', "Anglo Scandinavian Defense",         7, 51, 45, 4, 2),
    new TreeNode('g7', 'g6', 'bP', "Great Snake Variation",               6, 51, 45, 4, 2),
    new TreeNode('c7', 'c6', 'bP', "Caro-Kann Defensive System",           5, 49, 46, 5, 2),
    new TreeNode('d7', 'd6', 'bP', "No known name",                   5, 53, 43, 4, 2),
    new TreeNode('b7', 'b6', 'bP', "No known name",               5, 51, 45, 4, 2),
    new TreeNode('f7', 'f5', 'bP', "Anglo-Dutch Defense",          3, 52, 44, 4, 2),
    new TreeNode('b8', 'c6', 'bN', "Anglo-Lithuanian Variation",               2, 51, 45, 4, 2),
    new TreeNode('b7', 'b5', 'bP', "Jaenisch Gambit",                1, 54, 42, 4, 2)
];

tree.children[4].children=[     
    new TreeNode('e7', 'e5', 'bP', "No known name",             32, 51, 44, 5, 2),
    new TreeNode('g8', 'f6', 'bP', "No known name",             16, 50, 45, 5, 2),
    new TreeNode('c7', 'c5', 'bP', "No known name",           10, 50, 46, 4, 2),
    new TreeNode('e7', 'e6', 'bP', "No known name",     9, 52, 43, 5, 2),
    new TreeNode('d7', 'd5', 'bN', "No known name",         7, 51, 45, 4, 2),
    new TreeNode('g7', 'g6', 'bP', "No known name",               6, 51, 45, 4, 2),
    new TreeNode('c7', 'c6', 'bP', "No known name",           5, 49, 46, 5, 2),
    new TreeNode('d7', 'd6', 'bP', "No known name",                   5, 53, 43, 4, 2),
    new TreeNode('b7', 'b6', 'bP', "No known name",               5, 51, 45, 4, 2),
    new TreeNode('f7', 'f5', 'bP', "No known name",          3, 52, 44, 4, 2),
    new TreeNode('b8', 'c6', 'bN', "No known name",               2, 51, 45, 4, 2),
    new TreeNode('b7', 'b5', 'bP', "No known name",                1, 54, 42, 4, 2)
];

tree.children[5].children=[     
    new TreeNode('e7', 'e5', 'bP', "No known name",             32, 51, 44, 5, 2),
    new TreeNode('g8', 'f6', 'bP', "No known name",             16, 50, 45, 5, 2),
    new TreeNode('c7', 'c5', 'bP', "No known name",           10, 50, 46, 4, 2),
    new TreeNode('e7', 'e6', 'bP', "Indian Defense",     9, 52, 43, 5, 2),
    new TreeNode('d7', 'd5', 'bN', "Sicilian Invitation",         7, 51, 45, 4, 2),
    new TreeNode('g7', 'g6', 'bP', "Symmetrical Variation",               6, 51, 45, 4, 2),
    new TreeNode('c7', 'c6', 'bP', "No known name",           5, 49, 46, 5, 2),
    new TreeNode('d7', 'd6', 'bP', "No known name",                   5, 53, 43, 4, 2),
    new TreeNode('b7', 'b6', 'bP', "No known name",               5, 51, 45, 4, 2),
    new TreeNode('f7', 'f5', 'bP', "No known name",          3, 52, 44, 4, 2),
    new TreeNode('b8', 'c6', 'bN', "Lasker Simul Special",               2, 51, 45, 4, 2),
    new TreeNode('b7', 'b5', 'bP', "Dutch Defense",                1, 54, 42, 4, 2)
];

tree.children[6].children=[     
    new TreeNode('e7', 'e5', 'bP', "Modern Variation",          28, 50, 46, 4, 2),
    new TreeNode('d7', 'd5', 'bP', "Classical Variation",       24, 50, 46, 4, 2),
    new TreeNode('g8', 'f6', 'bN', "Indian Variation",          12, 49, 47, 4, 2),
    new TreeNode('e7', 'e6', 'bP', "No known name",             9, 52, 45, 3, 2),
    new TreeNode('c7', 'c5', 'bP', "English Variation",         7, 50, 46, 4, 2),
    new TreeNode('g7', 'g6', 'bP', "Symmetrical Variation",     5, 50, 43, 7, 2),
    new TreeNode('c7', 'c6', 'bP', "No known name",             4, 53, 46, 3, 2),
    new TreeNode('d7', 'd6', 'bP', "No known name",             4, 50, 46, 4, 2),
    new TreeNode('b7', 'b6', 'bP', "Symmetrical Variation",     4, 50, 46, 4, 2),
    new TreeNode('b8', 'c6', 'bN', "No known name",             2, 51, 45, 4, 2),
    new TreeNode('b8', 'c6', 'bP', "Dutch Variation",           1, 51, 46, 3, 2),
    new TreeNode('a7', 'a5', 'bP', "No known name",             1, 49, 47, 4, 2)
];





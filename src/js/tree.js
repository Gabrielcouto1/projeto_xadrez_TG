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
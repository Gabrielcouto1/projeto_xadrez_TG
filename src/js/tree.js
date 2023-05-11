export class TreeNode{
    constructor(source, target, piece, name, pickPercentage, whiteWR, blackWR, drawRate){
        this.source         = source         || null;
        this.target         = target         || null;
        this.piece          = piece          || null;
        this.name           = name           || null;
        this.pickPercentage = pickPercentage || null;
        this.whiteWinRate   = whiteWR        || null;
        this.blackWinRate   = blackWR        || null;
        this.drawRate       = drawRate       || null;
        this.children = [];
    }

    findNode(source, target, piece) {
        if (this.source === source &&this.target === target &&this.piece === piece)
          return this; 

        for (const child of this.children) {
            const foundNode = child.findNode(source, target, piece);
            if (foundNode) 
                return foundNode; 
        }
        return null; 
    }

}

export const tree = new TreeNode();
console.log(tree);

tree.children=[     //Todas primeiras jogadas adicionadas
    new TreeNode('e2', 'e4', 'wP', "King's Pawn Opening",  59, 49, 47, 4),
    new TreeNode('d2', 'd4', 'wP', "Queen's Pawn Opening", 26, 50, 45, 5),
    new TreeNode('g1', 'f3', 'wN', "Zukertort Opening", 4, 51, 44, 5),
    new TreeNode('c2', 'c4', 'wP', "English Opening", 3, 51, 45, 5),
    new TreeNode('e2', 'e3', 'wP', "Van't Kruijs Opening", 2, 47, 49, 4),
    new TreeNode('g2', 'g3', 'wP', "Hungarian Opening",    2, 50, 46, 4),
    new TreeNode('b2', 'b3', 'wP', "Nimzo-Larsen Attack",  2, 50, 46, 4),
    new TreeNode('f2', 'f4', 'wP', "Bird Opening",         1, 50, 47, 3),
    new TreeNode('d2', 'd3', 'wP', "Mieses Opening",       1, 48, 49, 3),
    new TreeNode('b1', 'c3', 'wN', "Van Geet Opening",     1, 49, 47, 4),
    new TreeNode('b2', 'b4', 'wP', "Polish Opening",       0, 51, 45, 4),
    new TreeNode('c2', 'c3', 'wP', "Saragossa Opening",    0, 48, 48, 4)
];


// const kingPawnGame = new TreeNode('e7', 'e5', 'bP', "King's Pawn Game", 41, 41, 35, 4);     //Jogada 2 (resposta da jogada 1)
// const kingKnightOp = new TreeNode('g1', 'f3', 'wN', "King's Knight Opening", 63, 51, 45, 4);//Jogada 3 (resposta da jogada 2)
// const normalVariation = new TreeNode('b8', 'c6', 'bN', "Normal Variation", 63, 51, 45, 4);  //Jogada 4 (resposta da jogada 3)



// kingKnightOp.children.push(normalVariation);                                                  //Insere a jogada 4 como filha da jogada 3
// kingPawnGame.children.push(kingKnightOp);                                                     //Insere a jogada 3 como filha da jogada 2
// tree.children.push(kingPawnGame);  
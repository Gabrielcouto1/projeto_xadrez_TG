class TreeNode{
    constructor(source, target, piece, name, pickPercentage, whiteWR, blackWR, drawRate){
        this.source         = source;
        this.target         = target;
        this.piece          = piece;
        this.name           = name;
        this.pickPercentage = pickPercentage;
        this.whiteWinRate   = whiteWR;
        this.blackWinRate   = blackWR;
        this.drawRate       = drawRate;
        this.childs = [];
    }
}

const kingPawnOp = new TreeNode('e2', 'e4', 'wP', "King's Pawn Opening", 59, 49, 47, 4);    //Jogada 1
const kingPawnGame = new TreeNode('e5', 'e7', 'bP', "King's Pawn Game", 41, 41, 35, 4);     //Jogada 2 (resposta da jogada 1)
const kingKnightOp = new TreeNode('g7', 'f3', 'wK', "King's Knight Opening", 63, 51, 45, 4);//Jogada 3 (resposta da jogada 2)
const normalVariation = new TreeNode('b8', 'c6', 'wK', "Normal Variation", 63, 51, 45, 4);  //Jogada 4 (resposta da jogada 3)


kingKnightOp.childs.push(normalVariation);                                                  //Insere a jogada 4 como filha da jogada 3
kingPawnGame.childs.push(kingKnightOp);                                                     //Insere a jogada 3 como filha da jogada 2
kingPawnOp.childs.push(kingPawnGame);                                                       //Insere a jogada 2 como filha da jogada 1

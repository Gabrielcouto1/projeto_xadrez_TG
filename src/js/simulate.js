import * as decTree from "./tree.js";

let i = 1;
//Elementos do html
const moveNumber     = document.getElementById('moveNumber');
const name           = document.getElementById('name');
const pickPercentage = document.getElementById('pickPercentage');
const whiteWR        = document.getElementById('whiteWR');
const blackWr        = document.getElementById('blackWR');
const drawRate       = document.getElementById('drawRate');
const winRateDiff    = document.getElementById('winRate-diff');
const loseRateDiff    = document.getElementById('loseRate-diff');
const drawRateDiff    = document.getElementById('drawRate-diff');
const resetButton    = document.getElementById("reset-btn");

//Arvore de decisao importada do arquivo tree.js
let tree = decTree.tree;

//Configuracoes do tabuleiro
let config = {
    draggable: true,
    position: 'start',
    onDrop: onDrop,
    sparePieces: false
};

//Criacao do tabuleiro no html
let board = ChessBoard('board1', config);

//Nó da jogada feita na simulacao
let foundNode = null;
let previousWWR = 0;
let previousBWR = 0;

//Funcao para printar no console e no html a jogada feita
function onDrop (source, target, piece) {
    console.log('Source: ' + source);
    console.log('Target: ' + target);
    console.log('Piece: ' + piece);
    console.log('MoveNumber: ' + i);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

    if(foundNode!=null){
        previousWWR = foundNode.whiteWinRate;
        previousBWR = foundNode.blackWinRate;
    }

    foundNode=(tree.findNode(source, target, piece, i));
    printPlay(foundNode, i);
    printWinRateDiff(foundNode, previousWWR, previousBWR);
    i++;
}

function printWinRateDiff(node, previousWWR, previousBWR) {
    if (node!=null) {
        if (previousWWR!=0) {
            winRateDiff.textContent =`Diferença da porcentagem de vitória: ${node.whiteWinRate - previousWWR}%`;
            loseRateDiff.textContent=`Diferença da porcentagem de derrota: ${node.blackWinRate - previousBWR}%`;
            drawRateDiff.textContent=`Diferença da porcentagem de empate: ${node.drawRate - (100-(previousBWR+previousWWR))}%`;
        }
        else{
            winRateDiff.textContent =`Porcentagem de vitória: ${node.whiteWinRate }%`;
            loseRateDiff.textContent=`Porcentagem de derrota: ${node.blackWinRate }%`;
            drawRateDiff.textContent=`Porcentagem de empate: ${node.drawRate}%`;
        }
    }
}

//Altera o html com a jogada feita e suas informacoes
function printPlay(foundNode, i) {
    if (foundNode) {
        tree=foundNode;
        moveNumber.textContent     =`Jogada: ${i}`;
        name.textContent           =`Nome: ${foundNode.name}`;
        pickPercentage.textContent =`Porcentagem de escolha: ${foundNode.pickPercentage}%`;
        whiteWR.textContent        =`Porcentagem de vitória das brancas: ${foundNode.whiteWinRate}%`;
        blackWr.textContent        =`Porcentagem de vitória das pretas: ${foundNode.blackWinRate}%`;
        drawRate.textContent       =`Porcentagem de empate: ${foundNode.drawRate}%`;
        console.log('Nó encontrado:', foundNode);
    } else {
        moveNumber.textContent     =`Não foi encontrada nenhuma jogada.`;
        name.textContent           =`Jogada: ${i}`;
        pickPercentage.textContent =``;
        whiteWR.textContent        =``;
        blackWr.textContent        =``;
        drawRate.textContent       =``;
        winRateDiff.textContent    =``;
        loseRateDiff.textContent   =``;
        drawRateDiff.textContent   =``;
        console.log('Nó não encontrado.');
    }
}

resetButton.addEventListener("click", function() {
    location.reload();
});
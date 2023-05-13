import * as decTree from "./tree.js";

let i = 1;
//Elementos do html
const moveNumber     = document.getElementById('moveNumber');
const name           = document.getElementById('name');
const pickPercentage = document.getElementById('pickPercentage');
const whiteWR        = document.getElementById('whiteWR');
const blackWr        = document.getElementById('blackWR');
const drawRate       = document.getElementById('drawRate');
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

//Funcao para printar no console e no html a jogada feita
function onDrop (source, target, piece) {
    console.log('Source: ' + source);
    console.log('Target: ' + target);
    console.log('Piece: ' + piece);
    console.log('MoveNumber: ' + i);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    printPlay(tree.findNode(source, target, piece, i), i)
    
    i++;
}

//Funcao para resetar o tabuleiro quando clicar no botao de reset
resetButton.addEventListener("click", function() {
    var board = ChessBoard('board1', config);
    i=1;    
    tree=decTree.tree;
    resetHtml();
});

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
        console.log('Nó não encontrado.');
    }
}

//Reseta o html pro começo
function resetHtml() {
    moveNumber.textContent=`Jogada 1`;
    name.textContent=``;
    pickPercentage.textContent=``;
    whiteWR.textContent=``;
    blackWr.textContent=``;
    drawRate.textContent=``;
}
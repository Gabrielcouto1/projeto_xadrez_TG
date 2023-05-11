import * as test from "./tree.js";

let tree = test.tree;
function onDrop (source, target, piece) {
    console.log('Source: ' + source);
    console.log('Target: ' + target);
    console.log('Piece: ' + piece);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

    const foundNode = tree.findNode(source, target, piece);
    if (foundNode) {
        // tree=foundNode;
        console.log('Nó encontrado:', foundNode);
        document.getElementById('name').textContent=`Nome: ${foundNode.name}`;
        document.getElementById('pickPercentage').textContent=`Porcentagem de escolha: ${foundNode.pickPercentage}%`;
        document.getElementById('whiteWR').textContent=`Porcentagem de vitória das brancas: ${foundNode.whiteWinRate}%`;
        document.getElementById('blackWR').textContent=`Porcentagem de vitória das pretas: ${foundNode.blackWinRate}%`;
        document.getElementById('drawRate').textContent=`Porcentagem de empate: ${foundNode.drawRate}%`;
    } else {
        document.getElementById('name').textContent=`Não foi encontrada nenhuma jogada.`;
        document.getElementById('pickPercentage').textContent=``;
        document.getElementById('whiteWR').textContent=``;
        document.getElementById('blackWR').textContent=``;
        document.getElementById('drawRate').textContent=``;
        console.log('Nó não encontrado.');
    }
}

var config = {
    draggable: true,
    position: 'start',
    onDrop: onDrop,
    sparePieces: false
};

var board = ChessBoard('board1', config);


import * as decTree from "./tree.js";

//Elementos do html
const moveNumber     = document.getElementById('moveNumber');
const name           = document.getElementById('name');
const pickPercentage = document.getElementById('pickPercentage');
const whiteWR        = document.getElementById('whiteWR');
const blackWr        = document.getElementById('blackWR');
const drawRate       = document.getElementById('drawRate');
const resetButton = document.getElementById("reset-btn");

//Arvore de decisao importada do arquivo tree.js
let tree = decTree.tree;

//Configuracoes do tabuleiro
let config = {
    draggable: false,
    position: 'start',
    sparePieces: false
};

//Criacao do tabuleiro no html
let board = ChessBoard('board1', config);

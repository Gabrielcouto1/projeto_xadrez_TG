import * as decTree from "./tree.js";

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
    draggable: false,
    position: 'start',
    sparePieces: false
};

//Criacao do tabuleiro no html
let board = ChessBoard('board1', config);

//Cria variaveis para os botoes da primeira jogada
const btn1=[
    document.getElementById("btn1-1"),
    document.getElementById("btn1-2"),
    document.getElementById("btn1-3"),
    document.getElementById("btn1-4"),
    document.getElementById("btn1-5"),
    document.getElementById("btn1-6"),
    document.getElementById("btn1-7"),
    document.getElementById("btn1-8"),
    document.getElementById("btn1-9"),
    document.getElementById("btn1-10"),
    document.getElementById("btn1-11"),
    document.getElementById("btn1-12")
];

//Cria variaveis para os botoes da segunda jogada
const btn2=[
    document.getElementById("btn2-1"),
    document.getElementById("btn2-2"),
    document.getElementById("btn2-3"),
    document.getElementById("btn2-4"),
    document.getElementById("btn2-5"),
    document.getElementById("btn2-6"),
    document.getElementById("btn2-7"),
    document.getElementById("btn2-8"),
    document.getElementById("btn2-9"),
    document.getElementById("btn2-10"),
    document.getElementById("btn2-11"),
    document.getElementById("btn2-12")
]

//Cria variaveis para os botoes da terceira jogada
const btn3=[
    document.getElementById("btn3-1"),
    document.getElementById("btn3-2"),
    document.getElementById("btn3-3"),
    document.getElementById("btn3-4"),
    document.getElementById("btn3-5"),
    document.getElementById("btn3-6"),
    document.getElementById("btn3-7"),
    document.getElementById("btn3-8"),
    document.getElementById("btn3-9"),
    document.getElementById("btn3-10"),
    document.getElementById("btn3-11"),
    document.getElementById("btn3-12")
]

//Adiciona eventos para os primeiros botoes
for (let i = 0; i < btn1.length; i++) {
    const element = btn1[i];
    const node    = tree.children[i];

    element.textContent=node.name;
    element.addEventListener("click", function() {
        board.move(`${node.source}-${node.target}`);
        printPlay(node);
        this.classList.add("highlight");
        
        for (let j = 0; j < btn1.length; j++) {
            const element1 = btn1[j];
            const element2 = btn2[j];
            element1.classList.add("hide");
            element2.classList.remove("hide");
            element1.disabled=true;
        }
        addBtn2Listener(i)
    });
}

//Adiciona eventos para os segundos botoes
function addBtn2Listener(aux1) {
    for (let i = 0; i < btn2.length; i++) {
        const element = btn2[i];
        const node    = tree.children[aux1].children[i];
    
        element.textContent=node.name;
        

        element.addEventListener("click", function() {
            board.move(`${node.source}-${node.target}`);
            printPlay(node);
            this.classList.add("highlight");
            
            for (let j = 0; j < btn2.length; j++) {
                const element1 = btn2[j];
                const element2= btn3[j];
                element1.classList.add("hide");
                element2.classList.remove("hide");
                element1.disabled=true;
            }
            addBtn3Listener(aux1,i);
        });
    }
}

//Adiciona eventos para os terceiros botoes
function addBtn3Listener(aux1, aux2) {
    for (let i = 0; i < btn3.length; i++) {
        const element = btn3[i];
        const node    = tree.children[aux1].children[aux2].children[i];
    
        element.textContent=node.name;

        element.addEventListener("click", function() {
            board.move(`${node.source}-${node.target}`);
            printPlay(node);
            this.classList.add("highlight");

            for (let j = 0; j < btn2.length; j++) {
                const element1 = btn3[j];
                element1.classList.add("hide");
                element1.disabled=true;
            }
        });
    }
}

//Imprime uma jogada e seus atributos no html
function printPlay(foundNode) {
    name.textContent           =`Nome: ${foundNode.name}`;
    pickPercentage.textContent =`Porcentagem de escolha: ${foundNode.pickPercentage}%`;
    whiteWR.textContent        =`Porcentagem de vitória das brancas: ${foundNode.whiteWinRate}%`;
    blackWr.textContent        =`Porcentagem de vitória das pretas: ${foundNode.blackWinRate}%`;
    drawRate.textContent       =`Porcentagem de empate: ${foundNode.drawRate}%`;
}

//Funcao para resetar o tabuleiro quando clicar no botao de reset
resetButton.addEventListener("click", function() {
    board = ChessBoard('board1', config);
    resetHtml();
    for (let i = 0; i < btn1.length; i++) {
        const element = btn1[i];
        btn1[i].classList.remove("hide");
        btn2[i].classList.add("hide");
        btn3[i].classList.add("hide");
    }
});

function resetHtml() {
    moveNumber.textContent=`Jogada 1`;
    name.textContent=``;
    pickPercentage.textContent=``;
    whiteWR.textContent=``;
    blackWr.textContent=``;
    drawRate.textContent=``;
}
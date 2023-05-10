let i=0;
function onDrop (source, target, piece) {
    console.log('Source: ' + source);
    console.log('Target: ' + target);
    console.log('Piece: ' + piece);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

    if(piece=='wP'&&target=='e4'&&source=='e2'){
        console.log("abertura do rei");
    }
    
}

var config = {
    draggable: true,
    position: 'start',
    onDrop: onDrop,
    sparePieces: false
};

var board = ChessBoard('board1', config);
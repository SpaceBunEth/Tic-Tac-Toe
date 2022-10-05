console.log('sandbox-state.js')
// state of tic-tac-toe
const tic = {
    default: {
        playerTurn:'X',
        currentBoard: ['','','','','','','','','']
    },
    current: {
        playerTurn:'',
        currentBoard: ['X','X','X','O','','O','','','']
    },
    winConditions: {
        rows: {
            row1: [0,1,2],
            row2: [3,4,5],
            row3: [6,7,8]
        },
        cols: {
            col1: [0,3,6],
            col2: [1,4,7],
            col3: [2,5,8]
        },
        diags: {
            diag1:[0,4,8],
            diag2:[2,4,6]
        }
            
        
    }
}

// checkWinConditions
function checkBoard(){
    // check 3 values within winConditions rows,cols,diags
    // EX: ['X','X','X','O','','','O','','']
    // tic.current.currentBoard

    //

    // end of for loop return 'No Winner'
    

    // currentBoard and winConditions
    // take array values from currentBoard compare with winConditions

    // winConditions array values equals the index of currentBoard
    // loop 
    // if currentBoard[winC value] is equal to X or O
    // if not end loop move to next row or col

}

for (let i = 0; i > tic.current.currentBoard.length; i++){
    console.log()
}

// let arrayX = []; 
// let arrayY = [];

// let arrayW = [];

// for ( const i in tic.winConditions.rows){
//     console.log(i)
//     for (const ii in tic.winConditions.rows[i]){
//         console.log(tic.winConditions.rows[i][ii])
//         //console.log(ii)
//     }
    
// }


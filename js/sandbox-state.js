console.log('sandbox-state.js')
// state of tic-tac-toe
const tic = {
    default: {
        playerTurn:'X',
        currentBoard: ['','','','','','','','','']
    },
    current: {
        playerTurn:'',
        currentBoard: ['','','','','','','','','']
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
    // for loop     let i = 0   i > 2   i++
    // let check = tic.winConditions.rows.row[i]
    // if (tic.winConditions.rows.row[i] == tic.current.playerTurn){
    //   return 'No winner'
    // end of for loop return 'Winner'
    
}


console.log('sandbox-state.js')
// state of tic-tac-toe
const tic = {
    default: {
        playerTurn:'X',
        currentBoard: ['','','','','','','','','']
    },
    current: {
        playerTurn:'X',
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

// checks to see if there is a winner
function checkBoard(){
    for (const i in tic.winConditions){
        for (const ii in tic.winConditions[i]){
            let array = [];
            for (const iii of tic.winConditions[i][ii]){
                array.push(tic.current.currentBoard[iii])
            }
        
            if (array.every((x) => x === 'X')){
                return array.every((x) => x === 'X')
            } else if (array.every((x) => x === 'O')){
                return array.every((x) => x === 'O')
            }
        }
    }
    if (!tic.current.currentBoard.includes('')){
        console.log('TIE!!!! No Winner')
    }
    return false
}

// Param boxNum Must be a int whole number, the length of currenBoard array values between (0-8)
// TO-DO disable button on click Creating UI
function UpdateState(boxNum){
    
    if (tic.current.currentBoard[boxNum] == ''){

        tic.current.currentBoard[boxNum] = tic.current.playerTurn
        console.log("Checking for Winner: ",tic.current.playerTurn,checkBoard())
        console.log(tic.current.currentBoard)

        if (tic.current.playerTurn == 'X'){
            tic.current.playerTurn = 'O'
        } else if (tic.current.playerTurn == 'O') {
            tic.current.playerTurn = 'X'
        }
    } else {
        console.log(`Cant place ${tic.current.playerTurn} Here`)
    }

}
// Resets State of Obj 
// Issue Resolved 
//https://www.sitepoint.com/variable-assignment-mutation-javascript/
function resetState() {
tic.current = { ...tic.default }
}


//------------------------------------------------
// Run a click event USER CTA,
// click event func should disable button
// check state to see who's turn it was 
// UpdateState()
// checkWinner()
//
// we can capture a data html attribute after a (click event)
// Pass data html attribute/ e.target.dataset.[name if data tag Ex: 'data-box-number']
// ---------------------------------------------------
// Pass a Param tic.current.playerTurn
// Who's turn is it
// Where?
// What?
// Param playerTurn, index of currentBoard
// Ex: "X" turn , "0"

// function UpdateState(boxNum){
    
//     if (tic.current.currentBoard[boxNum] == ''){
//         tic.current.currentBoard[boxNum] = tic.current.playerTurn
//         if (tic.current.playerTurn == 'X'){
//             tic.current.playerTurn = 'O'
//         } else if (tic.current.playerTurn == 'O') {
//             tic.current.playerTurn = 'X'
//         }
//     } else {
//         console.log(`Cant place ${tic.current.playerTurn} Here`)
//     }
//     console.log(checkBoard())
//     console.log(tic.current.currentBoard)

// }








//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// make array 
// loop through row1, set array index to tic.current.currentBoard[row1[0]]
// end loop after 3 values enter in new array
// if every index in array is equal to X or O 
// return winner

//.some function returns true or false for array
// take row1 

//if func returns true
// 

// checkWinConditions

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



// for (let i = 0; i < tic.current.currentBoard.length; i++){
//     console.log(tic.current.currentBoard[i])
// }

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


// for (const i in tic.winConditions){

//     console.log(i)
//     for (const ii in tic.winConditions[i]){
//         let array = []
//         console.log(ii)
//         for (const iii of tic.winConditions[i][ii]){
//             console.log(iii)

//             array.push(tic.current.currentBoard[iii])
//         }
//         console.log(array)
//         console.log(array.every((x) => x === 'X'));
//     }
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for (const iiii in tic.winConditions){
//     console.log(iiii)
// }
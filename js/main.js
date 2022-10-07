
// state of tic-tac-toe
const tic = {
    default: {
        playerTurn:'X',
        currentBoard: ['','','','','','','','',''],
        resetButton: 'Play?',

    },
    current: {
        playerTurn:'X',
        currentBoard: ['','','','','','','','',''],
        resetButton: 'Play?',
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
// loop through all winning combos in tic-tac-toe
function checkBoard(){
    for (const i in tic.winConditions){
        for (const ii in tic.winConditions[i]){
            let array = [];
            for (const iii of tic.winConditions[i][ii]){
                array.push(tic.current.currentBoard[iii])
            }
        
            if (array.every((x) => x === 'X')){ //.every checks array var, returns T or F if all indexes in array = the same value.
                return array.every((x) => x === 'X')//return true
            } else if (array.every((x) => x === 'O')){
                return array.every((x) => x === 'O')//return true
            }
        }
    }
    return false
}


// Switches player turn, updates state, checks 
// Param boxNum Must be a int whole number, the length of currenBoard array values between (0-8)
function UpdateState(boxNum){
    if (tic.current.currentBoard[boxNum] == ''){
        tic.current.currentBoard[boxNum] = tic.current.playerTurn // set board state index to current playerTurn 
        if (checkBoard()){ // if function returns true stop game
            removeDivClick()
            return false
        } else if (tic.current.playerTurn == 'O') {
            tic.current.playerTurn = 'X'
            return true
        } else if (tic.current.playerTurn == 'X'){
            tic.current.playerTurn = 'O'
            return true
        }
    }
}


// Resets State of Obj 
// Issue Resolved 
//https://www.sitepoint.com/variable-assignment-mutation-javascript/
function resetState(e) {
    document.getElementById(this.id).removeEventListener('click',clickManager)
    clearDom(headerDiv,bodyDiv)
    //tic.current.currentBoard = { ...tic.default }
    // Quick fix to reset state to default
    tic.current.currentBoard = ['','','','','','','','','']; 
    tic.current.playerTurn = 'X'
    tic.current.resetButton = "Reset"
    divBoard()
    updateDom(pageContent)
}

//-----------Start of ReUsed Code-----------

// Set const to body and assign id with "bodyid"
let htmlBody = document.querySelector('body');
htmlBody.setAttribute('id','bodyid');
htmlBody.setAttribute('class','container ')


// Create a set of headerDiv and bodyDiv for our content
// Use as reference for when appending childs
const headerDiv = document.createElement('div');
headerDiv.setAttribute('id', 'headerDiv');
headerDiv.setAttribute('class', 'row justify-content-center text-center')
htmlBody.appendChild(headerDiv);
const bodyDiv = document.createElement('div');
bodyDiv.setAttribute('id', 'bodyDiv');
bodyDiv.setAttribute('class','vh-100')
htmlBody.appendChild(bodyDiv);


// Function for creating html elements for DOM with JS
// Create a func with Params passing
// html element name and name of the id
// then append element to a parent Param passed in the function
function createElem(htmlElem, idName, parentElem, className = null){
    const parent = document.getElementById(parentElem)
    const makeElem = document.createElement(htmlElem);
    makeElem.setAttribute('id', idName); 
    if (className !== null){
        makeElem.setAttribute('class', className)
        parent.appendChild(makeElem);
    }
}
//-------------End Of Re-Used Code------

// Obj created to help manage createElem() func
// key: html Element, ID Name, Parent Name, Class Name(Using Bootstrap)
const headerDivElem = {
    title:['h1','title','headerDiv',''],
    playerTurn:['h2','playerTurn','headerDiv',''],
    resetButton:['button','resetButton','headerDiv','col-2']
}
const boardDivElem = {
    divBoard:['div','divBoard','bodyDiv','container ratio ratio-1x1'],
    divBoardRow:['div','divBoardRow','divBoard','row'],
    div0:['div','div0','divBoardRow','col-4 border'],
    div1:['div','div1','divBoardRow','col-4 border'],
    div2:['div','div2','divBoardRow','col-4 border'],
    div3:['div','div3','divBoardRow','col-4 border'],
    div4:['div','div4','divBoardRow','col-4 border'],
    div5:['div','div5','divBoardRow','col-4 border'],
    div6:['div','div6','divBoardRow','col-4 border'],
    div7:['div','div7','divBoardRow','col-4 border'],
    div8:['div','div8','divBoardRow','col-4 border']
}

// Assign values to state obj tic.current
// update on every call to action
pageContent = {

    title: 'Tic-Tac-Toe',
    playerTurn: `Player 's Turn`,
    resetButton: 'Play',
    div0: '',
    div1: '',
    div2: '',
    div3: '',
    div4: '',
    div5: '',
    div6: '',
    div7: '',
    div8: ''
}
// Loops through obj to create elements
function ObjElemCreate(obj) {
    for (const key in obj){
        if(obj.hasOwnProperty(key)) {
            createElem(obj[key][0],key,obj[key][2],obj[key][3]);

        }
    }
}

// Creates elements for tic-tac-toe on DOM
function divBoard(){
    ObjElemCreate(headerDivElem)
    ObjElemCreate(boardDivElem)
    //Create clickEvents for html id div0 - div8
    createEvent()
}

//Reads State in obj and sets html element's content, needs a T or F Param for IF conditions  
function updateDom(obj, j){
    if(j){
        if (!tic.current.currentBoard.includes('')){
            pageContent.playerTurn = "Tie No Winners!"
        } else{
        pageContent.playerTurn = `Player ${tic.current.playerTurn}'s Turn`
        pageContent.resetButton = tic.current.resetButton
        }
    }else{
        pageContent.playerTurn = `Player ${tic.current.playerTurn} Wins!`
    }

    
    for(let i = 0; i <= 8; i++){
        pageContent[`div${i}`] = tic.current.currentBoard[i]
    }
    for(const key in obj){
        const content = document.getElementById(key)
        content.innerHTML = obj[key]
    }
}

//Pass Param headerDiv and bodyDiv to clear DOM of child elements
function clearDom(header, body) {
    header.innerHTML = '';
    body.innerHTML = '';
}


// Creates click event listeners for all tic-tac-toe html id ('divs0-8')
function createEvent(){
    for(let i = 0; i <= 8; i++){
        const div = document.getElementById(`div${i}`)
        div.setAttribute('data-number',i)//create data- tag for div0-8 
        div.addEventListener("click", clickManager)
    }
    document.getElementById('resetButton').addEventListener('click',resetState)
}

//Removes click events after user CTA
// Helps update dom based on state obj
// calls self
function clickManager(e){
    if (UpdateState(e.target.dataset.number)){
        updateDom(pageContent, true)
    } else {
        updateDom(pageContent, false)
        
    }
    // removes event based on id
    document.getElementById(this.id).removeEventListener('click',clickManager)
}

// Removes click event based on condition "Tie in tic-tac-toe"
// calls clickManager
function removeDivClick(){
    for(let i = 0; i <= 8; i++){
       document.getElementById(`div${i}`).removeEventListener('click',clickManager)
    }
}

//INIT() // start when page loads

function init(){
    divBoard()
    updateDom(pageContent)
}

init()
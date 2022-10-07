console.log('sandbox-bootstrap')

//============State Manager==============


//===========End State Manager===========

//-----------Start of ReUsed Code-----------

// Set const to body and assign id with "bodyid"
let htmlBody = document.querySelector('body');
htmlBody.setAttribute('id','bodyid');


// Create a set of headerDiv and bodyDiv for our content
// Use as reference for when appending childs
const headerDiv = document.createElement('div');
headerDiv.setAttribute('id', 'headerDiv');
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
    resetButton:['button','resetButton','headerDiv','']
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
    playerTurn: 'Player Turn',
    resetButton: 'Play?',
    div0: '',
    div1: 'x',
    div2: '',
    div3: '',
    div4: 'x',
    div5: '',
    div6: '',
    div7: 'x',
    div8: ''
}

function ObjElemCreate(obj) {
    for (const key in obj){
        if(obj.hasOwnProperty(key)) {
            createElem(obj[key][0],key,obj[key][2],obj[key][3]);

        }
    }
}

function divBoard(){
    ObjElemCreate(headerDivElem)
    ObjElemCreate(boardDivElem)
    //Create clickEvents for div0-div8
    createEvent()
}

function updateDom(obj){
    for(const key in obj){
        const content = document.getElementById(key)
        content.innerHTML = obj[key]
    }
}

//pass Param headerDiv and bodyDiv
function clearDom(header, body) {
    header.innerHTML = '';
    body.innerHTML = '';
}



function createEvent(){
    for(let i = 0; i <= 8; i++){
        const div = document.getElementById(`div${i}`)
        div.addEventListener("click", clickManager)
    }
}

//Pass
function clickManager(){
    console.log(this.id)
    document.getElementById(this.id).removeEventListener('click',clickManager)
}

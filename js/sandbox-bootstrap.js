console.log('sandbox-bootstrap')



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
    divBoard:['div','divBoard','bodyDiv',''],
    div0:['div','div0','divBoard',''],
    div1:['div','div1','divBoard',''],
    div2:['div','div2','divBoard',''],
    div3:['div','div3','divBoard',''],
    div4:['div','div4','divBoard',''],
    div5:['div','div5','divBoard',''],
    div6:['div','div6','divBoard',''],
    div7:['div','div7','divBoard',''],
    div8:['div','div8','divBoard','']
}

function ObjElemCreate(Obj) {
    for (const key in Obj){

        //console.log(key)
        if(Obj.hasOwnProperty(key)) {
            //console.log(Obj[key][0],key,Obj[key][2],Obj[key][3]);
            createElem(Obj[key][0],key,Obj[key][2],Obj[key][3]);

        }
    }
}

function divBoard(){
    ObjElemCreate(headerDivElem)
    ObjElemCreate(boardDivElem)
}





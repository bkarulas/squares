adminId = getUrlVar(window.location.href, 'adminId');

//Function to show all the boards for an Admin
getAllBoard(adminId);

function getAllBoard (adminId) {
    phpurl = geturl+"adminallboard&id="+adminId;
    $.ajax({url: phpurl, method: "GET"})
    .then((response) => {
        printAllBoard(JSON.parse(response))
    })
}

function getCreatedOneBoard (adminId) {
    phpurl = geturl+"adminoneboard&id="+adminId+"&bid="+boardId;
    $.ajax({url: phpurl, method: "GET"})
    .then((response) => {
        printAllBoards(JSON.parse(response))
    })
}

function fillTheBoard(boardId){
    document.getElementById('allGames').style.display='none';
    phpurl = geturl+"takensquares&id="+boardId;
    $.ajax({url: phpurl, method: "GET"})
    .then((response) => {
        console.log(JSON.parse(response))
        let freeSquares = getFreeSquares(JSON.parse(response))
        console.log (freeSquares)
        phpurl = geturl+"playersforadmin&id="+adminId;
        $.ajax({url: phpurl, method: "GET"})
        .then((response) => {
            let adminPlayers = getAdminPlayersList(JSON.parse(response));
            takeASquare(adminPlayers, freeSquares, boardId);
    })
    })

}

function takeASquare(players,squares, boardId){
    fillTheBoardSec = document.getElementById('fillTheBoard');
    fillTheBoardSec.innerHTML = '';
    let newDiv = document.createElement('div');
    newDiv.className='row';
    //crate the list of players
    let playerTitleDiv = document.createElement('div');
    playerTitleDiv.className='col-2';
    playerTitleDiv.innerText='Select A Player: ';
    newDiv.appendChild(playerTitleDiv);
    let playerSelect = document.createElement('select');
    playerSelect.className='col-2';
    playerSelect.setAttribute('name','playerselect');
    playerSelect.setAttribute('id','playerselect');
    let defaultPlayerOption = document.createElement('option');
    defaultPlayerOption.setAttribute('value','player')
    defaultPlayerOption.innerText = 'Choose a Name...';
    playerSelect.appendChild(defaultPlayerOption);
    players.forEach(player => {
        let playerOption = document.createElement('option');
        playerOption.setAttribute('value',player.id)
        playerOption.innerText = player.name;
        playerSelect.appendChild(playerOption);
    })
    newDiv.appendChild(playerSelect);
    //create the list of free boxes
    let squareTitleDiv = document.createElement('div');
    squareTitleDiv.className='col-2';
    squareTitleDiv.innerText='Select A Square: ';
    newDiv.appendChild(squareTitleDiv);
    let freeSquareSelect = document.createElement('select');
    freeSquareSelect.className='col-2';
    freeSquareSelect.setAttribute('name','freeSquare');
    freeSquareSelect.setAttribute('id','freeSquare');
    let defaultSquarOption = document.createElement('option');
    defaultSquarOption.setAttribute('value','square')
    defaultSquarOption.innerText = 'Choose a square number...';
    freeSquareSelect.appendChild(defaultSquarOption);
    squares.forEach(square => {
        let squareOption = document.createElement('option');
        squareOption.setAttribute('value',(square-1))
        squareOption.innerText = square;
        freeSquareSelect.appendChild(squareOption);
    })
    newDiv.appendChild(freeSquareSelect);
    
    //submit button
    let submitBtn = document.createElement('button');
    submitBtn.className-'col-1 offset-1 btn btn-primary';
    submitBtn.setAttribute('onclick',`commitTheBox(${boardId})`)
    submitBtn.innerText='SUBMIT';
    newDiv.appendChild(submitBtn);
    fillTheBoardSec.appendChild(newDiv);
}

function commitTheBox(boardId){
    let playerId = document.getElementById('playerselect')
    let squareID = document.getElementById('freeSquare')
    let player = playerId.options[playerId.selectedIndex].value;
    let square = squareID.options[squareID.selectedIndex].value;
    if (player == 'player'){
        console.log('choose a player');
    }else if(square == 'square'){
        console.log('chose a square');
    }else{
        let yValue = Math.floor(square/10);
        let xVaule = square-(yValue*10);
        phpurl = posturl+"fillasquare&id="+boardId+"&p="+player+"&y="+yValue+"&x="+xVaule
        $.ajax({url: phpurl, method: "POST"})
            .then((response) => {
                fillTheBoard(boardId);
            })
    }
    
}
function getAdminPlayersList(info){
    let players = [] ;
    info.forEach(player => { 
        players.push({id:player.id, name:player.nameFirst+' '+player.nameLast})
    })
    return (players);
}

function getFreeSquares(info){
    let taken = [];
    let free = [];
    info.forEach(box => { taken.push(parseInt(box.valueY+box.valueX)+1) });
    let c = 0;
    for (let i =1; i<=100; i++){
        (i == taken[c]) ? c++ : free.push(i);
        }
    console.log("TAKEN");
    console.log(taken);
    console.log("FREE");
    console.log(free)
    return (free);    
}

function editTheBoard(boardId){
    document.getElementById('allBoardInfo').style.display='none';
    phpurl = geturl+"boardinfo&id="+boardId;
    $.ajax({url: phpurl, method: "GET"})
    .then((response) => {
        console.log(JSON.parse(response)[0])

    })
}

//ALL BOARDS
function printAllBoard(info){
    allBoardTitle();
    let boardInfoSEC = document.getElementById('allBoardInfo');
    info.forEach(board => {
        let eachBoard = document.createElement("div");
        eachBoard.innerHTML = allBoardInfo(board);
        boardInfoSEC.appendChild(eachBoard);   
    });      
}
//ALL BOARD INFO
function allBoardInfo(board){
     return `
        <div class='row boardInfo'>
            <div class='col-3'>
                <div class='row'>
                    <div class='center col-2'>${board.boardId}</div>
                    <div class='col-5'>${board.team1}</div>
                    <div class='col-5'>${board.team2}</div>
                </div>
            </div>
            <div class='col-2'>
                <div class='row'>
                    <div class='col-6'>${getGameDateShort(board.gameTime)}</div>
                    <div class='col-6'>${getGameTime(board.gameTime)}</div>
                </div>
            </div>
            <div class='col-4'>
                <div class='row'>
                    <div class='center col-2'>$${board.cost1Sq}</div>
                    <div class='center col-2'>$${board.cost3Sq}</div>
                    <div class='center col-2'>${board.payQ1}%</div>
                    <div class='center col-2'>${board.payQ2}%</div>
                    <div class='center col-2'>${board.payQ3}%</div>
                    <div class='center col-2'>${board.payQ4}%</div>
                </div>
            </div>
            <div class='col-1'>
                <div class='row'>
                    <div class='center col-6'>Filled</div>
                    <div class='center col-6'>Pot</div>
                </div>
            </div>
            <div class='col-2'>
                <div class='row'>
                    <button class='col-5 offset-1 btn btn-primary' onclick="fillTheBoard(${board.boardId})">FILL</button>
                    <button class='col-5 offset-1 btn btn-primary' onclick="editTheBoard(${board.boardId})">EDIT</button>
                </div>
            </div>
        </div>`
}
//ALL BOARD TITLE
function allBoardTitle(){
    document.getElementById('allBoardTitle').innerHTML=`
        <div class='row boardTitle'>
            <div class='col-3'>
                <div class='row'>
                    <div class='center col-2'>ID</div>
                    <div class='col-5'>Home</div>
                    <div class='col-5'>Visitor</div>
                </div>
            </div>
            <div class='col-2'>
                <div class='row'>
                    <div class='col-6'>Date</div>
                    <div class='col-6'>Time</div>
                </div>
            </div>
            <div class='col-4'>
                <div class='row'>
                    <div class='center col-4'>Cost</div>
                    <div class='center col-8'>Pay Out</div>
                </div>
                <div class='row'>
                    <div class='center col-2'>1</div>
                    <div class='center col-2'>3</div>
                    <div class='center col-2'>Q1</div>
                    <div class='center col-2'>Q2</div>
                    <div class='center col-2'>Q3</div>
                    <div class='center col-2'>Q4</div>
                </div>
            </div>
            <div class='col-1'>
                <div class='row'>
                    <div class='center col-6'>Filled</div>
                    <div class='center col-6'>Pot</div>
                </div>
            </div>
            <div class='col-2'>BUTTONS</div>
        </div>`
}

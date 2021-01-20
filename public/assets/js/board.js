let pageURL = window.location.href;
let boardId = getUrlVar(pageURL, 'boardId');

getTheBoardInfo(boardId);
getTakenSquares(boardId);
chooseThreeBox();
listFreeSquares();


function submitTheBox(){
    let allBoxSelected = [];
    let email = document.getElementById('useremail').value;
    console.log("THE EMAIL: "+email)
    let phpurl = geturl+"boardadmin&id="+boardId;
    $.ajax({url: phpurl, method: "GET"})
    .then((response) => {
        let adminId = (JSON.parse(response)[0].adminId);
        let userphpurl = geturl+"userid&id="+adminId+"&eid="+email;
        $.ajax({url: userphpurl, method: "GET"})
        .then((response) => {
            if (JSON.parse(response)[0] != null){
                let userId = (JSON.parse(response)[0].userId);
                for (let i=1; i<=3; i++){
                    let boxSeclected = document.getElementById(`box${i}Num`);
                    let boxValue = boxSeclected.value;
                    if (boxValue < 100){
                        allBoxSelected.push(parseInt(boxValue))
                    }
                }
                let BoxSelecedDif = true;
                if (allBoxSelected.length>1){
                    if (allBoxSelected[0] == allBoxSelected[1]){BoxSelecedDif=false};
                    if (allBoxSelected.length>2){
                        if (allBoxSelected[0] == allBoxSelected[2]){BoxSelecedDif=false};
                        if (allBoxSelected[1] == allBoxSelected[2]){BoxSelecedDif=false};
                    }
                }
                if (BoxSelecedDif) {
                    document.getElementById('selectMessage').innerHTML = '';
                    for (let b=0; b<allBoxSelected.length; b++){
                        let yValue = Math.floor(allBoxSelected[b]/10);
                        let xVaule = allBoxSelected[b]-(yValue*10);
                        let postBoxUrl = posturl+'fillasquare&id='+boardId+'&p='+userId+'&y='+yValue+'&x='+xVaule;
                        $.ajax({url: postBoxUrl, method: "POST"})
                            .then((response) => {
                                console.log('POSTED: Y = '+yValue+' X = '+xVaule);
                            })
                    }
                    location.reload();
                }else{
                    document.getElementById('selectMessage').innerHTML = `<span class='higlight'><b>The numbers all have to be different</b></span>`
                }
                document.getElementById('inputemailmessage').innerHTML=`The email address must be the same one the invite got sent to`
            }else{
                document.getElementById('inputemailmessage').innerHTML = `<span class='highlight'>The email address <b>MUST BE</b> the same one the invite got sent to.</br><b><i><u>${email}</u></i></b> is not a valid email address</span>`
            }
        })
    })
}


function chooseThreeBox (){
    let radBox3Btn = document.getElementById('radbox3');
    let radBox1Btn = document.getElementById('radbox1');
    let addTwoMoreDiv = document.getElementById('addTwoMore');
    addTwoMoreDiv.style.display = 'none';
    radBox3Btn.onclick = function(){addTwoMoreDiv.style.display = 'block';}
    radBox1Btn.onclick = function(){addTwoMoreDiv.style.display = 'none';}
}

function listFreeSquares(){
    phpurl = geturl+"takensquares&id="+boardId;
    $.ajax({url: phpurl, method: "GET"})
    .then((response) => {
        let freeSquares = getFreeSquares(JSON.parse(response))
        for (let i=1; i<=3; i++){
            let theMainSelect = creatFreeSquareList(freeSquares, i)
            document.getElementById(`select${i}`).appendChild(theMainSelect);
        }
    })
}

function creatFreeSquareList(freeSquares, boxNum){
    let mainSelect =document.createElement('select');
    mainSelect.className = "emptyBoxOptions";
    mainSelect.setAttribute('name',`box${boxNum}Num`);
    mainSelect.setAttribute('id', `box${boxNum}Num`);
    let defaultOption = document.createElement('option');
    defaultOption.setAttribute('value','100')
    defaultOption.innerText = 'Choose a box...';
    mainSelect.appendChild(defaultOption);
    freeSquares.forEach(square => {
        let squareOption = document.createElement('option');
        squareOption.setAttribute('value',(square-1))
        squareOption.innerText = square;
        mainSelect.appendChild(squareOption);
    })
    return mainSelect;
}

function getFreeSquares(info){
    let taken = [];
    let free = [];
    info.forEach(box => { taken.push(parseInt(box.valueY+box.valueX)+1) });
    let c = 0;
    for (let i =1; i<=100; i++){
        (i == taken[c]) ? c++ : free.push(i);
        }
    return (free);    
}


function getTheBoardInfo (boardId) {
    phpurl = geturl+"boardinfo&id="+boardId;
    $.ajax({url: phpurl, method: "GET"})
    .then((response) => {
        printTheBoardInfo(JSON.parse(response)[0])
    })
}

function getTakenSquares (boardId) {
    phpurl = geturl+"takensquares&id="+boardId;
    $.ajax({url: phpurl, method: "GET"})
    .then((response) => {
        printTakenSquares(JSON.parse(response))
    })
}

//BOX INFO
function printTakenSquares(info){
    info.forEach(square => {
        let name = square.nameFirst + ' ' + (square.nameLast.charAt(0)) + '.';
        let squareLoc = square.valueY + square.valueX;
        boxId = 'box_'+ squareLoc;
        theBox = document.getElementById(boxId);
        theBox.className = 'boxTaken oneBox';
        theBox.innerText = name;
    });
}

//BOARD INFO
function printTheBoardInfo(info){
    printTeamTitles(info.team1Full, info.team1Short, 1);
    printTeamTitles(info.team2Full, info.team2Short, 2)
    document.getElementById('teamNames').innerText = `${info.team1Name} / ${info.team2Name}`;
    document.getElementById('gameDate').innerText = getGameDate(info.gameTime);
    document.getElementById('gameTime').innerText = getGameTime(info.gameTime);
    document.getElementById('Sq1Price').innerText = `: $${info.cost1Sq}.00`;
    (info.cost3Sq == 0) ? document.getElementById('Sq3display').style.display = "none" : document.getElementById('Sq3Price').innerText = `: $${info.cost3Sq}.00`;
    document.getElementById('q1Pay').innerText = `: ${info.payQ1}%`;
    document.getElementById('q2Pay').innerText = `: ${info.payQ2}%`;
    document.getElementById('q3Pay').innerText = `: ${info.payQ3}%`;
    document.getElementById('q4Pay').innerText = `: ${info.payQ4}%`;
    document.getElementById('adminName').innerText = `${info.adminFirst} ${info.adminLast}`;
    document.getElementById('adminEmail').innerText = `: ${info.adminEmail}`;
    document.getElementById('adminPhone').innerText = `: ${info.adminPhone}`;
}

function printTeamTitles(full, short, i){
    let div = document.getElementById(`team${i}Name`);
    div.classList.add(short);
    let logo = document.createElement('img');
    logo.src = `./assets/images/logo/teams/${short}.png`
    logo.setAttribute('alt',`${full} Logo`);
    div.appendChild(logo);
    let teamName = document.createTextNode(full);
    div.appendChild(teamName)
    return div
}
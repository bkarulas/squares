adminId = getUrlVar(window.location.href, 'adminId');

//Function to show the create player Section FORM
function diaplayDefault(){
    document.getElementById('listOfPlayersTitle').style.display='block';
    document.getElementById('listOfPlayers').style.display='block';
    document.getElementById('editPlayer').style.display='none';
    document.getElementById('createPlayer').style.display='block';
}

createNewPlayerForm();

getAllPlayersForAdmin(adminId);

//creates the array for the admin of all his players and information
function getAllPlayersForAdmin(adminId){
    listOfPlayersTitle('List of Players');
    phpurl = geturl+"playersforadmin&id="+adminId;
    $.ajax({url: phpurl, method: "GET"})
    .then((response) => {
        printAllPlayersByAdmin(JSON.parse(response));
    })
    diaplayDefault();
}

//creates the array for the admin of all his players and information
function getOnePlayersInfo(id, adminId){
    let phpurl = geturl+"oneplayersinfo&id="+id+"&aid="+adminId;
    $.ajax({url: phpurl, method: "GET"})
    .then((response) => {
        thePlayer.push(JSON.parse(response)[0])
    });
}

let thePlayer = [];

function saveEdit(id){
    let editFirst = document.getElementById('editFirst').value;
    let editLast = document.getElementById('editLast').value;
    let editEmail = document.getElementById('editEmail').value;
    let editPhone = document.getElementById('editPhone').value;
    if ((editFirst>"") && (editLast>"") ){
        phpurl = updateurl+"editplayer&id="+id+"&f="+editFirst+"&l="+editLast+"&e="+editEmail+"&p="+editPhone;
        $.ajax({url: phpurl})
            .then((response) => {
                console.log(response);
                console.log("POSTED - ",editFirst,editLast,editEmail,editPhone);
                getAllPlayersForAdmin(adminId)
            })
    }
}

//EDIT PLAYER
function editPlayer(id){
    listOfPlayersTitle('Edit A Player');
    document.getElementById('listOfPlayers').style.display='none';
    document.getElementById('createPlayer').style.display='none';
    let editPlayerSec = document.getElementById('editPlayer');
    editPlayerSec.innerHTML = '';
    editPlayerSec.style.display = 'flex';
    editPlayerSec.className = 'row';
    let phpurl = geturl+"oneplayersinfo&id="+id+"&aid="+adminId;
    $.ajax({url: phpurl, method: "GET"})
    .then((response) => {
        let colTenDiv = document.createElement('div')
        colTenDiv.className = 'col-10';
        let playerInfoDiv = document.createElement('div')
        playerInfoDiv.className = 'row';
        playerInfoDiv.appendChild(editBox('col-3', 'editFirst',(JSON.parse(response)[0].nameFirst)));
        playerInfoDiv.appendChild(editBox('col-3', 'editLast',(JSON.parse(response)[0].nameLast)));
        playerInfoDiv.appendChild(editBox('col-3', 'editEmail',(JSON.parse(response)[0].email)));
        playerInfoDiv.appendChild(editBox('col-3', 'editPhone',(JSON.parse(response)[0].phone)));
        colTenDiv.appendChild(playerInfoDiv);
        editPlayerSec.appendChild(colTenDiv);
        //buttons
        let colTwoDiv = document.createElement('div')
        colTwoDiv.className = 'col-2';
        //each players buttons
        let playerButtonDiv = document.createElement('div')
        playerButtonDiv.className = 'row';

        let editDiv = document.createElement('BUTTON');
        editDiv.innerText = 'SAVE'
        editDiv.className = 'btn btn-primary col-5 offset-1';
        editDiv.value = (JSON.parse(response)[0].id);
        editDiv.setAttribute('onclick','saveEdit(value)');
        playerButtonDiv.appendChild(editDiv);
        
        let deleteDiv = document.createElement('BUTTON');
        deleteDiv.innerText = 'CANCEL'
        deleteDiv.className = 'btn btn-danger col-5 offset-1';
        deleteDiv.value = (JSON.parse(response)[0].id);
        deleteDiv.setAttribute('onclick','getAllPlayersForAdmin(adminId)');
        playerButtonDiv.appendChild(deleteDiv);
        colTwoDiv.appendChild(playerButtonDiv);
        editPlayerSec.appendChild(colTwoDiv);

    });
}

function editBox (col, idname, placeHolder){
    console.log(col, idname, placeHolder);
    newDisplayBox = document.createElement('div')
    newDisplayBox.className = `${col} displayBox`;
    newInPutBox = document.createElement('input');
    newInPutBox.className='defaultBox';
    newInPutBox.setAttribute('id', `${idname}`);
    newInPutBox.setAttribute('value', `${placeHolder}`)
    newDisplayBox.appendChild(newInPutBox);
    return newDisplayBox;
}

function playerList(displayText){
    let newDiv = document.createElement('div')
    newDiv.className = 'col-3';
    newDiv.innerText = displayText;
    return newDiv
}


//PRINT ALL PLAYERS
function printAllPlayersByAdmin(allPlayers){
    console.log(adminPlayers);
    //Main Div
    let mainDiv=document.getElementById('listOfPlayers');
    mainDiv.innerHTML='';
    allPlayers.forEach(player => {
        //each player total
        let newPlayerDiv = document.createElement('div')
        newPlayerDiv.className = 'row boardInfo';
        //first 10 col for the player info
        let colTenDiv = document.createElement('div')
        colTenDiv.className = 'col-10';
        //each player info
        let playerInfoDiv = document.createElement('div')
        playerInfoDiv.className = 'row';
            playerInfoDiv.appendChild(playerList(player.nameFirst));
            playerInfoDiv.appendChild(playerList(player.nameLast));
            playerInfoDiv.appendChild(playerList(player.email));
            playerInfoDiv.appendChild(playerList(player.phone));
        colTenDiv.appendChild(playerInfoDiv);
        newPlayerDiv.appendChild(colTenDiv);
        //last 2 col for the player info
        let colTwoDiv = document.createElement('div')
        colTwoDiv.className = 'col-2';
        //each players buttons
        let playerButtonDiv = document.createElement('div')
        playerButtonDiv.className = 'row';
        //edit button
        let editDiv = document.createElement('BUTTON');
        editDiv.innerText = 'EDIT'
        editDiv.className = 'btn btn-primary col-5 offset-1';
        editDiv.value = player.id;
        editDiv.setAttribute('onclick','editPlayer(value)');
        playerButtonDiv.appendChild(editDiv);
        //delete button
        let deleteDiv = document.createElement('BUTTON');
        deleteDiv.innerText = 'DELETE'
        deleteDiv.className = 'btn btn-danger col-5 offset-1';
        deleteDiv.value = player.id;
        deleteDiv.setAttribute('onclick','deletePlayer(value)');
        playerButtonDiv.appendChild(deleteDiv);

        colTwoDiv.appendChild(playerButtonDiv);
        newPlayerDiv.appendChild(colTwoDiv);
        
        mainDiv.appendChild(newPlayerDiv);
    });    
}




//DELETE PLAYER
function deletePlayer(id){
    let phpurl = updateurl+'deleteplayer&id='+id;
    $.ajax({url: phpurl, method: "UPDATE"})
        .then((response) => {
            console.log(response);
            getAllPlayersForAdmin(adminId);
        })

}
//CREATE A PLAYER
function creareNewPlayer(){
    let newFirst = document.getElementById('formFirst').value;
    let newLast = document.getElementById('formLast').value;
    let newEmail = document.getElementById('formEmail').value;
    let newPhone = document.getElementById('formPhone').value;
    if ((newFirst>"") && (newLast>"") ){
        phpurl = posturl+"createnewplayer&id="+adminId+"&f="+newFirst+"&l="+newLast+"&e="+newEmail+"&p="+newPhone;
        $.ajax({url: phpurl, method: "GET"})
            .then((response) => {
                console.log("POSTED - ",newFirst,newLast,newEmail,newPhone);
                getAllPlayersForAdmin(adminId)
                document.getElementById('formFirst').value = '';
                document.getElementById('formLast').value = '';
                document.getElementById('formEmail').value = '';
                document.getElementById('formPhone').value = '';
            })
    }
    
}

//CREATE THE NEW PLAYER FORM
function createNewPlayerForm(){
    document.getElementById('createPlayer').innerHTML = `
    <div class='row'>Create A Player</div>
    <section id='newPlayer'>
        <div class='row' id='newPlayerTitle'>
            <div class='col-11'>
                <div class='row'>
                    <div class='col-3'>First Name</div>
                    <div class='col-3'>Last Name</div>
                    <div class='col-3'>Email</div>
                    <div class='col-3'>Phone</div>
                </div>
            </div>
        </div>
            <div class='row'>
                <div class='col-11'>
                    <div class='row'>
                        <div class='col-3'><input type='text' class='displayBox' id='formFirst' required/></div>
                        <div class='col-3'><input type='text' class='displayBox' id='formLast' required/></div>
                        <div class='col-3'><input type='text' class='displayBox' id='formEmail' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'/></div>
                        <div class='col-3'><input type='text' class='displayBox' id='formPhone' pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'/></div>
                    </div>
                </div>
                <button class='col-1 btn btn-primary' onclick="creareNewPlayer()">SUBMIT</button>
            </div>
    </section>
    `
}

function listOfPlayersTitle (title) {
    document.getElementById('listOfPlayersTitle').innerHTML = `
    <div class='row'>${title}</div>
    <div class='row boardTitle'>
            <div class='col-10'>
                <div class='row'>
                    <div class='col-3'>First Name</div>
                    <div class='col-3'>Last Name</div>
                    <div class='col-3'>Email</div>
                    <div class='col-3'>Phone</div>
                </div>
            </div>
    </div>`;
}

//ONE BOARD



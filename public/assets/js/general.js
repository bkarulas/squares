const geturl = '../php/routes/get-routes.php?api=';
const posturl = '../php/routes/post-routes.php?api=';
const deleteurl = '../php/routes/delete-routes.php?api=';
const updateurl = '../php/routes/update-routes.php?api=';

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let boardID;

let adminId;

function getGameDate(dateTime){
    let date = (dateTime.substr(0,dateTime.indexOf(' '))).split('-');
    return (`${months[(parseInt(date[1]))-1]} ${date[2]}, ${date[0]}`)
}

function getGameDateShort(dateTime){
    let date = (dateTime.substr(0,dateTime.indexOf(' '))).split('-');
    return (`${months[(parseInt(date[1]))-1].substring(0, 3)} ${date[2]}`)
}

function getGameTime(dateTime){
    let time = (dateTime.split(" ").pop()).split(':');
    time.push('pm');
    (parseInt(time[0])>12) ? time[0] = time[0]-12 : time[3] = 'am';
    return (`${time[0]}:${time[1]} ${time[3]}`);
}

function getUrlVar(winLocaation, id){
    let url_string = winLocaation;
    let url = new URL(url_string);
    return url.searchParams.get(`${id}`);
}

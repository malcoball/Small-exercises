//DOM vars
const timeIn = document.getElementById("alarmID");
const btn1 = document.getElementById("btn1");
const timeOut = document.getElementById("timeOut");
const clockOut = document.getElementById("clockOut");
const alarmOut = document.getElementById("alarmOut");
const alarmMsg = document.getElementById("alarmMsg");
const upload = document.getElementById("file");



    let alarmSnd = new Audio("Assets/alarmsnd1.mp3");



//Used for the alarm
let alarmTime = undefined;

//Checks for alarm, prevents it looping
let tripped = false;

setInterval(function(){
    //Get time
    let date = new Date();
    let hour = date.getHours();
    let mins = date.getMinutes();
    let time = numtoTim(hour) + ":" + numtoTim(mins);
    let secs = numtoTim(date.getSeconds());

    //Output
    clockOut.innerHTML = "The time is : "+time+":"+secs;

    //Alarm part
    if ((time === alarmTime) && (tripped == false)){
        alarm();
    }

    if ((time !== alarmTime) && (tripped == true)){
        tripped = false;
    }
},1000);

function numtoTim(a){
    if (a < 10){
        a = "0"+a;
    }
    return a;
}

function alarm(){
    alarmSnd.play();
    if(alarmMsg.value == ""){
        alert("alarm");
    } else {
        alert(alarmMsg.value);
    }
    tripped = true;
}

function setTime(){
    if ((timeIn.value == "00:00") || (timeIn.value == "")){
        outputError();
    } else {
        a = timeIn.value;
        alarmOut.innerHTML = "Alarm has been set for : "+ a;
        alarmTime = a;
    }
}

$(function(){
    $("#btn1").click(function(){
        setTime();
    })
});

$('#errorMsg').hide();

function outputError(){
    $('#errorMsg').fadeIn(1000);
    $('#errorMsg').delay(1000).fadeOut(1000);
    
}



//Style
//DOM elements
const stylePick = document.getElementById("style");

function changeStyle(style){
    let target = document.getElementById("body");
        target.className = style;  
}

$('#coldBtn').click(function(){
    changeStyle('cold');
})

$('#hotBtn').click(function(){
    changeStyle('hot');
})

$('#showBtn').click(function(){
    let tar = document.getElementById("coldBtn").style.display;
    if (tar == ""){
        $('#hotBtn').hide();
        $('#coldBtn').hide();
    } else
    if (tar == "none"){
        $('#hotBtn').show();
        $('#coldBtn').show();
    }
})


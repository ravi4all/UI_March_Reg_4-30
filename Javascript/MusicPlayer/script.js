window.addEventListener("load", init);

var songName;
var audio;
var slider;

function init(){
    songName = document.getElementsByTagName("a");
    audio = document.getElementById("audio");
    slider = document.getElementById("slider");
    document.getElementById("playSong").addEventListener("click",playSong);
    document.getElementById("pauseSong").addEventListener("click",pauseSong);
    for(var i = 0; i<songName.length; i++){
        songName[i].addEventListener("click", startSong);
    }
}

function startSong(){
    var s_name = event.srcElement.innerHTML;
    // console.log(s_name);
    audio.src = 'songs/'+s_name+'.mp3';
    audio.play();
    setInterval(function(){
        slider.value = audio.currentTime;
    },1000);
    setTimeout(function(){
        slider.max = audio.duration;
    },1000);
}

function playSong(){
    audio.play();
}
function pauseSong(){
    audio.pause();
}
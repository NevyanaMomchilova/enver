// Video Controls
let video = document.querySelector(".video");
let btnPlayPause = document.querySelector(".btn-play-pause");
let iconPlay = document.querySelector(".icon-play");
let iconPause = document.querySelector(".icon-pause");

function togglePlayPause() {
    if(video.paused) {
        btnPlayPause.classList.add("pause");
        iconPlay.style.display = "none";
        iconPause.style.display = "block";
        video.play();
    } else {
        btnPlayPause.classList.add("play");
        iconPause.style.display = "none";
        iconPlay.style.display = "block";
        video.pause();
    }
};

btnPlayPause.addEventListener("click", togglePlayPause);
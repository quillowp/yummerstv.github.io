const video = document.getElementById("video")
const button = document.getElementById("arrow")
const shadow = document.getElementById("shadow")
const error = document.getElementById("error")
const errorVideo = document.getElementById("errorVideo")

button.onclick = function() {
    button.remove()
    shadow.style.display = "none"
    video.play()
    setTimeout(() => {
        shadow.style.opacity = "100%"
        error.style.display = "inline"
        shadow.style.display = "block"
        errorVideo.style.display = "inline"
        video.pause()
        setTimeout(() => {
            window.location.href = "htmlOdd.html"
        }, 1500);
    }, 3000);
}
let lastTime;
function update(time) {  // creating update function that takes in time as a parameter 
    if(lastTime != null) {
        const delta = time - lastTime;
        // updating delta only when last time is present...
        // console.log(delta);

        let hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"))

        document.documentElement.style.setProperty("--hue", hue + delta * 0.009)
    }
    // console.log(time);
    lastTime = time; // setting the last time to the current time
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);

let playButton = document.querySelector(".play-button");
// playButton.addEventListener("mouse", () =>  {
//     playButton.style.backgroundColor = "red";
// })

playButton.addEventListener("click", () =>  {
    window.location.href = "./game.html"
})
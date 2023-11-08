let lastTime;
function update(time) {
  // creating update function that takes in time as a parameter
  if (lastTime != null) {
    const delta = time - lastTime;
    // updating delta only when last time is present...
    // console.log(delta);

    let hue = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--hue")
    );

    document.documentElement.style.setProperty("--hue", hue + delta * 0.009);
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
playButton.addEventListener("click", () => {
  // window.location.href = "./game.html"
});

let mechanicalBling_sound = new Audio(
  "./assets/mixkit-arcade-mechanical-bling-210.wav"
);
playButton.addEventListener("click", () => {
  mechanicalBling_sound.pause();
  mechanicalBling_sound.currentTime = 0;
  mechanicalBling_sound.play();
});

// making popups work

playButton.addEventListener("click", function () {
  document.querySelector(".popup1").classList.add("active");
});
document
  .querySelector(".popup1 .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup1").classList.remove("active");
  });

let closebtn_sound = new Audio("./assets/mixkit-game-ball-tap-2073.wav");
document
  .querySelector(".popup1 .close-btn")
  .addEventListener("click", function () {
    closebtn_sound.play();
  });

document
  .querySelector(".popup2 .close-btn")
  .addEventListener("click", function () {
    closebtn_sound.play();
  });

document
  .querySelector(".popup3 .close-btn")
  .addEventListener("click", function () {
    closebtn_sound.play();
  });

let nextButton = document.querySelector(".next-button");

let nextBtn_sound = new Audio(
  "./assets/mixkit-bonus-earned-in-video-game-2058.wav"
);
nextButton.addEventListener("click", () => {
  closebtn_sound.play();
});

let nextButton1 = document.querySelector("#next-button1");
nextButton1.addEventListener("click", function () {
  document.querySelector(".popup1").classList.remove("active");
  if (optionSelected == 0) {
    document.querySelector(".popup2").classList.add("active");
  } else if (optionSelected == 1) {
    document.querySelector(".popup3").classList.add("active");
  }
});

document
  .querySelector(".popup2 .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup2").classList.remove("active");
  });
document.querySelector(".popup3 .close-btn").addEventListener("click", () => {
  document.querySelector(".popup3").classList.remove("active");
});

// making options work

const options = document.querySelectorAll(".option");
let optionSelected;

options.forEach((option, i) => {
  option.addEventListener("click", () => {
    options.forEach((o, i) => (o.style.borderColor = ""));
    option.style.borderColor = "hsl(192, 85%, 62%)";
    optionSelected = i;
    // console.log(optionSelected);
  });
});

//storage things
// redirection to perfect location

let bonusPoint_sound = new Audio(
  "./assets/mixkit-bonus-earned-in-video-game-2058.wav"
);

let nextButton2 = document.querySelector(".popup2 #next-button2");

let name_input = document.querySelector("#name");

nextButton2.addEventListener("click", () => {
  localStorage.setItem("username", name_input.value);
  window.location.href = "/game.html";
  bonusPoint_sound.play();
});

let nextButton3 = document.querySelector(".popup3 #next-button3");
let player1_Name = document.querySelector("#name-1");
let player2_Name = document.querySelector("#name-2");

nextButton3.addEventListener("click", () => {
  // console.log("3rd button clicked");
  localStorage.setItem("player-1_name", player1_Name.value);
  localStorage.setItem("player-2_name", player2_Name.value);
  bonusPoint_sound.play();
  window.location.href = "/game2.html";
});

let scroll = document.getElementById("scroll");
scroll.addEventListener("click", () => {
  window.location.href = "/instruction.html"
})


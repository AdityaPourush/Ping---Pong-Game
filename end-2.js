let score_1 = document.querySelector("#score-1")
let score_2 = document.querySelector("#score-2")

score_1.textContent = localStorage.getItem("player-1-score") 
score_2.textContent = localStorage.getItem("player-2-score")

let play_again = document.querySelector("#play-again");
let home = document.querySelector("#home");

play_again.addEventListener("click", () => {
    window.location.href = window.history.back();
})

home.addEventListener("click", () => {
    window.location.href = "/index.html"
})

let player_name_1 = document.querySelector("#player-name-1")
let player_name_2 = document.querySelector("#player-name-2")
let winner_player = document.querySelector("player-name-winner")

player_name_1.textContent = localStorage.getItem("player-1_name");
player_name_2.textContent = localStorage.getItem("player-2_name");

if(parseInt(score_1.textContent) > parseInt(score_2.textContent)) {
    winner_player.textContent = player_name_1.textContent
} else if (parseInt(score_1.textContent) < parseInt(score_2.textContent)){
    winner_player.textContent = player_name_2.textContent
}

// if (score_1.textContent > score_2.textContent){
//     winner_player.textContent = player_name_1.textContent;
// }
// else if (score_1.textContent < score_2.textContent){
//     winner_player.textContent = player_name_2.textContent;
// }



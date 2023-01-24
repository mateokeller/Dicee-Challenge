// function roll() {
//   var left = Math.floor(Math.random() * 6) + 1;
//   var right = Math.floor(Math.random() * 6) + 1;

//   var lImg = `images/dice${left}.png`;
//   var lImg = `images/dice${left}.png`;
//   if (left === right) {
//     document.querySelector(".titulo").innerHTML = "Draw";
//   } else if (left > right) {
//     document.querySelector(".titulo").innerHTML = "Player 1 Wins";
//   } else {
//     document.querySelector(".titulo").innerHTML = "Player 2 Wins";
//   }
// }
// roll();
function roll() {
  var left = Math.floor(Math.random() * 6) + 1;
  var right = Math.floor(Math.random() * 6) + 1;

  var lImg = `images/dice${left}.png`;
  var rImg = `images/dice${right}.png`;
  if (left === right) {
    document.querySelector(".titulo").innerHTML = "💗Draw💗";
  } else if (left > right) {
    document.querySelector(".titulo").innerHTML = "💗 Player 1 Wins";
  } else {
    document.querySelector(".titulo").innerHTML = "Player 2 Wins 💗";
  }
  document.querySelector(".img1").setAttribute("src", lImg);
  document.querySelector(".img2").setAttribute("src", rImg);
  console.log(left);
  console.log(right);
}
roll();

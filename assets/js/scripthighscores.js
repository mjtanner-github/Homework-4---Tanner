// Triggered by the brower window point to and opening highscores.html.
window.onload = function(){
  // Gets the highscore user info from localStorage.
  document.getElementById("userScoreInfo0").innerHTML = localStorage.getItem("userHighScore");
}
// Returns to the top.  
function goBackClickEvent(e){
  // This worked the second time around.
  document.location.assign("../../index.html");
  // This was working but needed a close() on the current file. 
  //window.open("../../index.html");
}

// Upon puching the delete button, deletes the input element text and clears the local 
function deleteClickEvent(e) {
  document.getElementById("userScoreInfo0").innerHTML = "";
  localStorage.clear();
}

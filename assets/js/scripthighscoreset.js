
window.onload = function(){
  var userFinalScore = localStorage.getItem("userFinalScore");
  var text1 = "Your final score was ";
  document.getElementById("highscoreSentence").innerHTML = text1.concat(userFinalScore).concat(".");
}
  
function clickEvent(e) {
  
  var userFinalScore = localStorage.getItem("userFinalScore");
  var userInitials = document.getElementById("initials").value;
  var userHighScore = localStorage.getItem(userInitials);
  if(userHighScore === null || userHighScore < userFinalScore){
    localStorage.setItem("userHighScore" , userInitials.concat(": ").concat(userFinalScore));
  }
  localStorage.removeItem("userFinalScore");
  //location.href = 'highscores.html';
  window.open("./highscores.html");
}

// This all happens when the brower window points to highscoreset.html and opens.
window.onload = function(){
  // Gets the final score.
  var userFinalScore = localStorage.getItem("userFinalScore");
  // Assembles the text message.
  var text1 = "Your final score was ";
  // Posts the message.
  document.getElementById("highscoreSentence").innerHTML = text1.concat(userFinalScore).concat(".");
}
// User enters initials and presses the submit button.  
function clickEvent(e) {
  // Retrieves the users final score from localStorage.
  var userFinalScore = localStorage.getItem("userFinalScore");
  // Gets the user's initials from the interface.
  var userInitials = document.getElementById("initials").value;
  // For intend implementing complete highscore retrieval and posting.
  var userHighScore = localStorage.getItem(userInitials);
  if(userHighScore === null || userHighScore < userFinalScore){
    localStorage.setItem("userHighScore" , userInitials.concat(": ").concat(userFinalScore));
  }
  // Removes userFinalScore from localStorage. It is no longer needed.
  localStorage.removeItem("userFinalScore");
  None of these work:
  //document.getElementById("initials").options.length = 0;
  //document.location.assign("highscores.html");
  //document.location='highscores.html';
  //document.location.assign("highscores.html");
  // These 2 line work 
  window.open("highscores.html"); // Works, but opens an new browser window.
  window.close("highscoreset.html");
}

window.onload = function(){
  document.getElementById("userScoreInfo0").innerHTML = localStorage.getItem("userHighScore");
}
  
function goBackClickEvent(e){
  document.location.assign("../../index.html");
  //window.open("../../index.html");
}

function deleteClickEvent(e) {
  document.getElementById("userScoreInfo0").innerHTML = "";
  localStorage.clear();
}

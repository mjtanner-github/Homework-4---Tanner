window.onload = function(){
  document.getElementById("userScoreInfo").innerHTML = localStorage.getItem("userHighScore");
}
  
function goBackClickEvent(e){
  alert("go back");
  window.open("../../index.html");
  //location.href = '../../index.html';
}

function deleteClickEvent(e) {
  localStorage.clear();
}

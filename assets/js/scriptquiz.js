var timeLeft = 60;
var iterator = 0;
var timerInterval;

function runClock() {
  timerInterval = setInterval(function() {
    timeLeft--;
    document.getElementById("timer").innerHTML = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function decClock() {
  timeLeft = timeLeft - 10;
  if(timeLeft < 0){
    timeLeft = 0;
  }
}

function query(q){ 
  var quizArray = [["Commonly used data types DO NOT include:","1. strings","2. booleans","3. alerts","4. numbers",3],
                  ["The condition in an if/else statement is enclosed within _____","1. quotes","2. curly brackets","3. parenthesis","4. square brackets",3],
                  ["Arrays in JavaScript can be used to hold _____.","1. numbers and strings","2. other arrays","3. booleans","4. all of the above",4],
                  ["Strings must be enclosed within _____ when being assigned to a variable.","1. commas","2. curly brackets","3. quotes","4. parenthesis",3],
                  ["A very useful tool used during development and debugging for printed content to the debugger is:","1. JavaScript","2. terminal / bash","3. for loops","4. console.log",4]];
  
  document.getElementById("question").innerHTML = quizArray[q][0];
  document.getElementById("button1").innerHTML = quizArray[q][1];
  document.getElementById("button2").innerHTML = quizArray[q][2];
  document.getElementById("button3").innerHTML = quizArray[q][3];
  document.getElementById("button4").innerHTML = quizArray[q][4];
}

function clickEvent(e) {
  var response = "Wrong!";
  var answers = [3,3,4,3,4];
  if(e.target.id == "button1" && answers[iterator] === 1)
    response = "Correct!";
  else if(e.target.id == "button2" && answers[iterator] === 2)
    response = "Correct!";
  else if(e.target.id == "button3" && answers[iterator] === 3)
    response = "Correct!";
  else if(e.target.id == "button4" && answers[iterator] === 4)
    response = "Correct!";
    document.getElementById("correctness").innerHTML = response;
    document.getElementById("correctness").style.visibility = "visible";
    setTimeout(function() {document. getElementById("correctness").style.visibility = "hidden"}, 2000);   
  
    if(response === "Wrong!"){
      decClock();
      query(iterator);
    }
    else if(response === "Correct!" && iterator < 4)
      query(++iterator);
    else {
      localStorage.setItem("userFinalScore", timeLeft);
      clearInterval(timerInterval);
      location.href = 'highscoreset.html';
    }  
}

  runClock();
  query(iterator);

 

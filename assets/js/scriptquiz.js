var timeLeft = 60;
var iterator = 0;
var timerInterval;

// Normal countdown clock operation
function runClock() {
  timerInterval = setInterval(function() {
    timeLeft--;
    document.getElementById("timer").innerHTML = timeLeft;
    // Stops the clock from going below 0. 
    if (timeLeft <= 0) {
      timeLeft = 0;
      clearInterval(timerInterval);
      // Puts the user's final score into localStorage for use by scripthighscoreset.js.
      localStorage.setItem("userFinalScore", timeLeft);
      // Moves over to highscoreset.html.
      document.location.href = 'highscoreset.html';
    }
  }, 1000);
}

// 10 second penalty for wrong answers.
function decClock() {
  timeLeft = timeLeft - 10;
  // Works like runClock() if timeLeft goes below 0. 
  if(timeLeft <= 0){
    timeLeft = 0;
    clearInterval(timerInterval);
    localStorage.setItem("userFinalScore", timeLeft);
    document.location.href = 'highscoreset.html';
  }
}

//Poppulates the quiz answer buttons.
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

// Any button clicked triggers this.
function clickEvent(e) {
  var response = "Wrong!";
  // The correct responses go here in consecutive order.
  var answers = [3,3,4,3,4];
  // Correct response cases for the quiz
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
  
    // The user answers incorrectly.
    if(response === "Wrong!"){
      decClock();
      localStorage.setItem("userFinalScore", timeLeft);
      query(iterator);
    }
    // The quiz is not over - call for the next question.
    else if(response === "Correct!" && iterator < 4){
      localStorage.setItem("userFinalScore", timeLeft);
      query(++iterator);
    }
    // The quiz is over.
    else {
      localStorage.setItem("userFinalScore", timeLeft);
      clearInterval(timerInterval);
      document.location.href = 'highscoreset.html';
    }  
}
  // Starts the clock.
  runClock();
  // Starts the quiz.
  query(iterator);

 

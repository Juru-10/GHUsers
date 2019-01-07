var numQues = 15;
var numChoi = 3;
var answers = new Array(15);
answers[0] = "doesn't like";
answers[1] = "don't come";
answers[2] = "come";
answers[3] = "don't";
answers[4] = "doesn't make";
answers[5] = "seem";
answers[6] = "don't have";
answers[7] = "doesn't have";
answers[8] = "takes";
answers[9] = "want";
answers[10] = "comes";
answers[11] = "doesn't know";
answers[12] = "tries";
answers[13] = "play";
answers[14] = "lasts";
  function getScore(form) {

var score = 0;
var currElt;
var currSelection;
for (i=0; i<numQues; i++) {
currElt = i*numChoi;
answered=false;
for (j=0; j<numChoi; j++) {
  currSelection = form.elements[currElt + j];
  if (currSelection.checked) {
    answered=true;
    if (currSelection.value == answers[i]) {
      score++;
      break;
    }
  }
}
if (answered ===false){alert("Do answer all the questions, Please") ;return false;}
}

var scoreper = Math.round(score/numQues*100);
form.percentage.value = scoreper + "%";
form.mark.value=score;


}

var score=0;
var answer=prompt('What symbol is used for an "and" operator in JavaScript?');
if (answer === '&&'){
	score+=1;
}

var answer=prompt('What symbol is used for an "or" operator in JavaScript?');
if (answer === '||'){
	score+=1;
}

var answer=prompt('Give an example of a Boolean operator');
if (answer.toLowerCase() == 'true') {
	score+=1;
} else if(answer.toLowerCase() == 'false'){
	score+=1;
}

var crown='';
if (score===3){
	crown='Gold';
}else if (score===2){
	crown='Silver';
}else if (score===1){
	crown='Bronze';
}else{
	crown='Time to Study';
}

    document.getElementById('score').innerHTML =score;
    document.getElementById('crown').innerHTML =crown;


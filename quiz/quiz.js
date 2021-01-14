
var Questions = []








function Question(text,choices,answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctanswer = function(choices) {
	return choices === this.answer;

	
}



function Quiz(Questions) {
	this.score = 0;
	this.Questions = Questions;
	this.QuestionIndex = 0
}


Quiz.prototype.ended = function() {
	return this.Questions.length === this.QuestionIndex
}


Quiz.prototype.guess = function(answer) {
	this.QuestionIndex
}


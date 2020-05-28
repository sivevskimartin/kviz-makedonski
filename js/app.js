function populate() {
	if(quiz.isEnded()) {
		//showScores();
	}
	else{
		// show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
	}
}

var questions = {
	new Question("Whitch one is not an object oriented programing language?", ["Java", "C#", "C++", "C"], "C"),
	new Question("Whitch language is used for atyling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
	new Question("There are _____ main components of object oriented programing.", ["1", "6", "2", "4"], "4"),
	new Question("Whitch language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
	new Question("MVC is a _____.", ["Language", "Library", "Framework", "All"], "Framework")
};

var quiz = new Quiz(questions);

populate();
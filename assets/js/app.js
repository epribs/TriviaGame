var quizData = [
	{
		q:"Who does Michael accidentally hit with his car in the parking lot?",
		a1:"Meredith",
		a2:"Phyllis",
		a3:"Kelly",
		c:"Meredith"
	},
	{
		q:"On the night Pam got really drunk at the Dundies and kissed Jim, what did she win her Dundie for?",
		a1:"Longest engagement",
		a2:"Tidiest Desk",
		a3:"Whitest Sneakers",
		c:"Whitest Sneakers",
	},
	{
		q:"According to \"Prison Mike\", what is the worst thing about prison?",
		a1:"The orcs",
		a2:"The dementors",
		a3:"The banshees",
		c:"The dementors",
	},
]
var correctAnswers = 0;
var wrongAnswers = 0;
var questionsAnswered = 0;


function start() {
	$("#start").addClass("hide");
	quiz();
}

function quiz() {
	var qDiv = $("<div>");
		qDiv.attr("id", "question");
		$("#questionDiv").append(qDiv)
	
		var form = $("<form id=\"quizForm\" method=\"post\" name=\"buttons\" onsubmit=\"return false\">");
		qDiv.append(form);



	for (var i = 0; i < quizData.length; i++) {
		//Get and create question
		var q = quizData[i].q;
		var qHeader = $("<div>");
		qHeader.addClass("question");
		var qLi = $("<li>");

		qHeader.text([i + 1] + ". " + q);
		//Add to qDiv
		form.append(qLi);
		qLi.append(qHeader);
		//Create input buttons
		var a1 = quizData[i].a1;
		var a1Lab = $("<label>");
		a1Lab.addClass("radio-inline");
		var a1In = $("<input type=\"radio\" id=\"group" + [i] + "\" value=\"" + a1 + "\">");
		a1Lab.append(a1In);
		a1Lab.append(a1);

		var a2 = quizData[i].a2;
		var a2Lab = $("<label>");
		a2Lab.addClass("radio-inline");
		var a2In = $("<input type=\"radio\" id=\"group" + [i] + "\" value=\"" + a2 + "\">");
		a2Lab.append(a2In);
		a2Lab.append(a2);


		var a3 = quizData[i].a3;
		var a3Lab = $("<label>");
		a3Lab.addClass("radio-inline");
		var a3In = $("<input type=\"radio\" id=\"group" + [i] + "\" value=\"" + a3 + "\">");
		a3Lab.append(a3In);
		a3Lab.append(a3);

		qLi.append(a1Lab);
		qLi.append(a2Lab);
		qLi.append(a3Lab);
	}

		var submitBtn = $("<button class=\"btn btn-default btn-lg\" type=\"button\" onclick=\"check()\">Submit</button>");
		form.append(submitBtn);

}

function check() {
			event.preventDefault();
			for (var i = 0; i < quizData.length; i++) {
			var c = quizData[i].c;
			console.log(c);
			var radio = document.getElementById("group" + [i]);
			console.log(radio.value);
			if (radio.value == c && radio.checked) {
				correctAnswers++;
				questionsAnswered++;
				console.log("correct:" + correctAnswers);
			} else {
				wrongAnswers++;
				questionsAnswered++;
				console.log("wrong:" + wrongAnswers);
			}
			$("#score").removeClass("hide");
			$("#answered").text("Questions Answered: " + questionsAnswered);
			$("#correct").text("Correct: " + correctAnswers);
			$("#wrong").text("Wrong: " + wrongAnswers);
			$("#quiz").addClass("hide");
		}
	}
function reset () {
	$("#quiz").removeClass("hide");
	$("#score").addClass("hide");
}



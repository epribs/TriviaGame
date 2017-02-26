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
	for (var i = 0; i < quizData.length; i++) {
		//Create qDiv
		var qDiv = $("<div>");
		qDiv.append("id", "question");
		$("#questionDiv").append(qDiv)
		
		//Get and create question
		var q = quizData[i].q;
		var qHeader = $("<h3>");
		qHeader.text([i + 1] + ". " + q);
		//Add to qDiv
		$("#question").append(qHeader);

		//Create input buttons
		var a1 = quizData[i].a1;
		var a1In = $("<input type=\"radio\">");
		a1In.text(a1);

		var a2 = quizData[i].a2;
		var a2In = $("<input>");
		a2In.append("type", "radio");
		a2In.append("data-value", a2);
		a2In.text(a2);


		var a3 = quizData[i].a3;
		var a3In = $("<input>");
		a3In.append("type", "radio");
		a3In.append("data-value", a3);
		a3In.text(a3);

		//Create Answer Div
		var aDiv = $("<div>");
		aDiv.append("id", "answers");
		//Add Answer to Question Div
		$("#question").append(a1In);
		$("#question").append(a2In);
		$("#question").append(a3In);

		var c = quizData[i].c;

		// var quest = 
		$
		
	}
}
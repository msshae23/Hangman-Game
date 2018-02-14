		//set my variables for different movies//
var allSupplies = ["glue", "pens", "pencils", "stapler", "binders"];
var correctWord = [];
var wrongWord = [];
var underscore = [];
var winCount = 0


var docUnderScore = document.getElementsByClassName("underscores");
var docCorrectGuesses = document.getElementsByClassName("correctGuesses");
var docWrongGuesses = document.getElementsByClassName("wrongGuesses");

	//create an array of the correct movies//
	//comp chooses random movie
var ranNum = Math.floor(Math.random() * allSupplies.length);
var chosenWord = allSupplies[ranNum]
console.log(chosenWord);

		//generating underscores based on chosenword
var underscoreGenerator = () => {
	for (var i = 0; i < chosenWord.length; i++){
		underscore.push("_");
		docUnderScore[0].innerHTML = underscore.join(" ");

	}
	return underscore;
}
console.log(underscoreGenerator());

		//acknowledging players guess
document.addEventListener("keypress", (event) => {
	var keyword = String.fromCharCode(event.keyCode);
	if (chosenWord.indexOf(keyword) > -1) {
		correctWord.push(keyword);
		
		underscore[chosenWord.indexOf(keyword)] = keyword;
		docUnderScore[0].innerHTML = underscore.join(" ");
		docCorrectGuesses[0].innerHTML = correctWord;


		if (underscore.join("") == chosenWord) {
			alert("Nicely Done!");
		}
	
	} else {
		wrongWord.push(keyword);
		docWrongGuesses[0].innerHTML = wrongWord;
	}
$(".winCounter").click(function() {
 	alert("You've Scored a Point!");
 	winCount++;
 	

	("You've figured out" + winCount + " words!");
});
	
});




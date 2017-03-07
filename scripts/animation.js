
var myColors = ["darkred", "yellow", "darkblue", "darkgreen"];

function randomColor() {
	var randomNumber = Math.floor(Math.random()*(myColors.length));
	var randomColor = myColors[randomNumber];
	myColors.splice(randomNumber, 1);
	console.log(randomNumber);
	console.log(myColors);
	console.log(randomColor);
	$("#loader").css("border-top-color", randomColor);
};

var colorGenerator = setInterval(randomColor, 750);

$(document).ready(function() {
	setTimeout(function(){
		$('body').addClass('loaded');
		$(document).scrollTop(0);
		clearInterval(colorGenerator);
	}, 3000);
});

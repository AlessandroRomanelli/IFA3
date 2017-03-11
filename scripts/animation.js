!function (){
	//Hiding the scroll bar during loading
	document.body.style.overflow = 'hidden';
	//Changing colors in the loader
	//               RED 				YELLOW 			BLUE			GREEN
	var myColors = ["cc3939", "#fff67a", "#4482ff", "#3f8e33"];
	//Getting a random color from above color array
	function randomColor() {
			//Random number for index
			var randomNumber = Math.floor(Math.random()*(myColors.length));
			//Random color is picked
			var randomColor = myColors[randomNumber];
			//Chosen color is removed from array
			myColors.splice(randomNumber, 1);
			//Change color of the loader
			$("#loader").css("border-top-color", randomColor);
		};
	//Call the color change every .75s
	var colorGenerator = setInterval(randomColor, 750);

	//When DOM is ready
	$(document).ready(function() {
		//Wait 3seconds (fake loading)
		setTimeout(function(){
			//Stop the loading animation
			$('body').addClass('loaded');
			//Top of the document
			$(document).scrollTop(0);
			//Hide the loadingHint
			$("#loadingHint").fadeOut();
			//Stop the code from changing color
			clearInterval(colorGenerator);

			//Sticky header
			!function stickyHeader(){
				var didScroll;
				var lastScrollTop = 0;
				var delta = 5;
				var navbarHeight = $("#back2top").outerHeight();

				//When user scrolls
				$(window).scroll(function(event){
					didScroll = true;
				});

				//Function to be called when user scrolls
				function hasScrolled() {
					//ScrollTop, store the distance from top of page
					var st = $(this).scrollTop();
					// If user scrolls less than 5 px
					if(Math.abs(lastScrollTop - st) <= delta)
					//Quit
						return;
					// If it's scrolling up
					if (st > lastScrollTop && st > navbarHeight && st < 3000){
							// Scroll right, Hide
							$('#back2top').removeClass('move-left').addClass('move-right');
					} else {
							// Scroll left, show
							if(st + $(window).height() < $(document).height()) {
									$('#back2top').removeClass('move-right').addClass('move-left');
							};
					};
					if (st < 600) {
						$('#back2top').removeClass('move-left').addClass('move-right');
					}
					if (st > 2800) {
						$('#back2top').removeClass('move-right').addClass('move-left');
					}
 					lastScrollTop = st;
				};

				setInterval(function() {
					if (didScroll) {
						hasScrolled();
						didScroll = false;
					}
				}, 250);
			}();

			setTimeout(function () {
				$("#title h1").removeClass("hidden");
				setTimeout(function () {
					$("#title p").removeClass("hidden scrolled-up");
					setTimeout(function () {
						$("#nav-header").removeClass("hidden");
						setTimeout(function () {
							document.body.style.overflowY = 'visible';
						}, 2000);
					}, 750);
				}, 1500);
			}, 1000);

		}, 3000);
	});
}();

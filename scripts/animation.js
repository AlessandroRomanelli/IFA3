!function (){
	document.body.style.overflow = 'hidden';
	//Changing colors in the loader
	var myColors = ["darkred", "yellow", "darkblue", "darkgreen"];
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
			document.body.style.overflowY = 'visible';

			!function stickyHeader(){
				var didScroll;
				var lastScrollTop = 0;
				var delta = 5;
				var navbarHeight = $("#nav-header").outerHeight();

				$('button').on('click', function() {
					$.smoothScroll('+=' + $(window).height());
				});

				$(window).scroll(function(event){
					didScroll = true;
				});

				function hasScrolled() {
					var st = $(this).scrollTop();
					if(Math.abs(lastScrollTop - st) <= delta)
					return;
					if (st > lastScrollTop && st > navbarHeight){
							// Scroll right
							$('#nav-header').removeClass('nav-left').addClass('nav-right');
					} else {
							// Scroll left
							if(st + $(window).height() < $(document).height()) {
									$('#nav-header').css("position", "fixed");
									$('#nav-header').removeClass('nav-right').addClass('nav-left');
							}
					}
					lastScrollTop = st;
					setTimeout(function(){
						if (lastScrollTop !== 0) {
							$('#nav-header ul').addClass('pinned');
						} else {
							$('#nav-header ul').removeClass('pinned');
						};
					}, 500);
				}

				setInterval(function() {
					if (didScroll) {
						hasScrolled();
						didScroll = false;
					}
				}, 250);
			}();

		}, 3000);
	});
}();

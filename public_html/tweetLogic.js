	var user = prompt("Please enter twitter username")
	while (user === "" || user === null){
		user = prompt("Oops! Please try again")
	}
	
	$( document ).ready(function() {
		document.title = "mitter - @"+user
		document.getElementById("header").innerHTML = "mitter - the minimalist twitter viewer - @"+user;
	});


	function showTweets(){
		var config1 = {
		  "profile": {"screenName": user},
		  "domId": 'example1',
		  "maxTweets": 50,
		  "enableLinks": true,
		  "showImages" : true,
		  "showUser": false,
		  "showTime": true,
		  "showInteraction": false
		};
		twitterFetcher.fetch(config1);
	}

	//Start the game
	showTweets()

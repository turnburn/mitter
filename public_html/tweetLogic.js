	var user = prompt("Please enter twitter username")
	
	$( document ).ready(function() {
		document.title = "mitter - "+user
		document.getElementById("header").innerHTML = "simple twitter viewer - @"+user;
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

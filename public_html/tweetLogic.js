	$.ajax({method:"GET",
				url: "/recipe/"+name,
				dataType:"json",
				success: function(data){
					console.log("Loading recipe into form: ",data);
					
					//fill in form		
					$("#recipeName").val(data.name.split("_").join(" "));
					$("#recipeDuration").val(data.duration);
					$("#recipeIngredients").val(data.ingredients);
					$("#recipeDirections").val(data.directions);
					$("#recipeNotes").val(data.notes);
				},
				cache:false
	});


	var user = prompt("Please enter twitter username")
	
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

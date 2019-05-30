var website= "https://www.smashingmagazine.com";

// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#articles").append("<div class='jumbotron' data-id='" + data[i]._id + "'>" + data[i].title + "<br/>" + "<a href=>" + website + data[i].link + "</a>"+ "<br/>" + "<button class='save-article btn btn-primary pull-right' data-id='" + data[i]._id + "'>Save</button>" +"</div>" );
  }
});


// click on 'save-article' button(s)...
$(document).on("click", ".save-article", function(){
	// grab the id associated with the article
	var thisId = $(this).attr("data-id");
	console.log(thisId);

	$(this).text("Saved");
	$(this).attr("disabled", "disabled");
	// POST request to change the article to saved
	$.ajax({
		method: "POST",
		url: "/save",
		data: {
			id: thisId,
			saved: true
		}

	})
	// with that done...
	.done(function(data){
		console.log(data);
	});
});


// ///**/*/*/**/*/*/**/ */



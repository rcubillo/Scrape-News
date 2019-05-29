// click on the 'Latest' button
$("#new").click(function(){
	// delete any unsaved records in MongoDB
	$.ajax({
		method: "GET",
		url: "/clean"
	})
	// With that done, use ajax to trigger a new scrape
	.done(function(){
		$.ajax({
			method: "GET",
			url: "/scrape"
		})
		// with that done, add the articles to the page...
		.done(function(){
			$("#articles").empty();

			// grab the articles as json...
			$.getJSON("/articles", function(data){

				console.log("Inside getJSON");
				console.log(data);
				// for each one...
				for (var i = 0; i < data.length; i++){
					// display the information on the page
				 $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br/>" + "<a href=>" + website + data[i].link + "</a>"+ "<button class='save-article btn btn-primary pull-right' data-id='" + data[i]._id + "'>Save</button>" +"</p>" );

					if (data[i].saved) {
						// disable the save button
						var articleSelector = ".save-article[data-id='" + data[i]._id + "']";
						$(articleSelector).attr("disabled", "disabled");
						$(articleSelector).text("Saved");
					};
				}
			});
		});
	});
});

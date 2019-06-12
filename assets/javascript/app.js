$(document).ready(function () {

    // my giphy app key: Kq3vyYsmkT8yZyWSqjK4ehg2MLJW5eha

    /// Global Variables

    // array of the initial default search buttons
    var buttons = ["Luke Skywalker", "Obi Wan Kanobi", "Darth Vader", "Death Star", "Han Solo", "Chewbacca", "Jabba the Hutt"];

    renderButtons();

    function displayGif() {
        $("#gif-area").html("");
        var search = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=Kq3vyYsmkT8yZyWSqjK4ehg2MLJW5eha&limit=10";

        // ajax call
        // console.log(search);
        // console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // log out the response to make sure i get a response from the api
            console.log(response);
            // make a for loop to display all the gifs in the response data array

            for (i = 0; i < response.data.length; i++) {
                // console.log(response.data[i].rating);
                // create a div to hold the gif
                var gifDiv = $("<div>");
                // store the rating
                var rating = response.data[i].rating;
                // console.log(rating);
                // create an element to hold the rating
                var ptag = $("<p>").text("Rating: " + rating);
                // display the rating
                gifDiv.append(ptag);
                // variable to hold the still image
                var imgStill = response.data[i].images.fixed_width_still.url;
                // variable to hold the animate image
                var imgAnimated = response.data[i].images.fixed_width.url;
                // test logs to make sure i'm getting the correct data
                // console.log(imgStill);
                // console.log(imgAnimated);
                // create the image tag to hold the image
                var image = $("<img>").attr("src", imgStill).attr("data-still", imgStill).attr("data-animate", imgAnimated).attr("data-state", "still").addClass("gif");
                console.log(image);
                gifDiv.append(image);
                $("#gif-area").append(gifDiv);


            }



        });
    };







    // function for rendering the buttons in the sidebar

    function renderButtons() {
        // clear the button-area div so that the buttons aren't duplicated every time the user adds a new button
        $("#button-area").empty();

        // make a for loop that goes through the buttons array and displays the default search buttons
        for (i = 0; i < buttons.length; i++) {
            var a = $("<button>");
            // add a class to each button
            a.addClass("button");
            // add a data attribute with the name of the current movie in the array
            a.attr("data-name", buttons[i]);
            // add a text attribute that will be displayed on the button
            a.text(buttons[i]);
            // add the button to the button sidebar
            $("#button-area").append(a);
            // $("#button-area").append("<br>");

        }
    }



    // run the renderButtons function so that the initial default search buttons are added to the page


    $(document).on("click", ".button", displayGif);

    $(document).on("click", ".gif", function () {

        var state = $(this).attr("data-state");
        console.log(state);
        console.log("click");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    $("#add-cat").on("click", function(event){
        event.preventDefault();

        var cat = $("#gif-input").val().trim();
        buttons.push(cat);
        renderButtons();
    });





});
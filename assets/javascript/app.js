

/// Global Variables

// array of the initial default search buttons
var buttons = ["Luke Skywalker", "Obi Wan Kanobi", "Darth Vader", "Death Star", "Han Solo", "Chewbacca", "Jabba the Hutt"];

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
renderButtons();

$("button").on("click", function(){
    console.log($(this).attr("data-name"));
})


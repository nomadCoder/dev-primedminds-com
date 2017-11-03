$(document).ready(function() {

    $(".partner3").on("mouseenter", function(event) {
        event.preventDefault();
        $(".pbio3").slideDown(100);
        $(".pbio3").css("display", "table");
    });

    // move mouse to disappear / show cursor
    $(".partner1").on("mouseleave", function() {
        $(".pbio1").slideUp(100);
    });

});    
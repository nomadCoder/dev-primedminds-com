$(document).ready(function() {
    // ABOUT PAGE - team bios 
    // on hover, appear
    $(".team1").on("mouseenter", function() {
        $(".bio1").slideDown(100);
        $(".bio1").css("display", "table");
    });
    $(".team2").on("mouseenter", function() {
        $(".bio2").slideDown(100);
        $(".bio2").css("display", "table");
    });
    $(".team3").on("mouseenter", function() {
        $(".bio3").slideDown(100);
        $(".bio3").css("display", "table");
    });
     $(".team1").on("mouseleave", function() {
        $(".bio1").slideUp(100);
        // $(".bio1").css("display", "table");
    });
    $(".team2").on("mouseleave", function() {
        $(".bio2").slideUp(100);
        // $(".bio2").css("display", "table");
    });
    $(".team3").on("mouseleave", function() {
        $(".bio3").slideUp(100);
        // $(".bio2").css("display", "table");
    });

    //partner mouse over
    $(".partner1").on("mouseenter", function() {
        $(".pbio1").slideDown(100);
        $(".pbio1").css("display", "table");
    });
    $(".partner2").on("mouseenter", function(event) {
        event.preventDefault();
        $(".pbio2").slideDown(100);
        $(".pbio2").css("display", "table");
    });
    $(".partner3").on("mouseenter", function(event) {
        event.preventDefault();
        $(".pbio3").slideDown(100);
        $(".pbio3").css("display", "table");
    });

    // move mouse to disappear / show cursor
    $(".partner1").on("mouseleave", function() {
        $(".pbio1").slideUp(100);
    });

    $(".partner2").on("mouseleave", function(event) {
        event.preventDefault();
        $(".pbio2").slideUp(100);
    });
    
    $(".partner3").on("mouseleave", function(event) {
        event.preventDefault();
        $(".pbio3").slideUp(100);
    });


    $(".team1,.team2,.team3").hover(function() {
        $(this).css('cursor', 'pointer');
    });

    $(".partner1,.partner2,.partner3").hover(function() {
        $(this).css('cursor', 'pointer');
    });

    $(".partner1").on("mouseleave", function() {
        $(".pbio1").slideUp(100);
    });
    $(".partner2").on("mouseleave", function() {
        $(".pbio2").slideUp(100);
    });
     $(".partner3").on("mouseleave", function() {
        $(".pbio3").slideUp(100);
    });


});

// when the page is ready
$(document).ready(function() {
    // keep tracks of which are open 
    var question_status = [];
    // initally, all statuses are false (meaning closed)
    for (var i=0; i<6; i++) {
        question_status[i] = false;
    }

    $("#q1").click(function() {
        expandAnswer(1);
    });
    $("#q1").hover(function() {
        $(this).css('cursor', 'pointer');
    });
    $("#q2").click(function() {
        expandAnswer(2);
    });
    $("#q2").hover(function() {
        $(this).css('cursor', 'pointer');
    });
    $("#q3").click(function() {
        expandAnswer(3);
    });
    $("#q3").hover(function() {
        $(this).css('cursor', 'pointer');
    });
    $("#q4").click(function() {
        expandAnswer(4);
    });
    $("#q4").hover(function() {
        $(this).css('cursor', 'pointer');
    });
    $("#q5").click(function() {
        expandAnswer(5);
    });
    $("#q5").hover(function() {
        $(this).css('cursor', 'pointer');
    });
    $("#q6").click(function() {
        expandAnswer(6);
    });
    $("#q6").hover(function() {
        $(this).css('cursor', 'pointer');
    });

    function expandAnswer(num) {
        // close all other questions
        for (var i=0; i<question_status.length; i++) {
            $("#a" + (i+1)).slideUp(175);
        }

        // if not already open, expand the answer
        if (!question_status[num-1]) {
            $("#a" + num).slideDown(175);
            question_status[num-1] = true;
        } else {
            // mark as collapsed
            question_status[num-1] = false;
        }

        // scroll so that this question is the top question
        // subtract 70 to account for navbar
        var offset = $("#q" + num).offset().top - 70;
        $("body").animate({ scrollTop: offset }, "fast");
    }
});
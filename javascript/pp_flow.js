// GLOBAL VARIABLES
var currentIndex = 0;
var TOTAL_NUM_SLIDES;
var urlParams = {};

var flow = [{descriptor: "PPV1", link: "zbfVO-JvW10"},
            {descriptor: "PPI1", link: "PPI1.html"},      // konig bridge interactive
            {descriptor: "PPV2", link: "F1ULIVqnkbc"},
            {descriptor: "PPI2", link: "PPI2.html"},
            {descriptor: "PPV3", link: "uvEQjJW1UzY"},
            {descriptor: "PPS3", link: "PPS3.html"},
            {descriptor: "PPV4", link: "97CunrfBqyQ"},     
            {descriptor: "PPI4", link: "PPI4.html"},
            {descriptor: "PPV5", link: "sepeZGYTyk8"},
            {descriptor: "PPI5", link: "PPI5.html"},
            {descriptor: "PPV6", link: "JxOgqNtglas"},     
            {descriptor: "PPV6B", link: "jR8OfQrjF5Q"},     
            {descriptor: "PPI6", link: ""},
            {descriptor: "PPV7", link: "f79SjueqhoM"},
            {descriptor: "PPI7", link: ""},
            {descriptor: "PPV8", link: "1gV4Dclvg38"},     
            {descriptor: "PPI8", link: "PPI8.html"},
            {descriptor: "PPV9", link: "nlGLZRmv8fw"},
            {descriptor: "PPI9", link: "PPI9.html"},
            {descriptor: "PPV10", link: "EofnBtT5Z14"},
            {descriptor: "PPI10", link: "PPI10.html"},
            {descriptor: "PPV11", link: "DGk6iJLl0AQ"},

]; 

// find the URL parameters
// i.e. http://website.com/page.html?param1=x&param2=y
//      returns param1 = x, param2 = y
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query)) {
       urlParams[decode(match[1])] = decode(match[2]);
    }
})();


// go to the slide specified by the URL param
function goToSlide() {
    var found = false;
    // if already has slide param
    if ( urlParams["s"] != null) {
        // for safety, make sure index exists 
        var param = urlParams["s"];
        for (var i=0; i<flow.length; i++) {
            if ( param == flow[i].descriptor ) {
                currentIndex = i; 
                found = true;
            }
        }
    } else {
        // if there is no slide param
        currentIndex = 0;
    }
    if (!found) {
        currentIndex = 0;
    }
    window.history.pushState(urlParams, "", "?s=" + flow[currentIndex].descriptor);
    // cycleItems();
    showItem();
}

function showItem() {
    var descriptor = flow[currentIndex].descriptor;
    if (descriptor.indexOf("V") != -1) {
        loadVideo();
    } else if (descriptor.indexOf("I") != -1) {
        loadInteractive();
    } else if (descriptor.indexOf("S") != -1) {
        loadSlideshow();
    }
}

// load the video onto the least recently used div
function loadVideo() {
    console.log("loading " + flow[currentIndex].link + " into iframe0");
    document.getElementById("iframe0").src = "https://www.youtube.com/embed/" + flow[currentIndex].link + "?rel=0";
}

function loadInteractive() {
    if (flow[currentIndex].link == "") {
        loadPlaceholder();
    } else {
        console.log("loading " + flow[currentIndex].link);
        $("#body").load(flow[currentIndex].link);
        console.log(document.getElementById("body"));
    }
}

function loadPlaceholder() {
    $("#inside").addClass("placeholder");
}

function loadSlideshow() {
    console.log("loading " + flow[currentIndex].link);
    // make sure its not empty 
    if ( flow[currentIndex].link == "" ) {
        loadPlaceholder();
    } else {
        $("#inside").load(flow[currentIndex].link);
        $("#inside").addClass("container-slideshow");
    }
}

function updateArrows() {
    if ( currentIndex == 0 ) {
        $('.left-arrow').hide();
    } else if (currentIndex >= TOTAL_NUM_SLIDES -1) {
        $('.right-arrow').hide();
    } else {
        $('.left-arrow').show();
        $('.right-arrow').show();
    }
}


// when the page loads
$(document).ready(function () {
//     // save length
    TOTAL_NUM_SLIDES = flow.length;

    // call this so that if url sent with a specific slide number, it will start at that slide
    goToSlide();

    updateArrows();

    $('.right-arrow').on('click', function() {
        slideChange(1);
    });

    $('.left-arrow').on('click', function() {
        slideChange(-1);
    });

    function slideChange(n) {
        // update current index
        currentIndex += n; 
        console.log('slide change', currentIndex);
        if (currentIndex >= TOTAL_NUM_SLIDES) { 
            // stay on last page
            currentIndex = TOTAL_NUM_SLIDES - 1;
        } else if (currentIndex < 0) {
            // stay on first page
            currentIndex = 0;
        }

        var nextDescriptor = flow[currentIndex].descriptor; 
        if (nextDescriptor.indexOf("V") != -1) {
            // is video 
            window.location.href = "flow_video.html?s=" + nextDescriptor;
        } else if (nextDescriptor.indexOf("I") != -1) {
            // is interactive 
            window.location.href = "pp_flow.html?s=" + nextDescriptor;
        } else if (nextDescriptor.indexOf("S") != -1) {
            // is slideshow
            window.location.href = "pp_flow.html?s=" + nextDescriptor;
        }
    }
});

<?php 
    // set page variables
    $pageTitle = "About";
    $jsDocumentFn = "/javascript/about.js";
    $headerAdd = '<link rel="stylesheet" type="text/css" href="/stylesheets/about.css">';
    // include the document start and standard page header
    // include 'http://dev-primedminds.mybluemix.net/includes/doc-start.php';
    include $_SERVER['DOCUMENT_ROOT'].'/includes/doc-start-basic.php';
    include $_SERVER['DOCUMENT_ROOT'].'/includes/page-header.php';
?>

<!-- START: page content -->

<div id="main">

    <div class="canvas">


    <div class="exploration-page-container">
        <div class="grid" id="main">
            <div class="col-1-2 materials">
                <div id="header">
                    <h3 class="header">Teaching Materials</h3>
                </div>
                <p>To complement Primed Minds Explorations, we have developed Teacher Resources. These are stand-alone activities that help teachers plan lessons that dramatically flesh out all parts of our Explorations. 
                    <br><br> 
                    Teacher Resources include lesson plans, handouts, and other extending content. They are presented on a friendly map complete with clickable Orientation Videos that explain how to use other landmarks (ie. downloadable handouts, etc.). The Orientation Videos are the heart of our Teacher Resources. They make the process of planning and running classes fun, and are the next best thing to having us there with you!
                    <br><br>
                    MOUSEOVER landmarks for a description of the content, CLICK the pop-up bubble to take you to the content.
                    <br><br> 
                    Our initial Teacher Resources are currently being road tested from England and America, to Africa and Australia, and feedback so far has been amazing!
                    <br><br>
                    Check out an <a href="maps/teacher_resources/PPTRMap.html" target="_blank">EXAMPLE OF OUR TEACHER RESOURCES</a>. 
                    <br><br> 
                    Interested in more of our Teacher’s Resources? Email us at: teachers@primedminds.com
                </p>
                <br><br>
            </div>
            <!-- end first col -->

            <div class="col-2-2" id="sliderFrame">
                <div id="slider">
                    <img class="slides" src="assets/resources/MagicCircles1.jpg" >
                    <img class="slides" src="assets/resources/MagicCircles2.jpg" >
                    <img class="slides" src="assets/resources/MagicCircles3.jpg" >
                    <img class="slides" src="assets/resources/MagicCircles4.jpg" >
                    <img class="slides" src="assets/resources/MagicCircles5.jpg" >
                    <img class="slides" src="assets/resources/MagicCircles6.jpg" >
                    <img class="slides" src="assets/resources/MagicCircles7.jpg" >
                    <img class="slides" src="assets/resources/MagicCircles8.jpg" >
                    <img class="slides" src="assets/resources/MagicCircles9.jpg" >
                </div> <!-- end slider div-->

                <a class="arrows left-arrows" onclick="plusDivs(-1)"><i class="material-icons md-36">arrow_back</i></a>
                <a class="arrows right-arrows" onclick="plusDivs(+1)"><i class="material-icons md-36">arrow_forward</i></a>
            </div> <!-- end second col -->
        </div> <!-- end grid -->

        <div class="grid" id="source">
            <h1 class="header" id="source-header">External Resources</h1>
            <div class="sources">
                <div class="col-1-3">
                    <img class="src1" src="assets/resources/numberphile-logo.jpg">
                </div>
                <div class="col-2-3">
                    <img class="src2" src="assets/resources/desmos-logo.png">
                </div>
                <div class="col-3-3">
                    <img class="src3" src="assets/about/betterexplained.jpg">
                </div>
            </div>
        </div> <!-- end grid/ team div  -->

        <div class="bio1 sources">
            <h3>Numberphile<a href='http://www.numberphile.com/' target="_blank"><i class="material-icons">exit_to_app</i></a></h3>
            <p>A wonderful Youtube channel that has many videos that talk about all sorts of delightful lands from the world of mathematics. Subject matter ranges in difficulty, but some great places to start include contributions by: </p>
            <p>Tadashi Tokieda: <a onclick="boomLightBoxShow('divStatic');">Freaky Dot</a>
                <span id="divStatic" class="boom-lightbox" style="display: none;">
                    <iframe id="ytplayer" width="720" height="405" src="https://www.youtube.com/embed/QAja2jp1VjE" frameborder="0" allowfullscreen></iframe>
                </span> and <a onclick="boomLightBoxShow('divResponsive');">Perplexing Paperclip</a>
                <span id="divResponsive" class="boom-lightbox" style="display: none;">
                    <iframe id="ytplayer" width="720" height="405" src="https://www.youtube.com/embed/wGkvyN6s9cY" frameborder="0" allowfullscreen></iframe>
                </span>
            </p>
            <p>Vi Hart:
                <a onclick="boomLightBoxShow('divResponsive2');">Infinity Elephant</a>
                <span id="divResponsive2" class="boom-lightbox" style="display: none;">
                    <iframe id="ytplayer" width="720" height="405" src="https://www.youtube.com/embed/DK5Z709J2eo"  frameborder="0" allowfullscreen></iframe>
                </span>
                and
                <a onclick="boomLightBoxShow('divResponsive3');">Hexaflagon</a>
                <span id="divResponsive3" class="boom-lightbox" style="display: none;">
                    <iframe id="ytplayer" width="720" height="405" src="https://www.youtube.com/embed/VIVIegSt81k" frameborder="0" allowfullscreen></iframe>
                </span>
            </p>
            <p>Simon Pampena:
                <a onclick="boomLightBoxShow('divResponsive4');">The Epic Story of Circle</a>
                <span id="divResponsive4" class="boom-lightbox" style="display: none;">
                    <iframe id="ytplayer" width="720" height="405" src="https://www.youtube.com/embed/sG_6nlMZ8f4" frameborder="0" allowfullscreen></iframe>
                </span>
            </p>
            <p>Katie Steckles:
                <a onclick="boomLightBoxShow('divResponsive5');">Fold and Cut</a>
                <span id="divResponsive5" class="boom-lightbox" style="display: none;">
                    <iframe id="ytplayer" width="720" height="405" src="https://www.youtube.com/embed/ZREp1mAPKTM" frameborder="0" allowfullscreen></iframe>
                </span>
            </p>
        </div>
        <div class="bio2 sources">
            <h3>Desmos.com<a href='https://www.desmos.com/' target="_blank"><i class="material-icons">exit_to_app</i></a></h3>
            <p id='desmosP'>A wonderful website graphing calculator that allows you to explore what functions look like. Has some delightful interactive pieces including <a href="https://teacher.desmos.com/marbleslides-lines" target="_blank">Marbleslide <img src="assets/Interactive.png" height="14"></a></p>
        </div>
        <div class="bio3 sources">
            <h3>BetterExplained.com<a href='https://betterexplained.com/' target="_blank"><i class="material-icons">exit_to_app</i></a></h3>
            <p>A magnificent repository of better explanations than you will typically encounter for many mathematical concepts covered between middle school and college. For the day you encounter imaginary numbers <a href="https://betterexplained.com/articles/a-visual-intuitive-guide-to-imaginary-numbers/" target="_blank">Kalid’s explanation</a> is magnificent.</p>
        </div>

        <!-- contact us button -->
        <div id="contact">
            <a id="contactbutton" href="contact.html">Contact Us</a>
        </div>
    </div>

    </div>

</div>


<!-- END: page content -->

<?php
    // include the document end to close body and html
    include $_SERVER['DOCUMENT_ROOT'].'/includes/page-footer.php';
    require $_SERVER['DOCUMENT_ROOT'].'/includes/doc-end.php';
?>   
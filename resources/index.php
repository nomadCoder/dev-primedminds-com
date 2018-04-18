<?php 
    // Set page variables
    
    $pageTitle = "Resources"; // Variable to append the page title "Primed Minds" with " - <pageTitle>"
    // $addHeadCode = '<style type="text/css"> body { background-color: #000; } </style>'; // Variable to add any additional code to the head for the page

    // Include the document start and standard page header
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/doc-start-basic.php';
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/page-header.php';
?>

<!-- START: page content -->

<div id="main">

    <div class="canvas">

        <div class="col-4"> <!-- Side page menu -->
            <h3 class="header">Teaching Materials</h3>
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
        </div>

        <div class="col-8"> <!-- Start slideshow column -->
            <?php
            
                $slide_images = ' [ { "src" : "/media/slideshow/resources/MagicCircles1.jpg" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/resources/MagicCircles2.jpg" , "alt" : "" } , 
                                    { "src" : "/media/slideshow/resources/MagicCircles3.jpg" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/resources/MagicCircles4.jpg" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/resources/MagicCircles5.jpg" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/resources/MagicCircles6.jpg" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/resources/MagicCircles7.jpg" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/resources/MagicCircles8.jpg" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/resources/MagicCircles9.jpg" , "alt" : "" } ] ';

                include $_SERVER['DOCUMENT_ROOT'].'/php-inc/asset-slideshow.php';   
            ?>                     
        </div> <!-- End slideshow column --> 

    </div>

    <div class="row canvas">
        <h2>External Resources</h2>
    </div>

    <div class="row canvas">

        <div class="col-4">
            <a data-toggle="collapse" href="#partner01" aria-expanded="false" aria-controls="partner01">
                <img src="/assets/resources/numberphile-logo" title="Numberfile">
            </a>    
        </div>
        <div class="col-4">
            <a data-toggle="collapse" href="#partner02" aria-expanded="false" aria-controls="partner02">
                <img src="/assets/resources/desmos-logo" title="Desmos">
            </a>
        </div>
        <div class="col-4">
            <a data-toggle="collapse" href="#partner03" aria-expanded="false" aria-controls="partner03">
                <img src="/assets/about/betterexplained.jpg" title="Better Explained">
            </a>
        </div>
    </div>   
    <div class="row canvas">
        <div class="col-12">
            <div class="collapse" id="partner01">
                <div class="card card-block">
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
            </div>
            <div class="collapse" id="partner02">
                <div class="card card-block">
                    <h3>Desmos.com<a href='https://www.desmos.com/' target="_blank"><i class="material-icons">exit_to_app</i></a></h3>
                    <p id='desmosP'>A wonderful website graphing calculator that allows you to explore what functions look like. Has some delightful interactive pieces including <a href="https://teacher.desmos.com/marbleslides-lines" target="_blank">Marbleslide <img src="assets/Interactive.png" height="14"></a></p>
                </div>
            </div>
            <div class="collapse" id="partner03">
                <div class="card card-block">
                    <h3>BetterExplained.com<a href='https://betterexplained.com/' target="_blank"><i class="material-icons">exit_to_app</i></a></h3>
                    <p>A magnificent repository of better explanations than you will typically encounter for many mathematical concepts covered between middle school and college. For the day you encounter imaginary numbers <a href="https://betterexplained.com/articles/a-visual-intuitive-guide-to-imaginary-numbers/" target="_blank">Kalid’s explanation</a> is magnificent.</p>
                </div>
            </div>
        </div>
    </div>  

</div>

<!-- END: page content -->

<?php
    // include the document end to close body and html
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/page-footer.php';
    require $_SERVER['DOCUMENT_ROOT'].'/php-inc/doc-end.php';
?>   
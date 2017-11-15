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

        <div class="exploration-page-container" id="main">
            <div class='flex-container'>

                <div class='explore-cont' id="exp1">
                    <div class='explore-cont-left'>
                        <a href="flow_video.html?s=PPV1">
                            <h3>Power of Parity and Pigeons</h3>
                            <p>Walk through an ancient city, shake hands with monsters, and consult with some pigeons for words of wisdom.</p>
                            <p><strong>Concepts:</strong> Parity, Pigeon-hole principle</p>
                            <div class='button'>EXPLORE</div>
                        </a>
                        <a style="width=205px;" href="PPExploration.html">
                            <div style="width:205px;" class='button'>Consult the Map</div>
                        </a>

                    </div>
                    <div style="background-color: #FFFFFF;" class='explore-cont-right'>
                        <img src='assets/explorations/image1.JPG'>
                    </div>
                </div>


                <div class='explore-cont' id='exp2'>
                    <div class='explore-cont-left'>
                        <a href="si_flow_video.html?s=SIV1">
                            <h3>Spot It</h3>
                            <p>What do monsters stretching out to relax have to do with the math behind the card game Spot It?</p>
                            <p><strong>Concepts:</strong> slope, parallel lines, and irrational numbers</p>
                            <div class='button'>EXPLORE</div>
                        </a>
                    </div>
                    <div style="background-color: #FFFFFF;" class='explore-cont-right'>
                        <img src="assets/explorations/SpotItCover.png">
                    </div>
                </div>


                <div class='explore-cont' id='exp3'>
                    <div class='explore-cont-left'>
                        <a href="">
                            <h3>Chocolate for Aliens</h3>
                            <p>Explore how to count to infinity, and how not to. Along the way rescue a lot of aliens from a wormhole in space, and share the taste of chocolate with all of them. </p>
                            <p><strong>Concepts:</strong> Countable and uncountable infinity, Geometric Series</p>
                        <!-- <div class='button'>EXPLORE</div>  // for later-->
                        </a>
                    </div>
                    <div class='explore-cont-right'>
                        <img src="assets/UnderConstruction.png">
                    </div>
                </div>

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
<?php 
    // Set page variables
    
    // $pageTitle = ""; // Variable to append the page title "Primed Minds" with " - <pageTitle>"
    // $addHeadCode = ""; // Variable to add any additional code to the head for the page
    // $jsDocumentFn = ""; // Sets the script name for jQuery document code

    // Include the document start and standard page header
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/doc-start.php';
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/page-header.php';
?>

<!-- START: page content -->

<div id="main">
    <div class="canvas">
        <video playsinline autoplay muted loop id="bgvid">
            <source src="/assets/index/PMWelcomeVideo.mp4" type="video/mp4">
        </video>

        <a id="about_ref" href="about.html"><p id="homeText">A tool to inspire you mathematically!</p></a>

        <a id="volume" onclick="toggleVolume()"><img id="vol_icon" src="/assets/index/speaker.png" height="40px"></a>
    </div>
</div>

<!-- END: page content -->

<?php
    // include the document end to close body and html
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/page-footer.php';
    require $_SERVER['DOCUMENT_ROOT'].'/php-inc/doc-end.php';
?>   
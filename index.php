<?php 
    // Set page variables
    
    // $pageTitle = ""; // Variable to append the page title "Primed Minds" with " - <pageTitle>"
    // $addHeadCode = ""; // Variable to add any additional code to the head for the page
    $pageBody = "#000"; // Sets the colour of the page background if other than default, in format #fff 

    // Include the document start and standard page header
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/doc-start-jspre.php';
    // start of document.ready function - enter code below
?>
    video = document.getElementById("homeVideo");
    icon = document.getElementById("volume");
<?php
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/doc-start-jspost.php';
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/page-header.php';
?>

<!-- START: page content -->

<div class="videoContainer embed-responsive embed-responsive-16by9">
    <video playsinline autoplay muted loop class="embed-responsive-item" id="homeVideo">
       <source src="assets/index/PMWelcomeVideo.mp4" type="video/mp4">
    </video>
</div>

<div id="main">

    <a id="about_ref" href="about.html"><p id="homeText">A tool to inspire you mathematically!</p></a>

    <a id="volume" onclick="toggleVolume()"><i class="fa fa-volume-up" aria-hidden="true"></i></a>

</div>

<!-- END: page content -->

<?php
    // include the document end to close body and html
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/page-footer.php';
    require $_SERVER['DOCUMENT_ROOT'].'/php-inc/doc-end.php';
?>   
<?php 
    // include the document start and standard page header
    // include 'http://dev-primedminds.mybluemix.net/includes/doc-start.php';
    include $_SERVER['DOCUMENT_ROOT'].'/includes/doc-start.php';
    include $_SERVER['DOCUMENT_ROOT'].'/includes/page-header.php';
?>

<!-- START: page content -->

<div id="main">
    <video playsinline autoplay muted loop id="bgvid">
        <source src="assets/index/PMWelcomeVideo.mp4" type="video/mp4">
    </video>

    <a id="about_ref" href="about.html"><p id="homeText">A tool to inspire you mathematically!</p></a>

    <a id="volume" onclick="toggleVolume()"><img id="vol_icon" src="assets/index/speaker.png" height="40px"></a>
</div>

<!-- END: page content -->

<?php
    // include the document end to close body and html
    include $_SERVER['DOCUMENT_ROOT'].'/includes/page-footer.php';
    require $_SERVER['DOCUMENT_ROOT'].'/includes/doc-end.php';
?>   
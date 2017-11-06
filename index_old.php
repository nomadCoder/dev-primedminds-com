<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title>Primed Minds</title>
    <!-- materialize css -->
    <link rel="stylesheet" type="text/css" href="stylesheets/materialize.min.css">

    <!-- jquery js -->
    <script src="public/javascript/jquery-1.12.3.min.js"></script>

    <!-- materialize js -->
    <script src="public/javascript/materialize.min.js"></script>

    <!-- fonts from gapis -->
    <link href="https://fonts.googleapis.com/css?family=Arima+Madurai:800" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">

    <!-- local css -->
    <link rel="stylesheet" type="text/css" href="stylesheets/index.css">

    <script src="javascript/navbar.js"></script>
    <script src="javascript/index.js"></script>
    <script src="javascript/header.js"></script>
</head>

<body>
    <!-- navbar code, copy code to top of body -->
    <div id="navbar"></div>
    <!-- load the navbar --> 
    <script>
        $(function(){
            $("#navbar").load("navbar.html"); 
            console.log( $("index").className );
        });
                    
    </script>

    <div id="main">
        <video playsinline autoplay muted loop id="bgvid">
		    <source src="assets/index/PMWelcomeVideo.mp4" type="video/mp4">
		</video>

        <a id="about_ref" href="about.html"><p id="homeText">A tool to inspire you mathematically!</p></a>

        <a id="volume" onclick="toggleVolume()"><img id="vol_icon" src="assets/index/speaker.png" height="40px"></a>
        <footer>
            &copy; Copyright 2016
        </footer>
    </div>
</body>

</html>

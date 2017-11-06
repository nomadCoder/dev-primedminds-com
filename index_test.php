<html>

<head lang="en">
    <meta charset="UTF-8">
    <title>Primed Minds</title>

    <link rel="stylesheet" type="text/css" href="/scss/custom.scss">

    <script src="/node_modules/jquery/jquery-3.2.1.min.js"></script>

    <!-- React Development Tools - If Selected as Language of Choice (look up react games)
        <script src="https://fb.me/react-0.14.3.js"></script>
        <script src="https://fb.me/react-dom-0.14.3.js"></script>
    -->

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

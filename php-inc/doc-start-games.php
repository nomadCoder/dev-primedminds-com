<?php 
    // PHP initial page configuration settings - these will be applied at the top of the page

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    // Check for page title additional text passed from included page
    if (isset($pageTitle)) {
        $pageTitle = " - ".$pageTitle;
    } else {
        $pageTitle = "";
    } 

    // Check for additional header code passed from included page
    if (!isset($addHeadCode)) {
        $addHeadCode = "";
    }

    // Check for a javascript document function script name passed from included page
    if (isset($jsDocumentFn)) {
        $jsDocumentFn = "<script src=".'"'.$jsDocumentFn.'"'."></script>";
    } else {   
        $jsDocumentFn = "";
    }

    // Check for additional header code passed from included page for body style
    if (!isset($pageBody)) {
        $pageBody = "";
    } else {
        $pageBody = '<style type="text/css"> body { background-color: '.$pageColour.'; } </style>';
    }
?>

<html>

<head lang="en">
    <meta charset="UTF-8">
    <title>Primed Minds<?php print $pageTitle; ?></title>

    
    <script src="/js/jquery-3.2.1.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/main.1.0.js"></script>

    <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="/css/main.1.1.css">

    <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">

    <!-- fonts from gapis -->
    <link href="https://fonts.googleapis.com/css?family=Arima+Madurai:800" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


    <!-- additional header code -->
    <?php print $addHeadCode; ?>
    
    <!-- React Development Tools - If Selected as Language of Choice (look up react games)
        <script src="https://fb.me/react-0.14.3.js"></script>
        <script src="https://fb.me/react-dom-0.14.3.js"></script>
    -->



</head>

<body>
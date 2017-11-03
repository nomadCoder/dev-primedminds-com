<?php 
    // Check for page title additional text passed from included page
    if (isset($pageTitle)) {
        $pageTitle = " - " . $pageTitle;
    } else {
        var $pageTitle = "";
    }
    // Check for page additional header code passed from included page
    if (!isset($headerAdd)) {
        var $headerAdd = "";
    }
?>     

<html>

<head lang="en">
    <meta charset="UTF-8">
    <title>Primed Minds<?php print($pageTitle); ?></title>

    <!-- jquery js -->
    <script src="/_js/jquery-1.12.3.min.js"></script>

    <!-- materialize js -->
    <script src="/_js/materialize.min.js"></script>

    <!-- page javascript files -->
    <script src="/_js/navbar.js"></script>
    <script src="/_js/index.js"></script>
    <script src="/_js/header.js"></script>

    <!-- fonts from gapis -->
    <link href="https://fonts.googleapis.com/css?family=Arima+Madurai:800" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- local css -->
    <link rel="stylesheet" type="text/css" href="/_css/index.css">

    <!-- materialize css -->
    <link rel="stylesheet" type="text/css" href="/_css/materialize.min.css">

    <!-- nav css -->
    <link rel="stylesheet" type="text/css" href="/_css/navbar.css">

    <!-- additional header code -->
    <?php print($headerAdd); ?>
    
</head>

<body>
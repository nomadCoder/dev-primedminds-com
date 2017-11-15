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

?>

<html>

<head lang="en">
    <meta charset="UTF-8">
    <title>Primed Minds<?php print $pageTitle; ?></title>

    <!-- favicon code here -->
    <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

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
    
    <!-- start of document.ready js script code -->
    <script>
        $(document).ready(function () {
            
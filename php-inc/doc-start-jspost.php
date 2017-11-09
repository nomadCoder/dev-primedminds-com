<?php 

    // Check for additional header code passed from included page for body style
    if (!isset($pageBody)) {
        $pageBody = "";
    } else {
        $pageBody = '<style type="text/css"> body { background-color: '.$pageColour.'; } </style>';
    }
?>

    });
</script> <!-- end of document.ready js script code -->

</head>

<body>
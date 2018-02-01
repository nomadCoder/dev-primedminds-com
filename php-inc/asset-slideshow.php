<?php 
    // PHP initial page configuration settings - these will be applied at the top of the page

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    // Check for additional header code passed from included page
    if (!isset($slide_images)) {
        $slide_images = '[{ "" : "" }]';
    }

?>

<div id="carouselControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner" role="listbox">

        <?php
            $array = json_decode( $slide_images, true );
            $i = 0;
            $active_item = " active";
            foreach ($array as $value) {
                if ($i != 0 ) { $active_item = ""; }
                print '<div class="carousel-item' . $active_item . '">';
                print '<img class="d-block img-fluid" src="' . $value["src"] . '" alt="' . $value["alt"] . '">';
                print '</div>';
                $i++;
            }
        ?>

    </div>

    <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>

</div>
<?php 
    // PHP initial page configuration settings - these will be applied at the top of the page

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    // Check for additional header code passed from included page
    if (!isset($menu_content)) {
        $menu_content = '[{ "" : "" }]';
    }

?>

<div id="accordion" role="tablist">

    <?php
        $array = json_decode( $menu_content, true );
        $i = 0;
        $active_item = " active";
        foreach ($array as $value) {
            if ($i != 0 ) { $active_item = ""; }
            $item_head = "headingID" . $i;
            $item_content = "collapseID" . $i;
            print '<div class="card">';
            print '  <div class="card-header card-head-style" role="tab" id="' . $item_head . '">';
            print '    <h5 class="mb-0"><a data-toggle="collapse" href="#' . $item_content . '" aria-expanded="true" aria-controls="collapseOne">' . $value["title"] . '</a></h5>';
            print '  </div>';
            print '  <div id="' . $item_content . '" class="collapse" role="tabpanel" aria-labelledby="' . $item_head . '" data-parent="#accordion"><div class="card-body redbg">' . $value["content"] . '</div></div>';
            print '</div>';    
            $i++;
        }
    ?>

</div>
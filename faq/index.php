<?php 
    // Set page variables
    
    $pageTitle = "FAQ"; // Variable to append the page title "Primed Minds" with " - <pageTitle>"
    // $addHeadCode = '<style type="text/css"> body { background-color: #000; } </style>'; // Variable to add any additional code to the head for the page

    // Include the document start and standard page header
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/doc-start-basic.php';
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/page-header.php';
?>

<!-- START: page content -->

<div id="main">
    <!-- <div class="canvas"> -->
        <div class="row canvas">
            <div class="col-4"> <!-- Side page menu -->

                <div id="accordion" role="tablist">
                    <div class="card">
                        <div class="card-header" role="tab" id="headingOne">
                            <h5 class="mb-0">
                                <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is Primed Minds?
                                </a>
                            </h5>
                        </div>
                        <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                <p>Primed Minds is a tool to inspire you mathematically!</p>
                                <p>Showcasing the joy and beauty inherent in mathematics, our Explorations, unlike traditional presentations, are a wild affair that impart the thrill of discovery by alternately entertaining and actively engaging. </p>
                                <p>Each <a href="/explore/index.php">Exploration</a> consists of a sequence of short entertaining videos (30-90 second), and interactive content that immerse you in the experience of being a real mathematician! You'll experience how a dead-end alley becomes an A-ha moment. You'll smell the mathematical flowers that blossom around intractable unsolved mysteries. And you might even learn a little math along the way. </p>
                                <p>Want to learn more? Visit our <a href="/about/index.php">About Us</a> page!</p>
                            </div>
                        </div>    
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingTwo">
                            <h5 class="mb-0">
                                <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Are there any teacher resources?
                                </a>
                            </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body"> 
                                <p>Yes, there are! Check out our resources <a href="/resources/index.php">here</a>!</p>
                            </div>
                        </div>    
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingThree">
                            <h5 class="mb-0">
                                <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                The explorations are too easy
                                </a>
                            </h5>
                        </div>
                        <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                                <p>That may be the case, but easy or hard is not really the point. Eating a great meal is really easy, but you still get great value out of it. If you’re hungry for more, send us a note and we’ll send you something new to mull over or simply point you in the direction of some related and interesting mathematical terrain to explore further.</p>
                            </div>
                        </div>    
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingFour">
                            <h5 class="mb-0">
                                <a class="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                The explorations are too hard
                                </a>
                            </h5>
                        </div>
                        <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
                            <div class="card-body">
                                <p>That may be the case, but easy or hard is not really the point. When you first read Winnie The Pooh, you certainly didn’t understand all the alliteration and thematic underpinnings, but you enjoyed it (if you haven’t read Winnie The Pooh, you should do so right away, regardless of your age). Hopefully it inspired you. In the same spirit, without understanding everything, hopefully mathematics seems a little more fun now. But try another <a href="explorations/index.php">Exploration</a>, and ask your teacher or your parents about getting the teaching materials for your class or at home. The <a href="/resources/index.php">Teacher Materials</a> really flesh out these 30,000 foot Explorations.</p>
                            </div>
                        </div>    
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingFive">
                            <h5 class="mb-0">
                                <a class="collapsed" data-toggle="collapse" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                There was stuff I don't understand
                                </a>
                            </h5>
                        </div>
                        <div id="collapseFive" class="collapse" role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion">
                            <div class="card-body">
                                <p>Hey there’s stuff we don’t understand, that doesn’t mean it isn’t interesting to explore! Many of our Explorations tread very closely to problems that are alive and well in cutting edge research mathematics. They are designed to give you a glimpse of the frontiers, in much the same way visiting a great museum does for art or science.</p>
                            </div>    
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingSix">
                            <h5 class="mb-0">
                                <a class="collapsed" data-toggle="collapse" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Are there explosions in every Exploration?
                                </a>
                            </h5>
                        </div>
                        <div id="collapseSix" class="collapse" role="tabpanel" aria-labelledby="headingSix" data-parent="#accordion">
                            <div class="card-body">
                                <p>I kind of see the explosions as a metaphor for coming off the race track. It has been said that if you don't come off the race track once in a while, then you're probably not pushing hard enough. It's the same with mathematics. The great mathematician Goro Shimura encapsulated this very well when talking about one of his collaborators: "Taniyama was not a very careful person as a mathematician. He made a lot of mistakes, but he made mistakes in a good direction, and so eventually, he got right answers, and I tried to imitate him, but I found out that it is very difficult to make good mistakes." In short, it is good to practice making mistakes.</p>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

        <div class="col-8"> <!-- Start slideshow column -->
            <?php
                
                $slide_images = ' [ { "src" : "/media/slideshow/faq/ChocolateFractions1.png" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/faq/ChocolateFractions2.png" , "alt" : "" } , 
                                    { "src" : "/media/slideshow/faq/ChocolateFractions3.png" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/faq/ChocolateFractions4.png" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/faq/ChocolateFractions5.png" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/faq/ChocolateFractions6.png" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/faq/ChocolateFractions7.png" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/faq/ChocolateFractions8.png" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/faq/ChocolateFractions9.png" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/faq/ChocolateFractions10.png" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/faq/ChocolateFractions11.png" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/faq/ChocolateFractions12.png" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/faq/ChocolateFractions13.png" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/faq/ChocolateFractions14.png" , "alt" : "" } ,
                                    { "src" : "/media/slideshow/faq/ChocolateFractions15.png" , "alt" : "" } ] ';

                include $_SERVER['DOCUMENT_ROOT'].'/php-inc/asset-slideshow.php';   
            ?>                     
        </div> <!-- End slideshow column -->  
    
    


</div>    

        <!-- contact us button ***REMOVED AS MAY BE ON FOOTER, NEED TO DOUBLE CHECK ******
        <div id="contact">
            <a id="contactbutton" href="contact.html">Contact Us</a>
        </div>
    </div>
    -->

<!-- END: page content -->

<?php
    // include the document end to close body and html
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/page-footer.php';
    require $_SERVER['DOCUMENT_ROOT'].'/php-inc/doc-end.php';
?>   
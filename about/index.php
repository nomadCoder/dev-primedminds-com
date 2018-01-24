<?php 
    // Set page variables
    
    // $pageTitle = ""; // Variable to append the page title "Primed Minds" with " - <pageTitle>"
    // $addHeadCode = '<style type="text/css"> body { background-color: #000; } </style>'; // Variable to add any additional code to the head for the page

    // Include the document start and standard page header
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/doc-start-basic.php';
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/page-header.php';
?>

<!-- START: page content -->

<div id="main">
    <div class="canvas">
        <div class="row">
            <div class="col-4" style="background-color: #ccc">
                this is one
            </div>
            <div class="col-8" style="background-color: #333">
                this is two
            </div>
        </div>

        <div class="row">
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
                            </div>
                        </div>    
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingTwo">
                            <h5 class="mb-0">
                                <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Who is this for?
                                </a>
                            </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body"> 
                                <p>Primed Minds is aimed squarely at middle and high school students, though many of the Explorations are actually accessible to grade-schoolers. This is not your standard curriculum. Primed Minds is designed to inspire interest, rather than educate on specifics. </p>
                                <p>While familiarity with some very basic concepts is sometimes assumed, even in those cases interest is often piqued well before formal understanding sinks in. </p>
                                <p>Anyone curious to explore the magical land of the mind will enjoy our Explorations. Mathematics is, afterall, the one thing we can be sure that aliens too will appreciate. </p>
                            </div>
                        </div>    
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingThree">
                            <h5 class="mb-0">
                                <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Philosophy
                                </a>
                            </h5>
                        </div>
                        <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                                <p>Before taking your retinue to a new territory, you launch an exploration. You get a taste and decide whether heading out even makes sense. </p>
                                <p>Unfortunately, unlike language arts where we inspire children with great works of fiction before miring them in the drudgery of spelling and grammar, mathematics is traditionally taught by adhering to a didactic approach of presentational
                                    lessons followed by drills.</p>
                                <p>The thing is, we make the most effort and learn best when we're excited.</p>
                                <p>With this thinking in mind, the Explorations on Primed Minds are designed to inspire rather than teach. It's a radical idea!</p>
                                <p>The first time we encounter new ideas, they are fuzzy, and that's okay! Nobody understands all the themes and motifs in Winnie the Pooh the first time they read it (or more likely, are read it), the book simply becomes richer with
                                    each pass. So it is with mathematics and it's time it was presented with this in mind.</p>
                                <p>Finally, the pedagogical reasoning behind the structure of Primed Minds' Explorations is simple. Short, light and quickly paced videos inject energy, context and excitement, while interactive puzzles foster engagement and help solidify
                                    concepts. The interactive portions also give very natural breathing room, permitting students to adjust the pace of their progress to their understanding (something that videos alone struggle with).</p>
                            </div>
                        </div>    
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingFour">
                            <h5 class="mb-0">
                                <a class="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                What is mathematics anyway?
                                </a>
                            </h5>
                        </div>
                        <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
                            <div class="card-body">
                                <p>Mathematics is to think deeply about simple things.</p>
                                <p>And doing so is <b>fun</b>!!</p>
                                <p>Mathematics is about exploring ideas that present themselves as puzzles, intriguing patterns, connections and sheer beauty.</p>
                            </div>
                        </div>    
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingFive">
                            <h5 class="mb-0">
                                <a class="collapsed" data-toggle="collapse" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                How do I try an Exploration?
                                </a>
                            </h5>
                        </div>
                        <div id="collapseFive" class="collapse" role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion">
                            <div class="card-body">
                                <p>There's been enough talk, just <a href="/explorations.html">pick one</a> and dive in!</p>                      </div>
                            </div>    
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingSix">
                            <h5 class="mb-0">
                                <a class="collapsed" data-toggle="collapse" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Are there any teacher resources?
                                </a>
                            </h5>
                        </div>
                        <div id="collapseSix" class="collapse" role="tabpanel" aria-labelledby="headingSix" data-parent="#accordion">
                            <div class="card-body">
                                <p>Yes! We have lesson plans to accompany Exlporations that expand and relate materials to standard curriculum. Check our <a href="/resources.html">Resources Page</a> for more information</p>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-8"> <!-- Slideshow -->
                <div id="carouselControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                        <img class="d-block img-fluid" src="/assets/about/AboutSlideShow1.jpg" alt="First slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block img-fluid" src="/assets/about/AboutSlideShow2.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block img-fluid" src="/assets/about/AboutSlideShow3.jpg" alt="Third slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block img-fluid" src="/assets/about/AboutSlideShow4.jpg" alt="Third slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block img-fluid" src="/assets/about/AboutSlideShow5.jpg" alt="Third slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block img-fluid" src="/assets/about/AboutSlideShow6.jpg" alt="Third slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block img-fluid" src="/assets/about/AboutSlideShow7.jpg" alt="Third slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block img-fluid" src="/assets/about/AboutSlideShow8.jpg" alt="Third slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block img-fluid" src="/assets/about/AboutSlideShow9.jpg" alt="Third slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block img-fluid" src="/assets/about/AboutSlideShow10.jpg" alt="Third slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block img-fluid" src="/assets/about/AboutSlideShow11.jpg" alt="Third slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block img-fluid" src="/assets/about/AboutSlideShow12.jpg" alt="Third slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block img-fluid" src="/assets/about/AboutSlideShow13.jpg" alt="Third slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block img-fluid" src="/assets/about/AboutSlideShow14.jpg" alt="Third slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block img-fluid" src="/assets/about/AboutSlideShow15.jpg" alt="Third slide">
                        </div>
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
            </div>
        </div>
    </div>
</div>    



<!--
<div class="exploration-page-container"> -->
        <!--<h3 class="centered">About</h3>--> <!--
        <div class="grid" id="main">
            <div class="col-1-2 QnA">
                <div id="q1">
                    <h3>
                        What is Primed Minds?
                    </h3>
                </div>
                <div class="answer" id="a1">
                    <p>Primed Minds is a tool to inspire you mathematically!</p>
                    <p>Showcasing the joy and beauty inherent in mathematics, our Explorations, unlike traditional presentations, are a wild affair that impart the thrill of discovery by alternately entertaining and actively engaging. </p>
                    <p>Each <a href="/explorations.html">Exploration</a> consists of a sequence of short entertaining videos (30-90 second), and interactive content that immerse you in the experience of being a real mathematician! You'll experience how a dead-end alley becomes an A-ha moment. You'll smell the mathematical flowers that blossom around intractable unsolved mysteries. And you might even learn a little math along the way. </p>
                </div>

                <div id="q2">
                    <h3>
                        Who is this for?
                    </h3>
                </div>
                <div class="answer" id="a2">
                    <p>Primed Minds is aimed squarely at middle and high school students, though many of the Explorations are actually accessible to grade-schoolers. This is not your standard curriculum. Primed Minds is designed to inspire interest, rather
                        than educate on specifics. </p>
                    <p>While familiarity with some very basic concepts is sometimes assumed, even in those cases interest is often piqued well before formal understanding sinks in. </p>
                    <p>Anyone curious to explore the magical land of the mind will enjoy our Explorations. Mathematics is, afterall, the one thing we can be sure that aliens too will appreciate. </p>
                </div>

                <div id="q3">
                    <h3>
                        Philosophy
                    </h3>
                </div>
                <div class="answer" id="a3">
                    <p>Before taking your retinue to a new territory, you launch an exploration. You get a taste and decide whether heading out even makes sense. </p>
                    <p>Unfortunately, unlike language arts where we inspire children with great works of fiction before miring them in the drudgery of spelling and grammar, mathematics is traditionally taught by adhering to a didactic approach of presentational
                        lessons followed by drills.</p>
                    <p>The thing is, we make the most effort and learn best when we're excited.</p>
                    <p>With this thinking in mind, the Explorations on Primed Minds are designed to inspire rather than teach. It's a radical idea!</p>
                    <p>The first time we encounter new ideas, they are fuzzy, and that's okay! Nobody understands all the themes and motifs in Winnie the Pooh the first time they read it (or more likely, are read it), the book simply becomes richer with
                        each pass. So it is with mathematics and it's time it was presented with this in mind.</p>
                    <p>Finally, the pedagogical reasoning behind the structure of Primed Minds' Explorations is simple. Short, light and quickly paced videos inject energy, context and excitement, while interactive puzzles foster engagement and help solidify
                        concepts. The interactive portions also give very natural breathing room, permitting students to adjust the pace of their progress to their understanding (something that videos alone struggle with).</p>
                </div>

                <div id="q4">
                    <h3>
                        What is mathematics anyway?
                    </h3>
                </div>
                <div class="answer" id="a4">
                    <p>Mathematics is to think deeply about simple things.</p>
                    <p>And doing so is <b>fun</b>!!</p>
                    <p>Mathematics is about exploring ideas that present themselves as puzzles, intriguing patterns, connections and sheer beauty.</p>
                </div>

                <div id="q5">
                    <h3>
                        How do I try an Exploration?
                    </h3>
                </div>
                <div class="answer" id="a5">
                    <p>There's been enough talk, just <a href="/explorations.html">pick one</a> and dive in!</p>
                </div>

                <div id="q6">
                    <h3>
                        Are there any teacher resources?
                    </h3>
                </div>
                <div class="answer" id="a6">
                    <p>Yes! We have lesson plans to accompany Exlporations that expand and relate materials to standard curriculum. Check our <a href="/resources.html">Resources Page</a> for more information</p>
                </div>
                <br><br>
            </div> -->
            <!-- end first col -->
            <!-- 
            <div class="col-2-2" id="sliderFrame">
                <div id="slider">
                    <img class="slides" src="assets/about/AboutSlideShow1.jpg" />
                    <img class="slides" src="assets/about/AboutSlideShow2.jpg" />
                    <img class="slides" src="assets/about/AboutSlideShow3.jpg" />
                    <img class="slides" src="assets/about/AboutSlideShow4.jpg" />
                    <img class="slides" src="assets/about/AboutSlideShow5.jpg" />
                    <img class="slides" src="assets/about/AboutSlideShow6.jpg" />
                    <img class="slides" src="assets/about/AboutSlideShow7.jpg" />
                    <img class="slides" src="assets/about/AboutSlideShow8.jpg" />
                    <img class="slides" src="assets/about/AboutSlideShow9.jpg" />
                    <img class="slides" src="assets/about/AboutSlideShow10.jpg" />
                    <img class="slides" src="assets/about/AboutSlideShow11.jpg" />
                    <img class="slides" src="assets/about/AboutSlideShow12.jpg" />
                    <img class="slides" src="assets/about/AboutSlideShow13.jpg" />
                    <img class="slides" src="assets/about/AboutSlideShow14.jpg" />
                    <img class="slides" src="assets/about/AboutSlideShow15.jpg" />
                </div> -->
                <!-- end slider div-->
                <!--
                <a class="arrows left-arrows" onclick="plusDivs(-1)"><i class="material-icons md-36">arrow_back</i></a>
                <a class="arrows right-arrows" onclick="plusDivs(+1)"><i class="material-icons md-36">arrow_forward</i></a>
            </div>
            <!-- end second col -->
<!--        </div>
        <!-- end grid -->

        <div class="grid" id="team">
            <h1 class="header" id="team-header">Team</h1>
            <div class="col-1-3">
                <div class="team1">
                    <img class="rounded" src="assets/about/RufusWilliams.jpg" height="140px"></img>
                </div>
                
            </div>
            <div class="col-2-3">
                <div class="team2">
                    <img class="rounded" src="assets/about/VShubin.jpg" height="140px"></img>
                </div>

            </div>
            <div class="col-3-3">
                <div class="team3">
                    <img class="rounded" src="assets/about/RobPollack.jpg" height="140px"></img>
                </div>
               
            </div>
            <!-- end col-->
        </div>
        <!-- end grid/ team div  -->
        <div class="bio1">
            <h3>Rufus Williams:</h3>
            <p>Rufus grew up mostly in Australia, but left on a Commonwealth scholarship to Oxford where he got a masters in pure math. He subsequently moved to the US to complete a PhD in number theory at Harvard. From there, he took the unusual
                turn to write and direct an award winning feature film. Now, with two kids, he has been drawn back to how math is taught. He's not so focused on molding new mathematicians as he is sharing more broadly the joy that this subject
                can bring!
            </p>
        </div>
        <div class="bio2">
            <h3>Vita Shubin, CTO:</h3>
            <p>Vita grew up in Seattle, Washington before moving to Los Angeles, CA to study Computer Science at the University of Southern California. She's previously worked with iD Technology Camps as a summer instructor, as well as interned at Google as a software engineer in Seattle and Munich, Germany! She's excited to be a part of creating a site that can change kids' perspectives on mathematics.</p>
            </div>
         <div class="bio3">
            <h3>Rob Pollack, Content Advisor:</h3>
            <p>Professor at BU, PhD from Harvard. Has kids. Has taught students from the cradle to the grave (well, not literally the grave, but everything through to graduate students), including the most popular math core class on the Harvard campus.</p>
        </div>

       <div class="grid" id="partners">
            <h1 class="header" id="partners-header">Partners</h1>
            <div class="col-1-3">
                <div class="partner1">
                    <a href="http://theglobalmathproject.org" target="_blank">
                        <img src="assets/about/gmp_uplifting.jpg" title="Global Math Project"></a>
                </div>
            </div><div class="col-2-3">
                <div class="partner2">
                    <a href="http://mathspathway.com" target="_blank">
                        <img src="assets/about/mathspathway.jpg" title="Maths Pathway"></a>
                </div>
            </div>
            <div class="col-3-3">
                <div class="partner3">
                    <a href="http://betterexplained.com" target="_blank">
                        <img src="assets/about/betterexplained.jpg" title="Better Explained"></a>
                </div>
            </div>
            <!-- end col-->
        </div>
         <div class="pbio1 partner1">
            <h3>Global Math Project</h3>
            <p>GMP's James Tanton, the driving force behind Global Math Week, is an enthusiastic connector of dots for Primed Minds.
            </p>
        </div>
        <div class="pbio2 partner2">
            <h3>Maths Pathway</h3>
            <p>An Australian Online learning company that believes in individualized learning. Trialling Primed Minds in over 100 schools throughout Australia.
            </p>
        </div>
         <div class="pbio3 partner3">
            <h3>Betterexplained.com</h3>
            <p>Kalid, the mastermind behind BetterExplained.com has exquisite mathematical taste and helps advise on content.
            </p>
        </div>

        <!-- contact us button -->
        <div id="contact">
            <a id="contactbutton" href="contact.html">Contact Us</a>
        </div>
    </div>

<!-- END: page content -->

<?php
    // include the document end to close body and html
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/page-footer.php';
    require $_SERVER['DOCUMENT_ROOT'].'/php-inc/doc-end.php';
?>   
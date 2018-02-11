<?php 
    // Set page variables
    
    $pageTitle = "Contact"; // Variable to append the page title "Primed Minds" with " - <pageTitle>"
    // $addHeadCode = '<style type="text/css"> body { background-color: #000; } </style>'; // Variable to add any additional code to the head for the page

    // Include the document start and standard page header
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/doc-start-basic.php';
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/page-header.php';
?>

<!-- START: page content -->

<div id="main">
        <div class="row canvas">
            <div class="col-12">
                <h2>Contact Us</h2>

<?php
    
    if (isset($_POST('submit'))) {
        // process the submission of the form

        $email_to = "jody@manalogic.com";
        $email_cc = "";
        $email_from = $_POST('email');
        $email_subject = "Primed Minds form submission";

        $email_message .= "Name: ".$_POST('name')."\n";
        $email_message .= "Email: ".$_POST('email')."\n";
        $email_message .= "Message: ".$_POST('message')."\n";
        
        // create email headers
        $headers = 'From: '.$email_from."\r\n".
        'Reply-To: '.$email_from."\r\n" .
        'X-Mailer: PHP/' . phpversion();
        // @mail($email_to, $email_subject, $email_message, $headers);  need to work out how to run mail services on IBM

?>
                <p>Thank you for contacting Primed Minds. We will be in touch soon.</p>
<?php

    } else {
        // setup page if form has not been submitted

        ?>

                <form name="contact" method="post" action="/contact/index.php">
                    <label>Name</label><br />
                    <input type="text" name="name" maxlength="200" size="30">
                    <label>Email</label><br />
                    <input type="text" name="email" maxlength="200" size="30">
                    <label>Message</label><br />
                    <textarea name="message" maxlength="1000" cols="30" rows="5"></textarea><br />
                    <input type="submit" value="Send">
                </form> 

<?php     
    } 
?>    

                
            </div>
        </div>
</div>    

<!-- END: page content -->

<?php
    // include the document end to close body and html
    include $_SERVER['DOCUMENT_ROOT'].'/php-inc/page-footer.php';
    require $_SERVER['DOCUMENT_ROOT'].'/php-inc/doc-end.php';
?>   
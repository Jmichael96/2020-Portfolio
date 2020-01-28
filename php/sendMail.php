<?php

if (isset($_POST['submit'])) {
    $mail_to_send_to = "vh.webdesign19@gmail.com, jeffrey.vanhorn@yhaoo.com";
    $from_email = "jvh@codevh.com";
    // name
    $name = $_POST['name'];
    // email
    $email = $_POST['email'];
    // message
    $message = $_POST['message'];

    // headers
    $headers = "From: $from_email" . "\r\n" . "Reply-To: $mail_to_send_to" . "\r\n";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers = "Content-type: text/html; multipart/mixed; charset=iso-8859-1" . "\r\n";

    $body =
        "<html>
                <head>
                <title>Message from your site Mr. Dahmer!</title>
                </head>
                <body>
                <p>$message</p>
                <hr />
                <p>Name: $name</p>
                <hr />
                <p>Email: <a href='#!'>$email</a></p>
                </body>
        </html>
                ";

    if (!$name || !$email || !$message) {
        print("\nMake sure to enter a name, email, location, message and to answer the last question of the form before submitting. \n Thank you");
    } else {

        $mailObject = mail($mail_to_send_to, "Your website is calling Mr. Dahmer", $body, $headers);

        if ($mailObject) {
            header('Location: ../thankYou.html');
        } else {
            print("Message wasn't sent, please try again later");
        }
    }

}

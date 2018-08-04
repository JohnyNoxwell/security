<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        # FIX: Replace this email with recipient email
        $mail_to = "jimboo19898@gmail.com";

        # Sender Data
        $subject = trim($_POST["subject"]);
        // $name = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
        $name = trim($_POST["name"]);
        $phone = trim($_POST["phone"]);

        if ( empty($name) OR empty($phone)) {
            # Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Please complete the form and try again.";
            exit;
        }

        # Mail Content
        $content = "Name: $name\n";
        $content .= "Phone: $phone\n";
        

        # email headers.
        $headers = "From: $name <$email>";

        # Send the email.
        $success = mail($mail_to, $subject, $content, $headers);
        if ($success) {
            # Set a 200 (okay) response code.
            http_response_code(200);
            echo "Спасибо , Ваше сообщение отправлено";
        } else {
            # Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Что-то пошло не так, ваше сообщение не отправлено";
        }

    } else {
        # Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Проблема с отправкой сообщения , попробуйте немного позже.";
    }

?>
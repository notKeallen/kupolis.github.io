<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "neca2609@gmail.com"; // Change this to your email address
    $subject = $_POST["subject"];
    $email = $_POST["email"];
    $message = $_POST["tekst"];

    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Poruka je poslata!";
    } else {
        echo "Došlo je do greške pri slanju poruke. Molimo Vas da pokušate ponovo.";
    }
}
?>
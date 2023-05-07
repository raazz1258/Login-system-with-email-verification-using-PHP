<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
function send_email($code, $send_to)
{
    $mail = new PHPMailer(true);

    // Set the SMTP settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'your email';
    $mail->Password = 'your app password';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Set the message body and recipient

    $mail->setFrom('raazzchaudhary9@gmail.com');
    $mail->addAddress($send_to);
    $mail->Subject = 'Email verification';
    $mail->Body = "Your verification code is $code";

    // Send the email
    if (!$mail->send()) {
        return false;
    } else {
        return true;
        }
}
?>

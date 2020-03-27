<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    
    $mail->SMTPDebug = 0;                      
    $mail->isSMTP();                                           
    $mail->Host       = 'smtp.yandex.ru';                    
    $mail->SMTPAuth   = true;                                  
    $mail->Username   = 'r.repairdesign@yandex.by';                    
    $mail->Password   = '3846208qweasD';                              
    $mail->SMTPSecure = 'ssl';         
    $mail->Port       = 465;                                    
    $mail->CharSet    = "utf-8";

    $mail->setFrom('r.repairdesign@yandex.by');
    $mail->addAddress('Savitski.k@mail.ru');     


    $mail->isHTML(true);                                 
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userName}, его телефон: ${userPhone}. Его почта: ${userEmail}";

    $mail->send();
    header('Location: thanks.html');
} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}
<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];
$userQuestion = $_POST['userQuestion'];


require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';


$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->CharSet = 'utf-8';

try {
    
    $mail->SMTPDebug = 0;                      
    $mail->isSMTP();                                            
    $mail->Host       = 'smtp.yandex.ru';                   
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = 'r.repairdesign@yandex.by';                     
    $mail->Password   = '3846208qweasD';                               
    $mail->SMTPSecure = 'ssl';         
    $mail->Port       = 465;                                    

   
    $mail->setFrom('r.repairdesign@yandex.by', 'repair-design');
    $mail->addAddress('Savitski.k@mail.ru');    
    
    
    $mail->isHTML(true);                                 
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userName}, телефон: ${userPhone}, почта: ${userEmail}. Вопрос: ${userQuestion}";

    $mail->send();
    
    echo "Форма успешно отправлена!";
} catch (Exception $e) {
    echo "Письмо не отправлено. Есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}
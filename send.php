<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
$title = "Новое обращение Best Tour Plan";
if (!$name) {
    $body = "<h2>Новое письмо</h2><br> <b>Email: $email</b>";
} else if (!$email) {
    $body = "<h2>Новое письмо</h2><br> <b>Name:$name</b> <b>Phone: $phone</b> <b>Message: $message</b>";
} else {
    $body = "<h2>Новое письмо</h2><br> <b>Name:$name</b> <b>Phone: $phone</b> <b>Message: $message</b> <b>Email: $email</b>";
}
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'zoan30rus@gmail.com'; // Логин на почте
    $mail->Password   = '_Iliveazimove2004_'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('zoan30rus@gmail.com', 'Максим Андрианов'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('adrinal1ne30rus@mail.ru');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');
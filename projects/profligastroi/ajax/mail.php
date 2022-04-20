<?php
  $email = $_POST['email'];
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];


  $to = "info@profligastroi.ru";
  $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";

  // $headers = "From: profligastroi.ru <$email>\r\nReply-to: $email\r\nContent-type: text/plain; charset=windows-1251 \r\n";
  $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

  $message = '
  <html>
    <head>
      <title>Сообщение с сайта</title>
      <style>
        span { font-weight: bold; }
        h1 {
          background-color:  #e88d21;
          color: white;
          padding: 5px;
        }
        .container {
          padding: 15px;
          border: 2px solid #212121;
        }
      </style>
    </head>
  <body>
    <div class="container">
      <h1>Письмо с формы сайта "СК Профлигастрой"</h1>
      <div><span>Имя: </span>'. $name .'</div>
      <div><span>Номер телефона: </span>'. $phone .'</div>
      <div><span>Имя: </span>'. $email .'</div>
      <div><span>Сообщение: </span>'. $message .'</div>
    </div>
  </body>
</html>
';

$success = mail($to, $subject, $message, $headers);
echo $success;
?>

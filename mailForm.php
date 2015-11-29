<?php

  $mailTo = "Michaelphung.nguyen@gmail.com";
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $name = $_POST['name'];

  mail($mailTo,$subject,$message." "."
  From: ".$name." ".$email);

  // header('Location: index.html#contact');
  // exit;

 ?>

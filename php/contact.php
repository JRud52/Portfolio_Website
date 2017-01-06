<?php

if($_POST)
{
  $name=filter_var($_POST['name'], FILTER_SANITIZE_STRING);

  $email=filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $message=filter_var($_POST['message'], FILTER_SANITIZE_STRING);

  $concat_message = "Name: " + $name + "\nEmail: " + $email + "\n\n" + $message;

  mail("jrhude@justinrhude.com", "Message from " + name + " on justinrhude.com", );
}else {

}

 ?>

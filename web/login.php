<?php
session_start();

$valid = FALSE;

if ($_POST["username"] == "hackerman"
&& $_POST["password"] == "password"){
    $valid = TRUE;
}

if($valid){
  $_SESSION["username"]=$_POST["username"];
  header("Location: ./index.php");
} else {
  session_destroy();
  header("Location: ./login.html");
}

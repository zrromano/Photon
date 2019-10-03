<?php
session_start();

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
  header("location: login.php");
  exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sign Up</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
    <style type="text/css">
        body{ font: 14px sans-serif; text-align: center;}
    </style>
</head>
<body>
    <div class="page-header">
      <h1>Login successful, welcome <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b>!</h1>
    </div>
    <p>
        <a href="index.php" class="btn btn-success">Continue to site.</a>
    </p>
</body>
</html>

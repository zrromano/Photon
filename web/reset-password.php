<?php
session_start();

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
  header("location: login.php");
  exit;
}

require_once "config.php";

$new_password = $confirm_password = "";
$new_password_err = $confirm_password_err = "";

if($_SERVER["REQUEST_METHOD"] == "POST"){
  if(empty(trim($_POST["new_password"]))){
    $new_password_err = "Please enter the new password.";
  }
  elseif(strlen(trim($_POST["new_password"])) < 6){
    $new_password_err = "Password must have at least 6 characters.";
  }
  else{
    $new_password = trim($_POST["new_password"]);
  }

  if(empty(trim($_POST["confirm_password"]))){
    $confirm_password_err = "Please confirm password.";
  }
  else{
    $confirm_password = trim($_POST["confirm_password"]);
    if(empty($new_password_err) && ($new_password != $confirm_password)){
      $confirm_password_err = "Password did not match.";
    }
  }
  if(empty($new_password_err) && empty($confirm_password_err)){
    $sql = "UPDATE users SET password = :password WHERE id = :id";
    if($stmt = $conn->prepare($sql)){
      $stmt->bindParam(":password", $param_password, PDO::PARAM_STR);
      $stmt->bindParam(":id", $param_id, PDO::PARAM_INT);

      $param_password = password_hash($new_password, PASSWORD_DEFAULT);
      $param_id = $_SESSION["id"];

      if($stmt->execute()){
        session_destroy();
        header("location: login.php");
        exit();
      } else{
        echo "Oops! Something went wrong. Please try again later.";
      }
    }
    unset($stmt);
  }
  unset($conn);
}
?>
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Reset Password</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
    <!todo change background>
    <style type="text/css">
        body{ font: 14px sans-serif; }
        .wrapper{ width: 350px; padding: 20px; }
    </style>
</head>
<body>
    <div class="wrapper">
        <h2>Reset Password</h2>
        <p>Please fill out this form to reset your password.</p>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            <div class="form-group <?php echo (!empty($new_password_err)) ? 'has-error' : ''; ?>">
                <label>New Password</label>
                <input type="password" name="new_password" class="form-control" value="<?php echo $new_password; ?>">
                <span class="help-block"><?php echo $new_password_err; ?></span>
            </div>
            <div class="form-group <?php echo (!empty($confirm_password_err)) ? 'has-error' : ''; ?>">
                <label>Confirm Password</label>
                <input type="password" name="confirm_password" class="form-control">
                <span class="help-block"><?php echo $confirm_password_err; ?></span>
            </div>
            <div class="form-group">
                <input type="submit" class="btn btn-primary" value="Submit">
                <a class="btn btn-link" href="welcome.php">Cancel</a>
            </div>
        </form>
    </div>
</body>
</html>

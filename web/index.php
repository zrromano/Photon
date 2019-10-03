<?php
session_start();
$greeting = "";
if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
	$greeting = "Hello, ".trim($_SESSION["username"])."!";
}
?>
<!doctype html>
<head>
	<title>Loudcloud Photo</title>
	<meta charset='utf-8' name='viewport' content='width=device-width initial-scale=1'>
	<link rel='stylesheet' type='text/css' href='loudcloud.css'>
</head>

<body>
  <div id='header'>
    <h1 height='150px'>Loudcloud Photo</h1>
  </div>
	<div id='navBar'>
		<a id='homeButton' class='navButton' onclick="openContent('home'); homeHandler();">Home</a>
		<a id='exploreButton' class='navButton'>Explore</a>
		<?php
		if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
			echo("<a id='accountButton' class='navButton' href='reset-password.php'>Account</a>");
		}

		if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
			echo("	<a id='loginButton' class='navButton' href='login.php'>Login</a>");
		}
		?>

		<!todo align greeting on right with logout button >
		<span><?php echo $greeting; ?></span>
		<?php
		if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
			echo("<a id='logoutButton' class='navButton' href='logout.php'>Logout</a>");
		}
		?>
	</div>
	<div id='home' class='content'>
		<p>Welcome to Loudcloud Photo</p>
	</div>
</body>

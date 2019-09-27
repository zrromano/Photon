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
		<a id='gamesButton'class='navButton' onclick="openContent('games');">Photos</a>
    <a id='aboutButton'class='navButton' onclick="openContent('about');">About</a>
		<a id ='loginButton'class='navButton' href ="login.html" onclick="openContent('login');">Login</a>
	</div>
	<div id='home' class='content'>
		<p>Welcome to Loudcloud Photo</p>
	</div>
</body>

<?php
session_start();
if(array_key_exists("username",$_SESSION)){
		echo "Welcome, $_SESSION[username]!\n";

}
//define("ROOT_URL", "localhost");


function connect($db,$user,$pass){

}

connect("postgres","postgres","password");

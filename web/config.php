<?php

$params = parse_ini_file('../database.ini');
if ($params === false) {
  throw new \Exception("Error reading database config file");
}
$dbhost=$params['host'];
$dbport=$params['port'];
$dbname=$params['database'];
$dbuser=$params['user'];
$dbpassword=$params['password'];
$conStr = sprintf("pgsql:host=%s;port=%d;dbname=%s;user=%s;password=%s",
                $dbhost,
                $dbport,
                $dbname,
                $dbuser,
                $dbpassword);

try{
  $conn = new PDO($conStr);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e){
  die("Error: Could not connect. " . $e->getMessage());
}

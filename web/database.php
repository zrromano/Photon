<?php
$params = parse_ini_file('../database.ini');
if ($params === false) {
  echo "params false";
  throw new \Exception("Error reading database config file");
}
// connect to the postgresql database
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
  $pdo = new \PDO($conStr);
  $pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
  echo "connection succesful";
<<<<<<< HEAD
  $sql = "SELECT * FROM public.userinfo";
=======
  $sql = "SELECT * FROM logins";
>>>>>>> d48414a6f74cbd8526fe6d5148ba0a64fe288d4a
  $statement = $pdo->query($sql);
  while ($row = $statement->fetch()){
    echo $row['username'] . $row['password'] . " <br>";}
  }
catch(PDOException $e){
<<<<<<< HEAD
    echo "connection failed <br>" . $e->getMessage();
  }
=======
  echo "connection failed <br>" . $e->getMessage();
}
>>>>>>> d48414a6f74cbd8526fe6d5148ba0a64fe288d4a

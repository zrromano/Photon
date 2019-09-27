<?php
$params = parse_ini_file('home/atomvm/Documents/CMU/loudcloud/database.ini');
if ($params === false) {
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
  echo "connection succesful"
  $sql = "SELECT * FROM public.userinfo"
  $statement = $pdo->query($sql);
  while ($row = $statement->fetch()){
    echo $row['username'] . $row['password'] . " <br>";}
  }
  catch(PDOException $e){
    echo "connection failed <br>" . $e->getMessage();
  }
}

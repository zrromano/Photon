<?php
$params = parse_ini_file('home/atomvm/Documents/CMU/loudcloud/database.ini');
if ($params === false) {
  throw new \Exception("Error reading database configuration file");
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

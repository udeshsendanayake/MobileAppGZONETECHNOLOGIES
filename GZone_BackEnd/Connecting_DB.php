<?php	
	$host = 'localhost:3306';
	$user = 'root';
	$pass = '';
	$db = 'newdatabase';

	
	$mysqli = mysqli_connect($host, $user, $pass, $db);
	if (mysqli_connect_errno()){
		die("Connection Error : ". mysqli_connect_error());
	}		
?>
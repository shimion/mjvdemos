<?php
	error_reporting(E_ALL);
	ini_set('display_errors', 1); 
	session_start();

	require_once('../../../../wp-config.php');

	mysql_connect(DB_HOST, DB_USER, DB_PASSWORD) or die("MySQL Error: " . mysql_error());
	mysql_select_db(DB_NAME) or die("MySQL Error: " . mysql_error());    	

	echo '<pre>';
	print_r($_SESSION['user']);	
	echo '</pre>';  

	echo '<pre>';
	print_r($_SESSION['form']);	
	echo '</pre>';   

	



?>
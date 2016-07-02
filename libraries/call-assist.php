<?php
	error_reporting(E_ALL);
	ini_set('display_errors', 1); 

	require_once('phpmailer/PHPMailerAutoload.php');

	////////////// Build message
   $message = 'Name: ' . $_POST['FirstName'] . ' ' . $_POST['LastName'] . '<br/><br/>';
   $message .= 'Phone Number: ' . $_POST['PhoneNumber'] . '<br/><br/>';
   $message .= 'Best Time to Call: ' . $_POST['Time'] . '<br/><br/>';
   $message .= 'Finance Type: ' . $_POST['FinancType'] . '<br/><br/>';


	/////////////////////////////////
   ////// SEND FILE VIA EMAIL //////
   /////////////////////////////////

   $email = new PHPMailer();
   $email->IsHTML(true);
   $email->From      = 'noreply@empireofamerica.com';
   $email->FromName  = 'Empire of America';
   $email->Subject   = 'Assistance Call';
   $email->Body = $message;
   
   $email->AddAddress( 'jacob@ereachconsulting.com' );         
   $email->AddAddress( 'melanie@ereachconsulting.com' );         
   $email->AddAddress( 'consultants@empireofamerica.com' );         

   $email->Send();        


?>
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1); 
session_start();

// Libraries
require_once('functions-apply.php');
require_once('phpmailer/PHPMailerAutoload.php');
require_once('../../../../wp-config.php');

//Database Connection
mysql_connect(DB_HOST, DB_USER, DB_PASSWORD) or die("MySQL Error: " . mysql_error());
mysql_select_db(DB_NAME) or die("MySQL Error: " . mysql_error());    

try {                       
 
   unset($_SESSION['form']['save_status']);

   // Data Dependancies
   if($_SESSION['form']['FinanceType'] == 'Refinance'){
      unset($_SESSION['form']['TBD']);      
   }

   if($_SESSION['form']['TBD'] == 'on'){
      $_SESSION['form']['PropRefStreetAddress'] = 'TBD';
      unset($_SESSION['form']['PropRefCity']);
      unset($_SESSION['form']['PropRefState']);
      unset($_SESSION['form']['PropRefZipCode']);
   }

   //check if data changed
   $dataChanged = false;      

   //storing info in session
   foreach($_POST as $fieldname => $fieldvalue) {

      // check if data is the same
      if($_POST[$fieldname] != $_SESSION['form'][$fieldname]){
         
         $_SESSION['form'][$fieldname] = str_replace(',','',$fieldvalue); 
         $dataChanged = true;                                  

      }         

   }          

   if($_SESSION['user']['LoggedIn'] == 1){               

         if($_SESSION['form']['savedb'] == 'yes'){

            SavetoDB($_SESSION['user']['ID']);

         }else if($_SESSION['form']['question'] == '7'){ 

            SavetoDB($_SESSION['user']['ID']);
            CreateCSV($_SESSION['form']);            

         }
         

   }else{      

      if($_SESSION['form']['question'] == '7' && $dataChanged == true){ 

         CreateCSV($_SESSION['form']);

      }

   }

   echo json_encode($_SESSION['form']);   
	 
}catch (SoapFault $fault) {

	echo json_encode(array('status' => 'error','message'=> $fault));

}


?>
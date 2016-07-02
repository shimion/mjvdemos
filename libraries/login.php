<?php
error_reporting(E_ALL);
ini_set('display_errors', 1); 
session_start();

// Libraries
require_once('../../../../wp-config.php');
require_once('functions-apply.php');

//Database Connection
mysql_connect(DB_HOST, DB_USER, DB_PASSWORD) or die("MySQL Error: " . mysql_error());
mysql_select_db(DB_NAME) or die("MySQL Error: " . mysql_error());        

if(!empty($_POST['UserEmail']) && !empty($_POST['UserPassword']) && empty($_POST['application'])){
         
	$username = mysql_real_escape_string($_POST['UserEmail']);
	$password = md5(mysql_real_escape_string($_POST['UserPassword']));

	$checklogin = mysql_query("SELECT * FROM wp_apply_users WHERE username = '".$username."' AND password = '".$password."'");

	if(mysql_num_rows($checklogin)==1){

		 $row = mysql_fetch_array($checklogin);

		 $_SESSION['user']['Username'] = $username;                    
		 $_SESSION['user']['LoggedIn'] = 1;              
		 $_SESSION['user']['ID'] = get_userid($username);     
		 $_SESSION['user']['errormsg'] = '';
		 $_SESSION['user']['type'] = 1;

	}else{

		 $_SESSION['user']['Username'] = $username;                    
		 $_SESSION['user']['LoggedIn'] = 0;     
		 $_SESSION['user']['errormsg'] = 'Invalid Email and/or Password. For Additional assistance, please contact Empire America at 866.411.3621. Thank you.';                 

	}      

// USER REGISTRATION
}else if(!empty($_POST['UserEmail']) && !empty($_POST['UserPassword']) && !empty($_POST['application'])){
         
	//create user
	$username = mysql_real_escape_string($_POST['UserEmail']);
	$password = md5(mysql_real_escape_string($_POST['UserPassword']));         

	$checkusername = mysql_query("SELECT * FROM wp_apply_users WHERE username = '".$username."'");

	if(mysql_num_rows($checkusername) == 1){                   

		$_SESSION['user']['errormsg'] = 'User Taken';            

	} else {

		$registerquery = mysql_query("INSERT INTO wp_apply_users (username, password) VALUES('".$username."', '".$password."')");            

		if($registerquery){

		    $_SESSION['user']['Username'] = $username;                    
			$_SESSION['user']['LoggedIn'] = 1;              
			$_SESSION['user']['ID'] = get_userid($username);     
			$_SESSION['user']['errormsg'] = '';
			$_SESSION['user']['type'] = 0;

		}else {

		   $_SESSION['user']['LoggedIn'] = 0;
		   $_SESSION['user']['errormsg'] = 'Connection Error Please Try Again';               
		   
		}       

	} // else     
   
}// else if

if($_SESSION['user']['LoggedIn'] == 1){

	$_SESSION['form']['LoggedIn'] = $_SESSION['user']['LoggedIn'];
	$_SESSION['form']['ID'] = $_SESSION['user']['ID'];
	$_SESSION['form']['Username'] = $_SESSION['user']['Username'];
	$_SESSION['form']['errormsg'] = $_SESSION['user']['errormsg'];
	$_SESSION['form']['usrtype'] = $_SESSION['user']['type'];

	$form_ID = get_formid($_SESSION['user']['ID']);	

	//check if it has a form already	
	if($form_ID != NULL){

		$query = mysql_query("SELECT * FROM wp_applynow_form WHERE form_id ='".$form_ID."'");
		$query = mysql_fetch_array($query, MYSQL_ASSOC);
		
		//Passing Data to Session
		
		if($query['refinance'] == 'Y'){

			$Type = 'Refinance';

		}else if($query['purchase'] == 'Y'){

			$Type = 'Purchase';

		}

		if($query['sub_add'] == 'To Be Determined'){
			$_SESSION['form']['TBD'] = 'on';
		}

		if($query['provide'] == 'N'){
			$_SESSION['form']['EthnicalInfo'] = 'on';	
			$_SESSION['form']['EthInfo'] = 'true';	
		}

		if($query['male'] == 'Y'){
			$_SESSION['form']['Gender'] = 'Male';	
		}else if($query['female'] == 'Y'){
			$_SESSION['form']['Gender'] = 'Female';	
		}

		if($query['hispanic'] == 'Y'){
			$_SESSION['form']['Ethnicity'] = 'Hispanic or Latino';	
		}else if($query['no_his'] == 'Y'){
			$_SESSION['form']['Ethnicity'] = 'Not Hispanic or Latino';	
		}

		if($query['indian'] == 'Y'){
			$_SESSION['form']['Race'] = 'American Indian or Alaska Native';	
		}else if($query['hawai'] == 'Y'){
			$_SESSION['form']['Race'] = 'Native Hawaiian or Other Pacific Islander';	
		}else if($query['asian'] == 'Y'){
			$_SESSION['form']['Race'] = 'Asian';	
		}else if($query['white'] == 'Y'){
			$_SESSION['form']['Race'] = 'White';	
		}else if($query['black'] == 'Y'){
			$_SESSION['form']['Race'] = 'Black or African American';	
		}				

		$_SESSION['form']['question'] = $query['finished_step'];	    	    	    	    
		$_SESSION['form']['IncompleteStep'] = $query['current_step'];	    
		$_SESSION['form']['FinanceType'] = $Type;
	    $_SESSION['form']['LoanAmount'] = $query['loan'];	    	    
	    $_SESSION['form']['FirstName'] = $query['fname'];	    	    
	    $_SESSION['form']['LastName'] = $query['lname'];	    	    
	    $_SESSION['form']['HomePhoneNumber'] = $query['home'];	    	    
	    $_SESSION['form']['CellPhoneNumber'] = $query['cell'];	    	    
	    $_SESSION['form']['BusinessPhoneNumber'] = $query['work'];	    	    
	    $_SESSION['form']['Email'] = $query['email'];	    	    
	    $_SESSION['form']['CurrentStreetAddress'] = $query['curr_add'];	    	    
	    $_SESSION['form']['CurrentCity'] = $query['curr_city'];	    	    
	    $_SESSION['form']['CurrentState'] = $query['curr_state'];	    	    
	    $_SESSION['form']['CurrentZipCode'] = $query['curr_zip'];	    	    
	    $_SESSION['form']['PropOwnedRent'] = $query['curr_years_prop'];	    	    
	    $_SESSION['form']['PrevStreetAddress'] = $query['prev_add'];	    	    
	    $_SESSION['form']['PreviousCity'] = $query['prev_city'];	    	    
	    $_SESSION['form']['PrevState'] = $query['prev_state'];	    	    
	    $_SESSION['form']['PrevZipCode'] = $query['prev_zip'];	    	    
	    $_SESSION['form']['PrevPropOwnedRent'] = $query['prev_years_prop'];	    	    
	    $_SESSION['form']['PropRefStreetAddress'] = $query['sub_add'];	    	    
	    $_SESSION['form']['PropRefCity'] = $query['sub_city'];	    	    
	    $_SESSION['form']['PropRefState'] = $query['sub_state'];	    	    
	    $_SESSION['form']['PropRefZipCode'] = $query['sub_zip'];	    	    
	    $_SESSION['form']['EstimatedPurchaseVal'] = $query['purchase_value'];	    	    
	    $_SESSION['form']['PurchaseLoanAmount'] = $query['purchase_loan'];	    	    
	    $_SESSION['form']['RefEstimatedValue'] = $query['refinance_estval'];	    	    
	    $_SESSION['form']['SelfEmployed'] = $query['self_employed'];	    	    
	    $_SESSION['form']['EmployerName'] = $query['employer_name'];	
	    $_SESSION['form']['CompanyName'] = $query['company_name'];	    	    
	    $_SESSION['form']['PositionTitle'] = $query['position'];	    	    
	    $_SESSION['form']['LengthofEmployment'] = $query['yr_job'];	    	    
	    $_SESSION['form']['PrevDateFrom'] = $query['prev_from'];	    	    
	    $_SESSION['form']['PrevDateTo'] = $query['prev_to'];	    	    
	    $_SESSION['form']['YearsWorking'] = $query['yr_work'];	    	    
	    $_SESSION['form']['PrevEmployerName'] = $query['prev_employer'];	    	    
	    $_SESSION['form']['PrevPositionTitle'] = $query['prev_position'];	    	    
	    $_SESSION['form']['PrevDateFrom'] = $query['prev_from'];	    	    
	    $_SESSION['form']['PrevDateTo'] = $query['prev_to'];	    	    
	    $_SESSION['form']['question-1'] = $query['judgment'];	    	    
	    $_SESSION['form']['question-2'] = $query['bankrupt'];	    	    
	    $_SESSION['form']['question-3'] = $query['foreclose'];	    	    
	    $_SESSION['form']['question-4'] = $query['lawsuit'];	    	    
	    $_SESSION['form']['question-5'] = $query['obligate'];	    	    
	    $_SESSION['form']['question-6'] = $query['delinqu'];	    	    
	    $_SESSION['form']['question-7'] = $query['alimony'];	    	    
	    $_SESSION['form']['question-8'] = $query['endorser'];	    	    
	    $_SESSION['form']['question-9'] = $query['uscitizen'];	    	    
	    $_SESSION['form']['question-10'] = $query['alien'];	    	    
	    $_SESSION['form']['question-11'] = $query['primary_res'];	    	    
	    $_SESSION['form']['question-12'] = $query['owner3y'];	    	    	    



	}else{

		SavetoDB($_SESSION['user']['ID']);

	}

	echo json_encode($_SESSION['form']);   

// end Session Check
} else {

	echo json_encode($_SESSION['user']);   

} 



?>
<?php
function CreateCSV($DATA){

   if($_SESSION['form']['FinanceType'] == 'Refinance'){
      $refinance = 'Y';
   }else if($_SESSION['form']['FinanceType'] == 'Purchase'){
      $purchase = 'Y';
      $_SESSION['form']['LoanAmount'] = '';
   }

   if($_SESSION['form']['EthInfo'] == 'true' ){
      $provide = 'N';
      unset($_SESSION['form']['Race']);
      unset($_SESSION['form']['Gender']);
      unset($_SESSION['form']['Ethnicity']);
   }

   //Race Ethnicity Gender Data
   switch ($_SESSION['form']['Race']) {
      case 'American Indian or Alaska Native':
         $indian = 'Y';
      break;
      case 'Native Hawaiian or Other Pacific Islander';
         $hawai = 'Y';
      break;
      case 'Asian';
         $asian = 'Y';
      break;
      case 'White';
         $white = 'Y';
      break;
      case 'Black or African American';
         $black = 'Y';
      break;
   }

   switch ($_SESSION['form']['Gender']) {
      case 'Male';
         $male = 'Y';
      break;
      case 'Female';
         $female = 'Y';
      break;
   }

   switch ($_SESSION['form']['Ethnicity']) {
      case 'Hispanic or Latino';
         $hispanic = 'Y';
      break;
      case 'Not Hispanic or Latino';
         $no_his = 'Y';
      break;
   }

   //Build CSV File
   $csvstring = 'refinance,purchase,loan,fname,lname,home,cell,work,email,curr_add,curr_city,curr_state,curr_zip,curr_years_prop,prev_add,prev_city,prev_state,prev_zip,prev_years_prop,sub_add,sub_city,sub_state,sub_zip,purchase_value,purchase_loan,refinance_estval,self_employed,employer_name,position,yr_job,yr_work,prev_employer,prev_position,prev_from,prev_to,judgment,bankrupt,foreclose,lawsuit,obligate,delinqu,alimony,endorser,uscitizen,alien,primary_res,owner3y,provide,male,female,hispanic,no_his,indian,hawai,asian,white,black,comments'.PHP_EOL;
   $csvstring .= $refinance.','.$purchase.','.$_SESSION['form']['LoanAmount'].','.$_SESSION['form']['FirstName'].','.$_SESSION['form']['LastName'].','.$_SESSION['form']['HomePhoneNumber'].','.$_SESSION['form']['CellPhoneNumber'].','.$_SESSION['form']['BusinessPhoneNumber'].','.$_SESSION['form']['Email'].','.$_SESSION['form']['CurrentStreetAddress'].','.$_SESSION['form']['CurrentCity'].','.$_SESSION['form']['CurrentState'].','.$_SESSION['form']['CurrentZipCode'].','.$_SESSION['form']['PropOwnedRent'].','.$_SESSION['form']['PrevStreetAddress'].','.$_SESSION['form']['PreviousCity'].','.$_SESSION['form']['PrevState'].','.$_SESSION['form']['PrevZipCode'].','.$_SESSION['form']['PrevPropOwnedRent'].','.$_SESSION['form']['PropRefStreetAddress'].','.$_SESSION['form']['PropRefCity'].','.$_SESSION['form']['PropRefState'].','.$_SESSION['form']['PropRefZipCode'].','.$_SESSION['form']['EstimatedPurchaseVal'].','.$_SESSION['form']['PurchaseLoanAmount'].','.$_SESSION['form']['RefEstimatedValue'].','.$_SESSION['form']['SelfEmployed'].','.$_SESSION['form']['EmployerName'].','.$_SESSION['form']['PositionTitle'].','.$_SESSION['form']['LengthofEmployment'].','.$_SESSION['form']['YearsWorking'].','.$_SESSION['form']['PrevEmployerName'].','.$_SESSION['form']['PrevPositionTitle'].','.$_SESSION['form']['PrevDateFrom'].','.$_SESSION['form']['PrevDateTo'].','.$_SESSION['form']['question-1'].','.$_SESSION['form']['question-2'].','.$_SESSION['form']['question-3'].','.$_SESSION['form']['question-4'].','.$_SESSION['form']['question-5'].','.$_SESSION['form']['question-6'].','.$_SESSION['form']['question-7'].','.$_SESSION['form']['question-8'].','.$_SESSION['form']['question-9'].','.$_SESSION['form']['question-10'].','.$_SESSION['form']['question-11'].','.$_SESSION['form']['question-12'].',' . $provide . ',' . $male . ',' . $female . ',' . $hispanic . ',' . $no_his . ',' . $indian . ',' . $hawai . ',' . $asian . ',' . $white . ',' . $black. ',' . $_SESSION['form']['comments'];

   /*WRITE THE CSV FILE*/
   $today = getdate();
   $filename =  $today['mon'] . $today['mday'] . $today['year'] .'-'. $today['hours'];
   $filename = $_SESSION['form']['FirstName'] . $_SESSION['form']['LastName'] . $filename . '.csv' ;
   $file = '../temp/' . $filename;

   file_put_contents($file, $csvstring);

   /////////////////////////////////
   ////// SEND FILE VIA EMAIL //////
   /////////////////////////////////

   $email = new PHPMailer();

   $email->IsSMTP();
   $email->Host       = "192.168.1.4";
   $email->SMTPAuth   = false;                  // enable SMTP authentication
   $email->Port       = 25;                    // set the SMTP port for the GMAIL server
   $email->From      = 'melanie@ereachconsulting.com';
   $email->FromName  = 'Empire of America';
   $email->Subject   = 'Empire of America Application Form - ' . $_SESSION['form']['FirstName'] . ' ' . $_SESSION['form']['LastName'];
   $email->Body      = 'Verify Attachments';
   $email->AddAddress( 'consultants@empireofamerica.com' );

   $attachfilename = $filename + '.csv';

   $email->AddAttachment( $file , $attachfilename );

   $email->Send();

}// END CREATE CSV

function SavetoDB($userid){

   // Sanitation
   foreach ($_SESSION['form'] as $key => $value) {
      $_SESSION['form'][$key] = stripslashes($value);
   }

   $form_id = get_formid($userid);

   // Data Dependancies
   if($_SESSION['form']['FinanceType'] == 'Refinance'){
      $refinance = 'Y';
   }else if($_SESSION['form']['FinanceType'] == 'Purchase'){
      $purchase = 'Y';
      $_SESSION['form']['LoanAmount'] = '';
   }

  if($_SESSION['form']['EthInfo'] == 'true' ){
      $provide = 'N';
      unset($_SESSION['form']['Race']);
      unset($_SESSION['form']['Gender']);
      unset($_SESSION['form']['Ethnicity']);
   }

   //Race Ethnicity Gender Data
   switch ($_SESSION['form']['Race']) {
      case 'American Indian or Alaska Native':
         $indian = 'Y';
      break;
      case 'Native Hawaiian or Other Pacific Islander';
         $hawai = 'Y';
      break;
      case 'Asian';
         $asian = 'Y';
      break;
      case 'White';
         $white = 'Y';
      break;
      case 'Black or African American';
         $black = 'Y';
      break;
   }

   switch ($_SESSION['form']['Gender']) {
      case 'Male';
         $male = 'Y';
      break;
      case 'Female';
         $female = 'Y';
      break;
   }

   switch ($_SESSION['form']['Ethnicity']) {
      case 'Hispanic or Latino';
         $hispanic = 'Y';
      break;
      case 'Not Hispanic or Latino';
         $no_his = 'Y';
      break;
   }

   // Check if user has already filled out a form
   if($form_id == NULL){

      $query = mysql_query("INSERT INTO wp_applynow_form (user_id, finished_step, current_step, refinance, purchase, loan, fname, lname, home, cell, work, email, curr_add, curr_city, curr_state, curr_zip, curr_years_prop, curr_ref, prev_add, prev_city, prev_state, prev_zip, prev_years_prop, sub_add, sub_city, sub_state, sub_zip, purchase_value, purchase_loan, refinance_estval,self_employed, employer_name, company_name, position, yr_job, yr_work, prev_employer, prev_position, prev_from,prev_to, judgment, bankrupt, foreclose, lawsuit, obligate, delinqu, alimony, endorser, uscitizen, alien, primary_res , owner3y, provide, male, female, hispanic, no_his, indian, hawai, asian, white, black, comments )
      VALUES( '".$userid."', '".$_SESSION['form']['question']."', '".$_SESSION['form']['IncompleteStep']."', '".$refinance."', '".$purchase."', '".$_SESSION['form']['LoanAmount']."', '".$_SESSION['form']['FirstName']."', '".$_SESSION['form']['LastName']."', '".$_SESSION['form']['HomePhoneNumber']."', '".$_SESSION['form']['CellPhoneNumber']."', '".$_SESSION['form']['BusinessPhoneNumber']."', '".$_SESSION['form']['Email']."', '".$_SESSION['form']['CurrentStreetAddress']."', '".$_SESSION['form']['CurrentCity']."', '".$_SESSION['form']['CurrentState']."', '".$_SESSION['form']['CurrentZipCode']."', '".$_SESSION['form']['PropOwnedRent']."', '".$_SESSION['form']['PropertyBeingRefinanced']."', '".$_SESSION['form']['PrevStreetAddress']."', '".$_SESSION['form']['PreviousCity']."', '".$_SESSION['form']['PrevState']."', '".$_SESSION['form']['PrevZipCode']."', '".$_SESSION['form']['PrevPropOwnedRent']."', '".$_SESSION['form']['PropRefStreetAddress']."', '".$_SESSION['form']['PropRefCity']."', '".$_SESSION['form']['PropRefState']."', '".$_SESSION['form']['PropRefZipCode']."', '".$_SESSION['form']['EstimatedPurchaseVal']."', '".$_SESSION['form']['PurchaseLoanAmount']."', '".$_SESSION['form']['RefEstimatedValue']."', '".$_SESSION['form']['EmployerName']."', '".$_SESSION['form']['CompanyName']."', '".$_SESSION['form']['PositionTitle']."', '".$_SESSION['form']['LengthofEmployment']."', '".$_SESSION['form']['YearsWorking']."', '".$_SESSION['form']['SelfEmployed']."', '".$_SESSION['form']['PrevEmployerName']."', '".$_SESSION['form']['PrevPositionTitle']."', '".$_SESSION['form']['PrevDateFrom']."', '".$_SESSION['form']['PrevDateTo']."', '".$_SESSION['form']['question-1']."', '".$_SESSION['form']['question-2']."', '".$_SESSION['form']['question-3']."', '".$_SESSION['form']['question-4']."', '".$_SESSION['form']['question-5']."', '".$_SESSION['form']['question-6']."', '".$_SESSION['form']['question-7']."', '".$_SESSION['form']['question-8']."', '".$_SESSION['form']['question-9']."', '".$_SESSION['form']['question-10']."', '".$_SESSION['form']['question-11']."', '".$_SESSION['form']['question-12']."', '".$provide."', '".$male."', '".$female."', '".$hispanic."', '".$no_his."', '".$indian."', '".$hawai."', '".$asian."', '".$white."', '".$black."', '".$_SESSION['form']['comments'] ."' )");

      if (!$query) {

         $_SESSION['form']['error'] = mysql_error();

      }else{

         $_SESSION['form']['error'] = '';
         $_SESSION['form']['save_status'] = 'saved';

      }

      // Get Form ID
      $form_id_new = get_formid($userid);

      // Link Form ID in User Table
      $saveFormIDUser = mysql_query("UPDATE wp_apply_users SET form_id = ".$form_id_new." WHERE user_id = ".$userid."");

   }else{


      $form_id = get_formid_user($userid);
      $query = mysql_query("UPDATE wp_applynow_form
         SET finished_step = '".$_SESSION['form']['question']."',
            current_step = '".$_SESSION['form']['IncompleteStep']."',
            refinance = '".$refinance."',
            purchase = '".$purchase."',
            loan = '".$_SESSION['form']['LoanAmount']."',
            fname = '".$_SESSION['form']['FirstName']."',
            lname = '".$_SESSION['form']['LastName']."',
            home = '".$_SESSION['form']['HomePhoneNumber']."',
            cell = '".$_SESSION['form']['CellPhoneNumber']."',
            work = '".$_SESSION['form']['BusinessPhoneNumber']."',
            email = '".$_SESSION['form']['Email']."',
            curr_add = '".$_SESSION['form']['CurrentStreetAddress']."',
            curr_city = '".$_SESSION['form']['CurrentCity']."',
            curr_state = '".$_SESSION['form']['CurrentState']."',
            curr_zip = '".$_SESSION['form']['CurrentZipCode']."',
            curr_years_prop = '".$_SESSION['form']['PropOwnedRent']."',
            curr_ref = '".$_SESSION['form']['PropertyBeingRefinanced']."',
            prev_add = '".$_SESSION['form']['PrevStreetAddress']."',
            prev_city = '".$_SESSION['form']['PreviousCity']."',
            prev_state = '".$_SESSION['form']['PrevState']."',
            prev_zip = '".$_SESSION['form']['PrevZipCode']."',
            prev_years_prop = '".$_SESSION['form']['PrevPropOwnedRent']."',
            sub_add = '".$_SESSION['form']['PropRefStreetAddress']."',
            sub_city = '".$_SESSION['form']['PropRefCity']."',
            sub_state = '".$_SESSION['form']['PropRefState']."',
            sub_zip = '".$_SESSION['form']['PropRefZipCode']."',
            purchase_value = '".$_SESSION['form']['EstimatedPurchaseVal']."',
            purchase_loan = '".$_SESSION['form']['PurchaseLoanAmount']."',
            refinance_estval = '".$_SESSION['form']['RefEstimatedValue']."',
            self_employed = '".$_SESSION['form']['SelfEmployed']."',
            employer_name = '".$_SESSION['form']['EmployerName']."',
            company_name = '".$_SESSION['form']['CompanyName']."',
            position = '".$_SESSION['form']['PositionTitle']."',
            yr_job = '".$_SESSION['form']['LengthofEmployment']."',
            yr_work = '".$_SESSION['form']['YearsWorking']."',
            prev_employer = '".$_SESSION['form']['PrevEmployerName']."',
            prev_position = '".$_SESSION['form']['PrevPositionTitle']."',
            prev_from = '".$_SESSION['form']['PrevDateFrom']."',
            prev_to = '".$_SESSION['form']['PrevDateTo']."',
            judgment = '".$_SESSION['form']['question-1']."',
            bankrupt = '".$_SESSION['form']['question-2']."',
            foreclose = '".$_SESSION['form']['question-3']."',
            lawsuit = '".$_SESSION['form']['question-4']."',
            obligate = '".$_SESSION['form']['question-5']."',
            delinqu = '".$_SESSION['form']['question-6']."',
            alimony = '".$_SESSION['form']['question-7']."',
            endorser = '".$_SESSION['form']['question-8']."',
            uscitizen = '".$_SESSION['form']['question-9']."',
            alien = '".$_SESSION['form']['question-10']."',
            primary_res = '".$_SESSION['form']['question-11']."',
            owner3y = '".$_SESSION['form']['question-12']."',
            provide = '".$provide."',
            male = '".$male."',
            female = '".$female."',
            hispanic = '".$hispanic."',
            no_his = '".$no_his."',
            indian = '".$indian."',
            hawai = '".$hawai."',
            asian = '".$asian."',
            white = '".$white."',
            black = '".$black."',
            comments = '".$_SESSION['form']['comments']."'
         WHERE form_id = ".$form_id." ");

      if (!$query) {

         $_SESSION['form']['error'] = mysql_error();

      }else{

         $_SESSION['form']['error'] = '';
         $_SESSION['form']['save_status'] = 'saved';

      }


   }


}// end function

function get_userid($usermail){

   $query = mysql_query("SELECT user_id FROM wp_apply_users WHERE username = '".$usermail."' ");

   $userid = mysql_fetch_array($query, MYSQL_ASSOC);

   return $userid['user_id'];

}

function get_formid_user($userid){

   $query = mysql_query("SELECT form_id FROM wp_apply_users WHERE user_id ='".$userid."'");
   $query = mysql_fetch_array($query, MYSQL_ASSOC);

   return $query['form_id'];

}

function get_formid($userid){

   $query = mysql_query("SELECT form_id FROM wp_applynow_form WHERE user_id ='".$userid."'");
   $query = mysql_fetch_array($query, MYSQL_ASSOC);

   return $query['form_id'];

}

?>
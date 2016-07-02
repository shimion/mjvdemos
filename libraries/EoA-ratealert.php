<?php 

	include('ob-config.php');
	 
 	try {   	
		
		$parameters = array(
			'DesiredRate' => $_POST['Rate'], 			
			'BorrowerFirstName' => $_POST['FirstName'], 	
			'BorrowerLasttName' => $_POST['LastName'], 	
			'BorrowerEmail' => $_POST['Email'], 	
			'PropertyStateName' =>$_POST['State'],
			'LoanAmount' =>$_POST['LoanAmount'] 	 	
		);	

	    $data = $soapClient->CreateConsumerRateAlert($parameters);  

		$result = '<Result xmlns="">';
		$result .= $data->CreateConsumerRateAlertResult;
		$result .= '</Result>';	    

		$result = simplexml_load_string($result);    		

        echo json_encode(array('returned_val' => $data));
	 
	} catch (SoapFault $fault) {

		echo json_encode(array('status' => 'error','message'=> $fault));

	}
?>
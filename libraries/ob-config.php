<?php

	$soapClient = new SoapClient('http://cobra.empireofamerica.com:81//QuoteService.asmx?wsdl', array('cache_wsdl' => WSDL_CACHE_NONE));	
	//$soapClient = new SoapClient('http://10.0.0.12/QuoteService.asmx?wsdl', array('cache_wsdl' => WSDL_CACHE_NONE));	

?>
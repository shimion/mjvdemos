<?php
$call = 'http://api.sba.gov/geodata/county_links_for_state_of/'.$_GET['state'].'.json';
$json = json_decode(file_get_contents($call));

$count = 0;

foreach ($json as $value) {	
	$counties[$count] .= str_replace(" County","",$value->name);	
	$count++;
}

natsort($counties);
$counties = array_values($counties);

echo json_encode($counties);  

?>
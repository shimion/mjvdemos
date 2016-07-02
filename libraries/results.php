<?php
require 'parse/autoload.php';

$app_id = 'rj8KutBCAtAy3P4j6stbmaLBzN12STNzLzbFgvav';
$rest_key = 'k5MJiwTzrNj9x2a1EN40b7a4GraW9msENbgkm9RN';
$master_key = 'sGcTJdZN7vm9LZrrCc3WK633UBOK5eAmVgARLKeo';

//Initialize Parse
use Parse\ParseObject;
use Parse\ParseQuery;
use Parse\ParseACL;
use Parse\ParsePush;
use Parse\ParseUser;
use Parse\ParseInstallation;
use Parse\ParseException;
use Parse\ParseAnalytics;
use Parse\ParseFile;
use Parse\ParseCloud;
use Parse\ParseClient;

ParseClient::initialize($app_id, $rest_key, $master_key);

function getIndex($product)
{
    switch ($product) {
        case 4:
            return 1;
            break;
        case 40:
            return 2;
            break;
        case 3:
            return 3;
            break;
        case 2:
            return 4;
            break;
        case 1:
            return 5;
            break;
        case 1036:
            return 6;
            break;
        case 134:
            return 7;
            break;
        case 135:
            return 8;
        case 1307:
            return 1.1;
            break;
        case 1681:
            return 3.1;
            break;
        case 1308:
            return 4.1;
            break;
        case 1662:
            return 5.1;
            break;
        case 1309:
            return 6.1;
            break;
        case 1323:
            return 7.1;
            break;
        case 1324:
            return 8.1;
            break;
        case 15:
            return 1.2;
            break;
        case 13:
            return 4.2;
            break;
        case 1038:
            return 6.2;
            break;
        case 140:
            return 7.2;
            break;
        case 141:
            return 8.2;
            break;
        default:
            return 99;
            break;
    }
}

function closeToZero($var, $var2)
{
    return abs($var) < abs($var2) ? $var : $var2;
}

function getCosts($data)
{

    //Escrow_Lender
    //PURCHASE
    if ($data['loanpurpose'] == '0') {
        $closing_costs = array(
            "courier" => null,
            "endorsement" => null,
            "escrow_fee" => null,
            "lender_origination_fee" => null,
            "lender_title_insurance" => null,
            "notary" => null,
            "recording" => null,
            "tax_cert" => null
        );

        $query = new ParseQuery("purchaseTable");
        $query->equalTo("state", $data["propertyState"]);
        $query->descending("loan_amount");
        $query->lessThanOrEqualTo("loan_amount", intval($data['loan_amount']));
        $query->limit(1);

        if ($data["propertyState"] == 'CA') {
            $query2 = new ParseQuery("escrowTableCA");
            $query2->descending("sale_price");
            $query2->lessThanOrEqualTo("sale_price", intval($data['appraisedvalue']));
            $query2->limit(1);
        }
    } else {
        $closing_costs = array(
            'origination_fee' => null,
            'courier' => null,
            'lender_insurance' => null,
            'notary' => null,
            'premium' => null,
            'recording' => null,
            'settlement' => null,
            'tax_cert' => null
        );
        $query = new ParseQuery("refinanceTable");
        $query->equalTo("state", $data["propertyState"]);
        $query->lessThanOrEqualTo("loan_amount", intval($data['loan_amount']));
        $query->limit(1);
    }
    //////////////////////////// TRY CATCH
    try {
        if ($data['propertyType'] == '0') {
            $closing_costs['single_family'] = null;
        } else if ($data['propertyType'] == '3') {
            $closing_costs['condominium'] = null;
        } else if ($data['propertyType'] == '19') {
            $closing_costs['townhouse'] = null;
        } else if ($data['propertyType'] == '20') {
            $closing_costs['two_units'] = null;
        } else if ($data['propertyType'] == '21') {
            $closing_costs['three_units'] = null;
        } else if ($data['propertyType'] == '22') {
            $closing_costs['four_units'] = null;
        } else if ($data['propertyType'] == '16') {
            $closing_costs['pud'] = null;
        }

        if ($data['loanpurpose'] == '0') {

            $results = $query->find();
            $results2 = ($data["propertyState"] == 'CA') ? $query2->find() : null;
            $total = 0;
            foreach ($closing_costs as $key => $value) {
                //store data as number
                $closing_costs[$key] = intval($results[0]->get($key));
                if ($key == 'escrow_fee' && $data['propertyState'] == 'CA') {
                    $total = $total + intval($results2[0]->get('total_escrow_fee'));
                } else {
                    $total = $total + intval($results[0]->get($key));
                }
            }
            $closing_costs['escrow_fee'] = ($data['propertyState'] == 'CA') ? intval($results2[0]->get('total_escrow_fee')) : $closing_costs['escrow_fee'];
            $closing_costs['total_closing_costs'] = $total;

        } else {

            $results = $query->find();
            $total = 0;
            foreach ($closing_costs as $key => $value) {
                //store data as number
                $closing_costs[$key] = intval($results[0]->get($key));
                $total = $total + intval($results[0]->get($key));
            }
            $closing_costs['total_closing_costs'] = $total;
        }

        return $closing_costs;
    } catch (ParseException $ex) {
        return $ex;
    }
}

//loanpurpose { 0 = Purchase, 1 and 2 = Refinance }
//PropertyType  { 0 = single family, 3 = Condominium, 19 = Townhome, 20 = 2 units, 21 = 3 units, 22 = 4 Units, 16 = PUD}

//// GET THE DATA
$json = file_get_contents('php://input');
$search = json_decode($json);

// SETUP DATA AND ENDPOINT
$url = 'https://thirdparty.mortech-inc.com/mpg/servlet/mpgThirdPartyServlet';

// FORMAT DATA
$data = array(
    'request_id' => '1',
    'customerId' => '05empr01',
    'username' => 'mortech',  
    'password' => 'mortech',
    'emailAddress' => 'melanie@ereachconsulting.com',
    'targetPrice' => '-999',
    'lockindays' => $search->lockindays,
    'loanpurpose' => $search->loanpurpose,
    'loan_amount' => $search->loan_amount,
    'appraisedvalue' => $search->appraisedValue,
    'downPayment' => $search->downPayment,
    'propertyState' => $search->propertyState,
    'propertyCounty' => $search->propertyCounty,
    'fico' => $search->fico,
    'propertyType' => $search->propertyType,
    'occupancy' => $search->occupancy,
    'waiveescrow' => $search->waiveescrow,
    'productList' => $search->loanProduct
);

$content_data = http_build_query($data);

$options = array
(
    'http' => array
    (
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => $content_data,
    ),
);

$context = stream_context_create($options);
$result  = file_get_contents($url, false, $context);
$xml     = simplexml_load_string($result);

$temp = array
(
	"index"             => getIndex($search->loanProduct),
	"product"           => $search->loanProduct,
	"title"             => $xml->results->quote["productDesc"],
	"hasData"           => false,
	"quotes"            => array(),
	"closingCosts"      => getCosts($data),
	"query"             => $data,
	"query_url"         => $url . '?' . $content_data,
	"mortech_response"  => $result
);

$results = $temp;

foreach ($xml->results->quote as $quote)
{
	if(!empty($quote)) :

		$credit 		 = ceil((intval($data['loan_amount']) * floatval($quote->quote_detail["price"]) / 100));
		$total_costs = ceil((intval($data['loan_amount']) * floatval($quote->quote_detail["price"]) / 100) + $temp['closingCosts']['total_closing_costs']);

		if($total_costs < 0){
			$credit = (abs($credit) + $total_costs) * -1;
		}

		$quote = array
		(
			'rate'             => $quote->quote_detail["rate"],
			'points'           => $quote->quote_detail["price"], // points
			'apr'              => $quote->quote_detail["apr"],
			'piti'             => ceil(floatval($quote->quote_detail["piti"])),
			'credit_irate'     => $credit,
			'total_costs'      => $total_costs,
			'best'             => false
		);
		$results["hasData"] = true;
		array_push($temp["quotes"], $quote);
	endif;
}

foreach ($temp['quotes'] as $key => $value)
{
	if($temp['quotes'][$key]['points'] < 0){
		$best = closeToZero($key, $key);
		$min = $best - 3;
		$max = $best + 3;
		$temp['quotes'][$best]['best'] = true;
		break;
	}
}

for ($i=$min; $i <= $max ; $i++) {
	if($temp["quotes"][$i] != null){
		array_push($results["quotes"], $temp["quotes"][$i]);
	}
}

echo json_encode($results);
// echo '<pre>';
// var_dump($results);
// echo '</pre>';
?>
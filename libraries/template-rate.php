<?php

	$obtime = $product->RatesheetTimestamp;
	$csttime = new DateTime($obtime);
	$psttime = date_sub($csttime, date_interval_create_from_date_string('2 hours'));
	echo '<span style="display:none;">';
	var_dump($psttime);
	echo '</span>';
	$timestamp = $psttime->date;

	$output .= '<div id="tab-'.$type.$count.'" class="tab-content">';
	$output .= '<span class="title">'.changename($product->ProductName).'</span><div class="rate-row">';
	$output .= '<span class="rate">'.$product->Rate.'% / </span>';
	$output .= '<span class="apr">'.$product->OriginationAPR.'% APR</span></div>';
	$output .= '<span class="action">No Points, No Lender Fees!</span>';
	$output .= '<span class="amount">Loan Amounts up to '.$LoanAmount.'</span>';
	$output .= '<span class="date">Last Update: '. $timestamp .' PST</span>';
	$output .= '<a style="font-size:12px;display:block;padding-top:10px;" href="'.get_permalink(141).'#1">Assumptions</a>';
	$output .= '</div>';
?>
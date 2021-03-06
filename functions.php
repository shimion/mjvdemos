<?php
function load_scripts()
{
    // CSS
    //...............................................
    wp_enqueue_style('semantic-css', get_stylesheet_directory_uri() . '/assets/css/semantic.css');
    wp_enqueue_style('bxslider-css', get_stylesheet_directory_uri() . '/assets/css/jquery.bxslider.css');
    wp_enqueue_style('dropdown', get_stylesheet_directory_uri() . '/assets/css/dropdown.min.css');
    wp_enqueue_style('checkbox', get_stylesheet_directory_uri() . '/assets/css/checkbox.min.css');
    wp_enqueue_style('modal', get_stylesheet_directory_uri() . '/assets/css/modal.css');
    wp_enqueue_style('animate-css', get_stylesheet_directory_uri() . '/assets/css/animate.css');
    wp_enqueue_style('icon-css', get_stylesheet_directory_uri() . '/assets/css/icon.min.css');
    wp_enqueue_style('loading-css', get_stylesheet_directory_uri() . '/assets/css/loading-bar.min.css');
    wp_enqueue_style('calculators', get_stylesheet_directory_uri() . '/assets/calculators/KJE.css');
    wp_enqueue_style('empire', get_stylesheet_directory_uri() . '/assets/css/empire.css');
    wp_enqueue_style('empire-fixes', get_stylesheet_directory_uri() . '/assets/css/empire-fixes.css');
    wp_enqueue_style('font-awesome', get_site_url() . '/wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/font-awesome.min.css');
    if (is_page('67') or is_page('11') or is_single() or is_category() or is_archive() or is_search()) {
        wp_enqueue_style('extra_style', get_stylesheet_directory_uri() . '/assets/css/extra_style.css');
    }

    if (is_page_template('templates/template-apply-new.php')) {
        wp_enqueue_style('jquery.datetimepicker', get_stylesheet_directory_uri() . '/assets/css/jquery.datetimepicker.css');
        wp_enqueue_style('new_apply_now', get_stylesheet_directory_uri() . '/assets/css/new_apply_now.css');
        wp_enqueue_style('jquery.fancybox', get_stylesheet_directory_uri() . '/assets/css/jquery.fancybox.css');
    }

    // JavaScript
    //...............................................

    // Enqueue scripts

    if (is_page_template('templates/template-apply-new.php')) {
        wp_enqueue_script('jquery', '//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.js', array(), '1.11.1', true);
        wp_enqueue_script('validate-js', 'https://ajax.aspnetcdn.com/ajax/jquery.validate/1.12.0/jquery.validate.min.js', array(), '1.12.0', true);
        wp_enqueue_script('additional-methods.min', get_stylesheet_directory_uri() . '/assets/js/additional-methods.min.js', array('jquery'), '', true);
        wp_enqueue_script('jquery.datetimepicker', get_stylesheet_directory_uri() . '/assets/js/jquery.datetimepicker.js', array('jquery'), '', true);
//    wp_enqueue_script('jquery.validate.min', get_stylesheet_directory_uri() . '/assets/js/jquery.validate.min.js', array('jquery'), '', true);
        wp_enqueue_script('maximage', get_template_directory_uri() . '/assets/js/maximage.js', array(), '', true);
        wp_enqueue_script('fancybox', get_template_directory_uri() . '/assets/js/jquery.fancybox.js', array(), '', true);
        wp_enqueue_script('mask', get_template_directory_uri() . '/assets/js/jquery.mask.min.js', array(), '', true);
        wp_enqueue_script('main-apply-new', get_stylesheet_directory_uri() . '/assets/js/main-apply-new.js', array('jquery'), '', true);
        wp_enqueue_script('apply-now-new', get_stylesheet_directory_uri() . '/assets/js/apply-now-new.js', array('jquery'), '', true);
    }


    wp_enqueue_script('semantic', get_stylesheet_directory_uri() . '/assets/js/semantic.min.js', array('jquery'), '', true);
    wp_enqueue_script('bxslider', get_stylesheet_directory_uri() . '/assets/js/jquery.bxslider.min.js', array('jquery'), '', true);
    wp_enqueue_script('angularJS', get_stylesheet_directory_uri() . '/assets/js/angular.min.js', array('jquery'), '', true);
    wp_enqueue_script('underscoreJS', get_stylesheet_directory_uri() . '/assets/js/underscore-min.js', array('jquery'), '', true);
    wp_enqueue_script('angular-loading', get_stylesheet_directory_uri() . '/assets/js/angular-loading-bar.min.js', array('jquery'), '', true);
    wp_enqueue_script('angular-cookies', get_stylesheet_directory_uri() . '/assets/js/angular-cookies.min.js', array('jquery'), '', true);
    wp_enqueue_script('angular-router', get_stylesheet_directory_uri() . '/assets/js/angular-ui-router.min.js', array('jquery'), '', true);
    wp_enqueue_script('semantic-dropdown', get_stylesheet_directory_uri() . '/assets/js/dropdown.min.js', array('jquery'), '', true);
    wp_enqueue_script('semantic-checkbox', get_stylesheet_directory_uri() . '/assets/js/checkbox.min.js', array('jquery'), '', true);
    wp_enqueue_script('semantic-modal', get_stylesheet_directory_uri() . '/assets/js/modal.js', array('jquery'), '', true);
    wp_enqueue_script('autonumeric', get_stylesheet_directory_uri() . '/assets/js/autoNumeric-min.js', array('jquery'), '', true);
    wp_enqueue_script('directive-dropdown', get_stylesheet_directory_uri() . '/assets/js/dropdown.js', array('jquery'), '', true);
    wp_enqueue_script('directive-checkbox', get_stylesheet_directory_uri() . '/assets/js/checkbox.js', array('jquery'), '', true);
    wp_enqueue_script('directive-modal', get_stylesheet_directory_uri() . '/assets/js/modal.dir.js', array('jquery'), '', true);
    wp_enqueue_script('empire-js', get_stylesheet_directory_uri() . '/assets/js/empire.js', array('jquery'), '', true);

    //Application
    wp_enqueue_script('quoteSearch', get_stylesheet_directory_uri() . '/assets/js/app/search.js', array('jquery'), '', true);
    wp_enqueue_script('searchCtrl', get_stylesheet_directory_uri() . '/assets/js/app/search/main.ctrl.js', array('jquery'), '', true);

    wp_enqueue_script('applyForm', get_stylesheet_directory_uri() . '/assets/js/app/apply.js', array('jquery'), '', true);
    wp_enqueue_script('formCtrl', get_stylesheet_directory_uri() . '/assets/js/app/form/controllers/formCtrl.js', array('jquery'), '', true);
}

add_action('wp_enqueue_scripts', 'load_scripts', 11);

function renderbuttons()
{

    $output = '<div class="top-buttons">
		<a class="ui button black" href="' . get_permalink(23) . '">Instant Rates</a>
		<a class="ui button black" href="' . get_permalink(29) . '">Contact Us</a>
		<a class="ui button green" href="' . get_permalink(25) . '">Apply Now</a>
	</div>';

    return $output;

}

add_shortcode('top-buttons', 'renderbuttons');

function getRateSheet($atts)
{
    $type = $atts['type'];
    $template = $atts['template'];

    switch ($type) {
        case 1:
            $items = [
                4,
                40,
                3,
                2,
                1,
                1035,
                134,
                135,
            ];
            $titles = [
                "30 year fixed",
                "25 year fixed",
                "20 year fixed",
                "15 year fixed",
                "10 year fixed",
                "5/1 Arm",
                "7/1 Arm",
                "10/1 Arm",
            ];
            $jumbo = false;
            $superConforming = false;
            break;
        case 2:
            $items = [1307, 1681, 1308, 1662, 1309, 1323, 1324];
            $titles = ["30 Yr Fixed", "20 Yr Fixed", "15 Yr Fixed", "10 Yr Fixed", "5/1 Arm", "7/1 Arm", "10/1 Arm"];
            $jumbo = false;
            $superConforming = true;
            break;
        case 3:
            $items = [15, 13, 1038, 140, 141];
            $titles = ["30 Year Fixed", "15 Year Fixed", "5/1 Arm", "7/1 Arm", "10/1 Arm"];
            $jumbo = true;
            $superConforming = false;
            break;
        case 4:
            $items = [1035, 134, 135];
            $titles = ["5/1 Arm", "7/1 Arm", "10/1 Arm"];
            $jumbo = true;
            $superConforming = false;
            break;
    }

    $count = 0;

    if ($template == 'tables') {

        $output =
            '<table class="ui table">
				<thead>
					<tr>
						<th class="center">Program</th>
						<th class="center">Rate</th>
						<th class="center">Points</th>
						<th class="center">APR</th>
					</tr>
				</thead>
				<tbody>';

        foreach ($items as $key => $value) {

            $rate = getRate($value, $jumbo, $superConforming)->results->quote->quote_detail["rate"];
            $apr = getRate($value, $jumbo, $superConforming)->results->quote->quote_detail["apr"];
            $points = getRate($value, $jumbo, $superConforming)->results->quote->quote_detail["price"];


            $output .= '<tr>
						<td class="center">' . $titles[$key] . '</td>
						<td class="center">' . $rate . '</td>
						<td class="center">' . $points . '</td>
						<td class="center">' . $apr . '</td>
					</tr>';

        }

        $output .= '</tbody></table>';

    } else {

        foreach ($items as $key => $value) {

            $count++;

            if ($jumbo == true) {
//                print_r(getRate($value, $jumbo, $superConforming));

            }

            $rate = getRate($value, $jumbo, $superConforming)->results->quote->quote_detail["rate"];

            $apr = getRate($value, $jumbo, $superConforming)->results->quote->quote_detail["apr"];


            if ($count == 1) {
                $isactive = 'active';
            } else {
                $isactive = '';
            }

            if ($jumbo == false) {
                $loan_amount = ' Loan Amounts up to $417,000 <br>';
            }


            if (get_option('todays_rates_date') == true) {
                $todays_rates_date = get_option('todays_rates_date');
            }
            else {
                $todays_rates_date = date("Y-m-d h:i:s");

            }

            $menu .= '<li class="' . $isactive . '"><a href="#tab-' . $type . $count . '">' . $titles[$key] . '<span>No Points, No Lender Fees</span></a></li>';
            $data .= '<div id="tab-' . $type . $count . '" class="tab-content">
				<p>
					<span class="title">' . $titles[$key] . '</span>
					<span class="rates">' . $rate . '% / ' . $apr . '% APR</span>
					<span class="subtitle">No Points, No Lender Fees!</span>
					' . $loan_amount . '' . '
					<span class="italic">Last Update: ' . $todays_rates_date . ' UTC</span> <br>
					<span class="italic"><a href="' . get_permalink(141) . '">Assumptions</a></span>
				</p>
			</div>';
        }
        $output = '<div class="content-tabs clearfix">
			<ul id="list-tab-' . $type . '" class="tabs-list">
				' . $menu . '
			</ul>
			<div id="tab-' . $type . '" class="tabs">
				' . $data . '
			</div>
		</div>';
    }

    echo $output;

}

add_shortcode('ratesheet', 'getRateSheet');

function register_my_menus()
{
    register_nav_menus(
        array(
            'top-menu' => __('Top Navigation'),
            'footer-menu' => __('Footer Navigation'),
            'calculator-menu' => __('Calculator Menu')
        ));
}

add_action('init', 'register_my_menus');


//SHORTCODES
function getRate($name, $jumbo, $superConforming)
{

    if ($jumbo == true) {

        // JUMBO ASSUMPTIONS
        $json = '
		{ 
			"loanpurpose"    : "0",
			"loan_amount"    : "750000",
			"appraisedValue" : "1250000",
			"downPayment" : "500000",
			"propertyState"  : "CA",
			"propertyCounty" : "Los Angeles",
			"fico"           : "780",
			"propertyType"   : "0",
			"occupancy"      : "0",
			"waiveescrow"    : "1"
		}';

    } else if ($superConforming == true) {
        //ASSUMPTIONS
        $json = '
		{
			"loanpurpose"    : "0",
			"loan_amount"    : "625000",
			"appraisedValue" : "1041667", 
			"downPayment" : "416667",
			"propertyState"  : "CA",
			"propertyCounty" : "Los Angeles",
			"fico"           : "780",
			"propertyType"   : "0",
			"occupancy"      : "0",
			"waiveescrow"    : "1"
		}';

    } else {
        //ASSUMPTIONS
        $json = '
		{
	        "loanpurpose"    : "0",
			"loan_amount"    : "300000",
			"appraisedValue" : "375000",
			"downPayment" : "75000",
			"propertyState"  : "CA",
			"propertyCounty" : "Los Angeles",
			"fico"           : "780",
			"propertyType"   : "0",
			"occupancy"      : "0",
			"waiveescrow"    : "1"
		}';
    }

    //// GET THE DATA
    $search = json_decode($json);

    // SETUP DATA AND ENDPOINT
    $url = 'https://thirdparty.mortech-inc.com/mpg/servlet/mpgThirdPartyServlet';

    // FORMAT DATA
    $data = array(
        'request_id' => '1',
        'customerId' => '05empr01',
        'thirdPartyName' => 'empire',
        'licenseKey' => 'paThuru8',
        'username' => 'mortech',
        'password' => 'mortech',
        'emailAddress' => 'melanie@ereachconsulting.com',
//        'targetPrice' => '-999',
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
        'productList' => $name,
    );

//    if ($jumbo == true) {
//        print_r($data);
//
//        echo http_build_query($data);
//
//        echo "<br/><br/><br/>";
//    }


    if (get_option('todays_rates_' . $name) == true) {

        $xml = simplexml_load_string(get_option('todays_rates_' . $name));

    } else {
        $options = array
        ( 
            'http' => array
            (
                'header' => "Content-type: application/x-www-form-urlencoded\r\n",
                'method' => 'POST',
                'content' => http_build_query($data),
            ),
        );

        $context = stream_context_create($options);

        $result = file_get_contents($url, false, $context);

        add_option('todays_rates_' . $name, $result, '', 'yes');

        add_option('todays_rates_date', date("Y-m-d h:i:s"), '', 'yes');

        $xml = simplexml_load_string($result);
    }

    if ($jumbo == true) {
        $temp = array
        (
            "product" => $search->loanProduct,
            "title" => $xml->results->quote["productDesc"],
            "hasData" => false,
            "quotes" => array(),
            "query" => $data,
            "query_url" => $url . '?' . http_build_query($data),
            "mortech_response" => $result
        );

        //print_r($temp);
    }

    return $xml;

}

function rateForm($atts, $content = null)
{

    $output = '<div class="instant-rate-widget">
		<span class="title">Easy, Relaxed Quote Process</span>
		<form class="ui form" name="quoteRate" action="' . get_permalink(23) . '/#/">
			<div class="inline fields">
				<div class="six wide field">
					<label>Loan Purpose</label>
				</div>
		    <div class="ten wide field">
		      <select name="loanpurpose" class="dropdown">
						<option value="">Select Loan Purpose</option>
						<option value="0">Purchase</option>
		        <option value="1">Refinance</option>
		        <option value="2">Cash-out Refinance</option>
					</select>
		    </div>
		  </div>
			<div class="purchase_data">
				<div class="inline fields">
					<div class="six wide field">
						<label>Purchase Price</label>
					</div>
					<div class="ten wide field">
						<input type="text" name="purchasePrice">
					</div>
				</div>
				<div class="inline fields">
					<div class="six wide field">
						<label>Down Payment</label>
					</div>
					<div class="ten wide field">
						<input type="text" name="downPayment">
					</div>
				</div>
			</div>
			<div class="refinance_data">
				<div class="inline fields">
					<div class="six wide field">
						<label>Loan Amount</label>
					</div>
					<div class="ten wide field">
						<input type="text" name="loanAmount">
					</div>
				</div>
				<div class="inline fields">
					<div class="six wide field">
						<label>Property Value</label>
					</div>
					<div class="ten wide field">
						<input type="text" name="propertyValue">
					</div>
				</div>
			</div>
			<div class="inline fields">
				<div class="six wide field">
					<label>State</label>
				</div>
				<div class="ten wide field">
					<select class="dropdown" name="propertyState">
						<option value="">Select State</option>
						<option value="CA">California</option>
		      	<option value="TX">Texas</option>
					</select>
				</div>
			</div>
			<div class="inline fields">
				<div class="six wide field">
					<label>County</label>
				</div>
				<div class="ten wide field">
					<select class="dropdown" name="propertyCounty">
						<option value="">Select County</option>
					</select>
				</div>
			</div>
			<div class="inline fields">
				<div class="six wide field">
					<label>Credit Score</label>
				</div>
				<div class="ten wide field">
					<select class="dropdown" name="fico">
						<option value="">Select Option</option>
	     			<option value="800">800-850 Excellent+</option>
				<option value="780">780-799 Excellent</option>
				<option value="760">760-779 Very Good+</option>
				<option value="740">740-759 Very Good</option>
				<option value="720">720-739 Good+</option>
				<option value="700">700-719 Good</option>
				<option value="680">680-699 Decent+</option>
				<option value="660">660-679 Decent</option>
				<option value="640">640-659 Fair+</option>
					</select>
				</div>
			</div>
			<div class="row center">
				<input type="hidden" name="propertyType" value="0">
				<input type="hidden" name="occupancy" value="0">
				<input type="hidden" name="waiveescrow" value="0">
				<button class="ui button getrates">Get a Quote</button>
			</div>
		</form>
	</div>';

    return $output;

}

add_shortcode('instant-rate', 'rateForm');

function get_testimonials()
{
    $args = array(
        'post_type' => 'testimonials',
        'posts_per_page' => 10,
    );

    $loop = new WP_Query($args);

    $output = '<div class="test-slider">';

    while ($loop->have_posts()) : $loop->the_post();

        $image = get_field('avatar');

        $output .= '<div class="testimonial clearfix"><div class="avatar"><img src="' . $image['sizes']['thumbnail'] . '" class="ui small circular image" alt=""></div><div class="text"><p>' . get_field('testimonial') . '</p><span class="name">' . get_the_title() . '</span><span class="location">' . get_field('location') . '</span></div></div>';

    endwhile;

    $output .= '</div>';

    wp_reset_query();

    echo $output;
}

add_shortcode('testimonials', 'get_testimonials');

function call_calculator($atts)
{

    extract(shortcode_atts(array(
        'type' => $type,
    ), $atts));

    $directory = get_stylesheet_directory_uri();

    $output = '<noscript><div align=center><div align=center id=KJENoJavaScript class=KJENoJavaScript>Javascript is required for this calculator.  If you are using Internet Explorer, you may need to select to "Allow Blocked Content" to view this calculator.
			<p><b>For more information about these these financial calculators please visit: <A href=http://www.dinkytown.net target=_blank>Financial Calculators</a> from KJE Computer Solutions, LLC</b></p></div></div></noscript>
			<div id="KJEAllContent"></div>

			<!--[if lt IE 9]>
			<script language="JavaScript" SRC="' . $directory . '/assets/calculators/excanvas.js"></script>
			<![endif]-->
			<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/KJE.js"></script>';

    switch ($type) {

        // 15 vs 30 Year of Mortgage
        case 1:
            $output .= '<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageCompare.js"></script>
				<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageCompareParams.js"></script>';
            break;
        //Mortgage Loan
        case 2:
            $output .= '<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageLoan.js"></script>
				<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageLoanParams.js"></script>';
            break;
        //Rent vs Buy
        case 3:
            $output .= '<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageRentvsBuy.js"></script>
				<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageRentvsBuyParams.js"></script>';
            break;
        //Adjustable Rate Mortgage Calculator
        case 4:
            $output .= '<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageAdjustable.js"></script>
				<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageAdjustableParams.js"></script>';
            break;
        //Mortgage APR Calculator
        case 5:
            $output .= '<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageApr.js"></script>
				<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageAprParams.js"></script>';
            break;
        //AMR & Interest Only AMR VS Fixed Rate Mortgage
        case 6:
            $output .= '<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageArmvsFixed.js"></script>
				<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageArmvsFixedParams.js"></script>';
            break;
        //Fixed Rate Mortgage VS Interest Only Mortgage
        case 7:
            $output .= '<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageFixedvsIO.js"></script>
				<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageFixedvsIOParams.js"></script>';
            break;
        //Fixed Rate Mortgage vs Libor ARM
        case 8:
            $output .= '<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageFixedvsLibor.js"></script>
				<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageFixedvsLiborParams.js"></script>';
            break;
        //Mortgage TAX Savings Calculator
        case 9:
            $output .= '<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageTaxes.js"></script>
				<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageTaxesParams.js"></script>';
            break;
        //APR Calculator For Adjustable Rate Mortgages
        case 10:
            $output .= '<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageAprAdjustable.js"></script>
				<script language="JavaScript" type="text/javascript" SRC="' . $directory . '/assets/calculators/MortgageAprAdjustableParams.js"></script>';
            break;
    } // switch
    echo $output;
}

add_shortcode('calculator', 'call_calculator');

add_action('wp_head', 'mobile_menu_custom_css');
function mobile_menu_custom_css()
{
    global $post;
    if (get_field('enable_mobile_layout', get_the_ID())) {
        ?>
        <style>
            @media only screen and (max-width: 768px) {
                #main-content {
                    display: none !important;
                }

                #main-content.mobile-content {
                    display: block !important;
                    padding: 10px;
                    text-align: center;
                }
            }
        </style>
        <?php
    }
}

function get_step($step, $currstep)
{

    if ($step == 1 && ($currstep == '' || $currstep == null) || $step == $currstep) {

        echo 'current';

    } else {

        echo 'disabled';

    }
}

?>
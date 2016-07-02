<?php
require_once('../../../wp-load.php');

$items = [
    4,
    40,
    3,
    2,
    1,
    1035,
    134,
    135, 1307, 1681, 1308, 1662, 1309, 1323, 1324, 15, 13, 1038, 140, 141
];

delete_option('todays_rates_date');


foreach ($items as $key => $value) {
    delete_option('todays_rates_' . $value);
}

?>
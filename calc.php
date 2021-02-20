<?php
$date_start = date_parse_from_format('d-m-yyyy', $_POST['date']);
$sum = $_POST['sum_start'];
$term = $_POST['term'];
$sumadd = $_POST['sum_add'];
$percent = 1.1;
$daysy = 365;
for ($i = $date_start['month']; $i <= 12 * $term + $date_start['month']; $i++) {
    $sum = $sum + ($sum + $sumadd) *
        cal_days_in_month(CAL_GREGORIAN, $i % 12 + 1, $date_start['year'] + $term / 12)
        * $percent / ($daysy + ($date_start['year'] % 4 == 0 ? 1 : 0));
}
echo round($sum);


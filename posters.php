<?php

date_default_timezone_set('Europe/Amsterdam');
$date = date('m-d-Y', time());

$posters = array();

foreach (glob("posters/*.*") as $filename) {
    $name = pathinfo($filename, PATHINFO_FILENAME);
    if(strcmp($date, $name) > 0) {
        array_push($posters, $filename);
    }
}
    
echo "<script>var posters=".json_encode($posters).";</script>";

?>
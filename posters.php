<?php

date_default_timezone_set('Europe/Amsterdam');
$today = new DateTime('now', new DateTimeZone('Europe/Amsterdam'));

$posters = array();

foreach (glob("posters/*.*") as $filename) {
    $name = pathinfo($filename, PATHINFO_FILENAME);
    
    // Naam moete minimaal 10 karakters zijn i.v.m. geldige date dd-mm-jjjj
    if(strlen($name >= 10)) {
        // Tijd gedeelte er afhakken en omzetten naar DateTime object
        $time = substr($name, 0, 10);
        $date = new DateTime($time);

        // Poster moet niet weergeven als de datum al geweest is
        if($today <= $date) {
            array_push($posters, $filename);
        }
    }
}
    
echo "<script>var posters=".json_encode($posters).";</script>";

?>
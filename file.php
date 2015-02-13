<?php

// PHP list all files in directory

$filename_array = array();

$directory = $_GET['directory'];

foreach (glob($directory."/*.*") as $filename) {
    array_push($filename_array, $filename);
}

echo json_encode($filename_array);

?>
<?php
    foreach (glob("sponsoren/*.*") as $filename) {
        echo "<div class='sponsor'><img src='$filename' /></div>";
    }
?>
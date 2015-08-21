<?php

// Retrieves XML from an URL
function getXML($url) {
    $session = curl_init($url); 
    curl_setopt($session, CURLOPT_CONNECTTIMEOUT ,0); 
    curl_setopt($session, CURLOPT_TIMEOUT, 5);
    curl_setopt($session, CURLOPT_HEADER, false);
    curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
    $xml = curl_exec($session); 
    curl_close($session); 
    return $xml;
}

// Parses XML from an URL
function parseXML($url) {
    $xml = getXML($url);
    $rss = simplexml_load_string($xml);
    $items = $rss->channel->item;

    $array = array();
    foreach($items as $item) {
        array_push($array, $item);
    }
    return $array;
}

// Displays a RSS feed using values retrieved by PHP in Javascript
function showFeed($name, $url) {
    
    $html = "<div class='divider green'></div>".
            "<div class='feed'>".
                "<div class='titel'>$name</div>".
                "<div class='$name'></div>".
            "</div>";
    
    echo $html;
    
    $feed = parseXML($url);
    $script = "<script>".
                "var $name=".json_encode($feed).";".
                "var counter".$name."=0;".
                "function ".$name."Feed() {".
                    "counter".$name." = showFeed('.$name', $name, counter".$name.");".
                    "setTimeout(".$name."Feed, 10000);".
                "}".
                $name."Feed();".
              "</script>";
    
    echo $script;
}

showFeed("Tweakers", "http://feeds.feedburner.com/tweakers/nieuws");
showFeed("Nu", "http://www.nu.nl/rss/algemeen");
showFeed("AndroidWorld", "http://feeds.feedburner.com/androidworld/zHTD");

?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <title>Syntaxis TV</title>

        <link href="styles/style.css" rel="stylesheet" type="text/css"/>
        <link href="styles/li-scroller.css" rel="stylesheet" type="text/css"/>

        <script src="js/jquery-2.1.3.min.js" type="text/javascript"></script>
        <script src="js/jquery.li-scroller.1.0.js" type="text/javascript"></script>
        <script src="js/jquery.jcarousel.min.js" type="text/javascript"></script>
    </head>
    <body>
        <section id="left-side">
            <img id='activity' src='#' />;

            <div id="footer">
                <ul id="newsfeed">
                    <?php
                        // Retrieves XML from an URL
                        function getXML($url) {
                            $session = curl_init($url); 
                            curl_setopt($session, CURLOPT_HEADER, false);
                            curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
                            $xml = curl_exec($session); 
                            curl_close($session); 
                            return $xml;
                        }

                        // Parses XML from an URL
                        function parseXML($url) {
                            $titles = array();

                            $xml = getXML($url);
                            $rss = simplexml_load_string($xml);
                            $items = $rss->channel->item;

                            foreach($items as $item) {
                                array_push($titles, (string) $item->title);
                            }

                            return $titles;
                        }

                        $tweakers = parseXML("http://tweakers.net/feeds/nieuws.xml/direct");
                        $sax = parseXML("http://sax.nu/DesktopModules/ICRArticles/module_main/RSS2.aspx?catID=1");

                        for($i=0; $i<100; $i++) {
                            if($i < sizeof($tweakers)) {
                                echo "<li><span class='tweakers'>Tweakers</span><a>".$tweakers[$i]."</a></li>";
                            }
                            if($i < sizeof($sax)) {
                                echo "<li><span class='sax'>Sax</span><a>".$sax[$i]."</a></li>";
                            }
                        }
                    ?>
                </ul>
            </div>
        </section>

        <aside id="right-side">
            <div id="clock">--:--:-- PM</div>

            <div id="sponsors">
                <ul id="carousel" class="jcarousel-skin-tango">
                    <?php
                        foreach (glob("sponsors/*.*") as $filename) {
                            echo "<li><img src='$filename' /></li>";
                        }
                    ?>
                </ul>
            </div>
        </aside>

        <!-- Setup -->
        <script>
            var activities = <?php echo json_encode(glob("activities/*.*")); ?>;
        </script>
        <script src="js/setup.js" type="text/javascript"></script>
        
    </body>
</html>
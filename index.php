<!doctype html>

<html lang="nl">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Syntaxis TV</title>
    <meta name="description" content="De website die getoond wordt op de TV bij het Syntaxis kantoor">
    <meta name="author" content="Syntaxis">

    <link rel="stylesheet" href="css/flipclock.css">
    <link rel="stylesheet" href="css/style.css">
    
    <script src="js/jquery.min.js"></script>
    <script src="js/flipclock.min.js"></script>
    <script src="js/script.js"></script>
</head>

<body>

    <!-- Logos -->
    <div class="logos">
        <!-- Syntaxis -->
        <img class="logo" src="img/syntaxis_logo.png" title="Syntaxis logo" />

        <!-- Sponsoren -->
        <section class="sponsoren">
            <div class="titel">Onze sponsoren:</div>
            <?php
                foreach (glob("sponsoren/*.*") as $filename) {
                    echo "<div class='sponsor'><img src='$filename' /></div>";
                }
            ?>
        </section>
    </div>	

    <!-- Posters -->
    <div class="poster">
        <script>
            var posters = <?php echo json_encode(glob("posters/*.*")); ?>;
        </script>
    </div>

    <!-- Panel -->
    <div class="panel">
        <!-- Klok -->
        <div class="klok">
            <div class="date titel"></div>
            <div class="clock"></div>
        </div>

        <!-- Feeds -->
        <div class="feeds">
            <?php include('feeds.php'); ?>
        </div>
    </div>

</body>
</html>
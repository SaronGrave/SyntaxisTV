<!doctype html>

<html lang="nl">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Syntaxis TV</title>
    <meta name="description" content="De website die getoond wordt op de TV bij het Syntaxis kantoor">
    <meta name="author" content="Syntaxis">
    <meta http-equiv="refresh" content="300" >
    
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
        <img class="logo syntaxis" src="img/syntaxis_logo2.png" title="Syntaxis logo" />

        <!-- Sponsoren -->
        <section class="sponsoren">
            <div class="titel">Onze sponsoren:</div>
            <?php include('sponsoren.php'); ?>
        </section>
    </div>	

    <!-- Posters -->
    <div class="poster">
        <?php include('posters.php'); ?>
        <div class="poster-image"></div>
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
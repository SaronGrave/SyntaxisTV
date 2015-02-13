$(document).ready(function()
{
    // init the clock
    updateClock();
    setInterval('updateClock()', 1000);

    // get xml from tweakers and parse
    $.get('proxy.php?url=http://tweakers.net/feeds/nieuws.xml/direct', function(data) {
        parseXmlTweakers(data);
    });

    // get xml from sax and parse
    $.get('proxy.php?url=http://sax.nu/DesktopModules/ICRArticles/module_main/RSS2.aspx?catID=1', function(data) {
        parseXmlSax(data);
    });

    // get all the sponsors and init them
    $.get('file.php?directory=Sponsors', function(data) {
        bannerSetup(data);
    });

    // init the activity content
    $.get('file.php?directory=Main_Content', function(data) {
        mainSetup(data);
    });

    // reload after 5 min.
    window.setTimeout(function() {
        location.reload();
    }, 300000);

});

// Compose Clock
function updateClock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;// + " " + timeOfDay;

    $("#clock").html(currentTimeString);
}

var mainList;
var mainIndex;
// fill the "activityContainer" with activities
function mainSetup(data) {
    mainList = $.parseJSON(data);

    $("#activityContainer").html("<img src='" + mainList[0] + "' style='max-height:100%;max-width:100%;'>");
    mainIndex = 0;

    // switch the activity every 10 seconds
    setInterval('mainFillIn()', 15000);

}

// switch the activity showing
function mainFillIn() {
    var size = mainList.length;

    $("#activityContainer").fadeOut(800);
    if (mainIndex == (size - 1)) {
        mainIndex = 0;
        $("#activityContainer").html("<img src='" + mainList[mainIndex] + "' style='max-height:100%;max-width:100%;'>").hide();
        sizeImg(mainList[mainIndex]);
    } else {
        mainIndex++;
        $("#activityContainer").html("<img src='" + mainList[mainIndex] + "' style='max-height:100%;max-width:100%;'>").hide();
        sizeImg(mainList[mainIndex]);
    }
    $("#activityContainer").fadeIn(800);
}

// function to get image size
function sizeImg(location) {
    var img = new Image();
    var dimensions = new Array();
    img.onload = function() {
        //alert(this.width + 'x' + this.height);
        dimensions.put(this.width);
        dimensions.put(this.height);
    };
    img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';
    return dimensions;
}

// Set the sponsors bar
function bannerSetup(data) {
    var list = $.parseJSON(data);

    $.each(list, function(index, value) {
        $("#carousel").append("<li><img src='" + window.location.href + value + "' /></li>");
    });

    jQuery('#carousel').jcarousel({
        auto: 5,
        scroll: 1,
        wrap: 'circular',
        visible: 1
    });
}
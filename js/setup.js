$(document).ready(function() {
    
    // Setup
    setupClock();
    setupActivity();
    setupSponsors();
    setupNewsfeed();
    
    // Reload page every 5 minutes
    window.setTimeout(function() {
        location.reload();
    }, 300000);

});

// Setup the clock
function setupClock() {
    updateClock();
    setInterval('updateClock()', 1000);
}

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

// Setup activity panel
function setupActivity() {
    rotateActivity();
    setInterval(rotateActivity, 10000);
}

// Rotates activities
var activity = 0;
function rotateActivity() {
    if(activity >= activities.length-1) {
        activity = 0;
    }
    
    $("#activity").fadeOut(500, function() {
        $("#activity").attr("src", activities[activity]);
        $(this).fadeIn(500);
    });

    activity++;
}

// Setup the sponsors bar
function setupSponsors() {
    jQuery('#carousel').jcarousel({
        auto: 5,
        scroll: 1,
        wrap: 'circular',
        visible: 1
    });
}

// Setup the newsfeed
function setupNewsfeed() {
     $("#newsfeed").liScroll();
}
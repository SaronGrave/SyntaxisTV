$(document).ready(function() {
    
    // Setup
    setupClock();
    setupActivity();
    setupBanner();
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

// Switch the displayed activity every 10 seconds
var activity = 0;
function setupActivity() {
    if(activity >= activities.length) {
        activity = 0;
    }
    $("#activity").attr("src", activities[activity]);
    activity++;
}

// Setup the sponsors bar
function setupBanner() {
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
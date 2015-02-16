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
    var date = new Date();
    var time = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    
    var clock = $('#clock').FlipClock(time, {
        countdown: false
    });  
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
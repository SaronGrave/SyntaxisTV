// Setup als alles geladen is
$(document).ready(function() {
    
    setupDate();
    setupClock();
    
    showPosters();
    setInterval(showPosters, 20000);
    
});

// Weergeeft de datum van vandaag
function setupDate() {
    var date = new Date();
    
    // Dagen definieren
    var days = [];
    days[0] = "Zondag";
    days[1] = "Maandag";
    days[2] = "Dinsdag";
    days[3] = "Woensdag";
    days[4] = "Donderdag";
    days[5] = "Vrijdag";
    days[6] = "Zaterdag";

    // Maanden definieren
    var months = [];
    months[0]  = "Januari";
    months[1]  = "Februari";
    months[2]  = "Maart";
    months[3]  = "April";
    months[4]  = "Mei";
    months[5]  = "Juni";
    months[6]  = "Juli";
    months[7]  = "Augustus";
    months[8]  = "September";
    months[9]  = "Oktober";
    months[10] = "November";
    months[11] = "December";

    // Datum weergeven
    var dayName = days[date.getDay()];
    var day = date.getDate();
    var month = months[date.getMonth()];
    $(".date").append(dayName+" "+day+" "+month);
}

// Weergeeft de huidige tijd
function setupClock() {
    var clock = $('.clock').FlipClock({
        clockFace: 'TwentyFourHourClock',
        showSeconds: false,
        countdown: false
    });
}

// Feeds weergeven
function showFeed(element, array, index) {
    if(array !== undefined && array.length > 0) {
        if(index > array.length-1) {
            index = 0;
        }
        
        var date = array[index].pubDate;
        console.log(date);

        var html = "<div class='title'>"+array[index].title+"</div>"+
                   "<div class='date'>Geplaatst op: "+date+"</div>"+
                   "<div class='description'>"+array[index].description+"</div>";
           
           
        $(element).slideUp(function() {
            $(this).html(html).slideDown();
        }); 

        //$(element).html(html);
        index++;
    }
    return index;
}


var posterIndex = 0;
function showPosters() {
    console.log("showPosters()");
    
    if(posters !== undefined && posters.length > 0) {
        if(posterIndex > posters.length-1) {
            posterIndex = 0;
        }
        
        $(".poster-image").fadeOut(2000, function() {
            var html = "<img src='"+posters[posterIndex]+"'/>";
            $(this).html(html).fadeIn(2000);
            posterIndex++;
        }); 

    }
}
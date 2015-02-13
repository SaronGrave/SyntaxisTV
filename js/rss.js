var saxReady = false;
var saxList = [];
var tweakersReady = false;
var tweakersList = [];

// Parse the xml from sax.nu
function parseXmlSax(xml) {
    var counter = 0;
    $(xml).find("item").each(function() {
        $(this).find("title").each(function() {
            if (counter < 5) {
                counter++;
                saxList.push($(this).text());
            }
        });
    });
    saxReady = true;
    combineAndShowResult();
}

// Parse the xml from tweakers.net
function parseXmlTweakers(xml) {
    var counter = 0;
    $(xml).find("item").each(function() {
        $(this).find("title").each(function() {
            if (counter < 5) {
                counter++;
                tweakersList.push($(this).text());
            }
        });
    });
    tweakersReady = true;
    combineAndShowResult();
}

// Check if parseXmlTweakers && parseXmlSax is ready, then add the items to the layout and show it.
function combineAndShowResult() {

    if (saxReady && tweakersReady) {

        for (i = 0; i < 10; i++) {
            if (i % 2 == 0) {
                $("#ticker").append("<li><span>Sax</span><a>" + saxList.shift() + "</a></li>");
            } else {
                $("#ticker").append("<li><span>Tweakers</span><a>" + tweakersList.shift() + "</a></li>");
            }
        }

        // start the ticker
        $("ul#ticker").show();
        $("ul#ticker").liScroll();
    }
}
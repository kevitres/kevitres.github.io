var map;
var src ;



var segments = window.location.pathname.split('/');
var toDelete = [];
for (var i = 0; i < segments.length; i++) {
    if (segments[i].length < 1) {
        toDelete.push(i);
    }
}
for (var i = 0; i < toDelete.length; i++) {
    segments.splice(i, 1);
}
var filename = segments[segments.length - 1];
console.log(filename);
$('#topdog').click(function(){document.location.href = "../achievements/";})




/**
 * Initializes the map and calls the function that loads the KML layer.
 */
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(51.048017, 3.727666),
        zoom: 12,
        mapTypeId: 'roadmap'
    });


       
    
    if(filename=="pooping")
        {
            $('#markers').click(function(){
            loadKmlLayer('https://raw.githubusercontent.com/kevitres/1617.nmdad1.gitnotes/master/kml/hondentoilet.kml', map);
            loadKmlLayer('https://raw.githubusercontent.com/kevitres/1617.nmdad1.gitnotes/master/kml/anti-hondenpoeptegel.kml', map);
            });
            document.getElementById("currentPage").innerHTML="go pooping";
            if(screen.width<=900){
                $('html').css({background : 'url("../img/pooping_m.jpg") no-repeat center'});
            };
             
        }
    else if(filename=="swimming")
        {
             $('#markers').click(function(){
            loadKmlLayer('https://raw.githubusercontent.com/kevitres/1617.nmdad1.gitnotes/master/kml/hondenzwemplaats.kml', map);
                   });
             document.getElementById("currentPage").innerHTML="go swimming";
             if(screen.width<=900){
                $('html').css({background : 'url("../img/swimming_m.jpg") no-repeat center'});
            };
        }
    else if(filename=="running")
        {
             $('#markers').click(function(){
            loadKmlLayer('https://raw.githubusercontent.com/kevitres/1617.nmdad1.gitnotes/master/kml/losloopweide.kml', map);
                   });
             document.getElementById("currentPage").innerHTML="go running";
             if(screen.width<=900){
                $('html').css({background : 'url("../img/running_m.jpg") no-repeat center'});
            };
        }

}
    if(filename=="achievements")
        {
             document.getElementById("currentPage").innerHTML="achievements";
             $('html').css({background: 'url("../img/background_achievements.jpg") center'});
             $('html').css({overflow:'auto'});
            $('html').css("background-image", "url(../img/background_achievements.jpg)"); 
        }
/**
 * Adds a KMLLayer based on the URL passed. Clicking on a marker
 * results in the balloon content being loaded into the right-hand div.
 * @param {string} src A URL for a KML file.
 */
function loadKmlLayer(src, map) {
    var kmlLayer = new google.maps.KmlLayer(src, {
        suppressInfoWindows: false,
        preserveViewport: true,
        map: map
    });
    
};


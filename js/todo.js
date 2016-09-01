/**
 * Created by luisfvargas on 23/08/16.
 */

$('.collapsible').collapsible();

$('.carousel.carousel-slider').carousel({full_width: true});

$('.fa-facebook').click(function(){
    window.open("https://www.facebook.com/saavedramccauslandarquitectos/?ref=bookmarks");
});
$('.fa-youtube').click(function(){
    window.open("https://www.youtube.com/channel/UCTprJmG3zLkwE_3RjqoMVgQ");
});

function initMap() {
    var myLatLng = {lat: 4.447042, lng: -75.243069};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng
    });

    var logo = new google.maps.MarkerImage("../img/LOGO%20OFF.png",null, null, null, new google.maps.Size(50,52));

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: logo,
    });
}

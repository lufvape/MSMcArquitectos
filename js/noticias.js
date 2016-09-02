/**
 * Created by luisfvargas on 2/09/16.
 */

var noticias = [
    "https://www.facebook.com/20531316728/posts/10154009990506729/",
    "https://www.facebook.com/20531316728/posts/10154009990506729/",
    "https://www.facebook.com/20531316728/posts/10154009990506729/",
]

$(document).ready(function(){
    for (i=0; i<noticias.length; i++){
        var card = "";
        card += '<div class="col s12">';
        card += '<div class="cardn darken-1">';
        card += '<div class="card-content white-text">';
        card += '<div class="fb-post" data-href="' + noticias[i] + '"data-width="400"></div>';
        card += '</div>';
        card += '</div>';
        card += '</div>';

        $('.noticias').append(card);
    }
});

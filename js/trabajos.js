/**
 * Created by luisfvargas on 29/08/16.
 */

var trabajos = [
    {
        nombre:"trabajo1",
        descripcion:"Descripción1",
    },
    {
        nombre:"proyecto2",
        descripcion:"Descripción2",
    },
]

$(document).ready(function(){
    for (i=0; i<trabajos.length; i++){
        var card = "";
        card += '<div class="card naveg darken-1">';
        card += '<div class="card-content white-text">';
        card += '<span class="card-title"><h4>' + trabajos[i].nombre + '</h4></span>';
        card += '<p class="flow-text">'+ trabajos[i].descripcion+'</p>';
        card += '</div>';
        card += '<div class="card-action derecha2">';
        card += '<a class="secundario" href="mailto:luisfvargas@gmail.com?subject=' + trabajos[i].nombre + '">Aplica!</a>';
        card += '</div>';
        card += '</div>';

        $('.trabajos').append(card);
    }
});


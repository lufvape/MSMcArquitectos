/**
 * Created by luisfvargas on 26/08/16.
 */
var proyectos = [
    {
        id: "proyecto1",
        nombre:"Casa Osorio",
        descripcion:"Descripción1",
        tipo:"casa",
        escala:"1000",
        estado:"terminado",
        imagenes:[
            "https://www.dropbox.com/s/azwhrv264kl8as0/1.jpg?raw=1",
        ]
    },
    {
        id: "proyecto2",
        nombre:"Filadelfia",
        descripcion:" consectetur nulla libero eget turpis. Sed et malesuada nisl, ac rutrum lacus. Aenean sagittis, nisi non mollis luctus, velit ipsum imperdiet enim, eu pulvinar nisl tortor a est. Ut luctus et est a congue. Aenean sollicitudin ante sed nulla porttitor porta. Nunc bibendum tempor urna, eu dignissim m",
        tipo:"urbanismo",
        escala:"15000",
        estado:"terminado",
        imagenes:[
            "https://www.dropbox.com/s/bh44r5b8yfdhi0l/1.jpg?raw=1",
            "https://www.dropbox.com/s/yb5322bwxmxqcz6/2.jpg?raw=1",
            "https://www.dropbox.com/s/i9mtlkp0wsxes6f/3.jpg?raw=1",
            "https://www.dropbox.com/s/v03hs2g37vwgm6n/4.jpg?raw=1",
            "https://www.dropbox.com/s/qc9wa1pwf5yvqpu/5.jpg?raw=1",
            "https://www.dropbox.com/s/rs52drxtob12u68/6.png?raw=1",
            "https://www.dropbox.com/s/sbirk6ascsbmn0o/7.png?raw=1"
        ]
    },
    {
        id: "proyecto3",
        nombre:"Florida III",
        descripcion:"Descripción3",
        tipo:"urbanismo",
        escala:"400",
        estado:"terminado",
        imagenes:[
            "https://www.dropbox.com/s/0i9keq5e4j4b4gq/1.jpg?raw=1",
            "https://www.dropbox.com/s/iw1f7nc553hgare/2.jpg?raw=1",
            "https://www.dropbox.com/s/epf9q6ufrl1irsu/3.jpg?raw=1",
            "https://www.dropbox.com/s/x575j71jkxvp8e3/4.jpg?raw=1",
            "https://www.dropbox.com/s/tk23sseoihb2z7u/5.jpg?raw=1",
            "https://www.dropbox.com/s/c8x4tpauwbqs274/6.jpg?raw=1",
            "https://www.dropbox.com/s/c8x4tpauwbqs274/6.jpg?raw=1",
        ]
    },
    {
        id: "proyecto4",
        nombre:"Golf club edificio",
        descripcion:"Descripción1",
        tipo:"casa",
        escala:"500",
        estado:"terminado",
        imagenes:[
            "https://www.dropbox.com/s/rc4e8x0mid44lle/1.jpg?raw=1",
            "https://www.dropbox.com/s/3ouno2trit83tb0/2.png?raw=1",
            "https://www.dropbox.com/s/2yquculyhi6f17b/3.png?raw=1",
            "https://www.dropbox.com/s/dr5nkgu50oh13wi/4.jpg?raw=1",
            "https://www.dropbox.com/s/phbn0zhuvc02imu/5.png?raw=1",
            "https://www.dropbox.com/s/0lpnoh0k7x61nbg/6.png?raw=1",
        ]
    },
    {
        id: "proyecto5",
        nombre:"RFP Medical",
        descripcion:" consectetur nulla libero eget turpis. Sed et malesuada nisl, ac rutrum lacus. Aenean sagittis, nisi non mollis luctus, velit ipsum imperdiet enim, eu pulvinar nisl tortor a est. Ut luctus et est a congue. Aenean sollicitudin ante sed nulla porttitor porta. Nunc bibendum tempor urna, eu dignissim m",
        tipo:"casa",
        escala:"500",
        estado:"terminado",
        imagenes:[
            "https://www.dropbox.com/s/d9bnt3o5we6u38u/1.jpg?raw=1",
            "https://www.dropbox.com/s/9ngpw2gvwfrkn23/2.jpg?raw=1",
            "https://www.dropbox.com/s/72vcg4h62itnqu5/3.jpg?raw=1",
            "https://www.dropbox.com/s/7ke60200b82p6mg/4.jpg?raw=1",
            "https://www.dropbox.com/s/w5ugmpf315mwbyl/5.jpg?raw=1",
            "https://www.dropbox.com/s/blz4ug5zs91nkvp/6.jpg?raw=1",
            "https://www.dropbox.com/s/lbbvj3w4jdogq6o/7.jpg?raw=1",
            "https://www.dropbox.com/s/g5gtlbsulfjsfie/8.jpg?raw=1",
            "https://www.dropbox.com/s/l2j5y3jd5myugnn/9.jpg?raw=1",
        ]
    },
    {
        id: "proyecto6",
        nombre:"RFP Torre cll 60",
        descripcion:"Descripción3",
        tipo:"edificio",
        escala:"500",
        estado:"terminado",
        imagenes:[
            "https://www.dropbox.com/s/okhcf1wn8mxi7ry/1.jpg?raw=1",
            "https://www.dropbox.com/s/hkw1f09byb0w2pq/2.jpg?raw=1",
        ]
    },

]

var equipamiento =[];
var urbanismo =[];
var casas =[];
var edificios =[];


function pcomer(){
    for(i=0; i<proyectos.length; i++){
        if(proyectos[i].tipo == "equipamiento"){
            equipamiento.push(proyectos[i]);
        }
    }

    equipamiento.sort(function(a,b){
        return a.escala- b.escala;
    })

    return equipamiento;
}

function purba(){

    for(i=0; i<proyectos.length; i++){
        if(proyectos[i].tipo == "urbanismo"){
            urbanismo.push(proyectos[i]);
        }
    }

    urbanismo.sort(function(a,b){
      return a.escala- b.escala;
    })

    return urbanismo;
}

function pcasas(){
    for(i=0; i<proyectos.length; i++){
        if(proyectos[i].tipo == "casa"){
            casas.push(proyectos[i]);
        }
    }

    casas.sort(function(a,b){
        return a.escala- b.escala;
    })

    return casas;
}
function pedif(){
    for(i=0; i<proyectos.length; i++){
        if(proyectos[i].tipo == "edificio"){
            edificios.push(proyectos[i]);
        }
    }

    edificios.sort(function(a,b){
        return a.escala- b.escala;
    })

    return edificios;
}



$(document).ready(function(){
    pcomer();
    pcasas();
    purba();
    pedif();


    for (i=0; i<equipamiento.length; i++){
        var card = "";
        card += '<div class="col s12 m4">';
        card += '<div class="card">';
        card += '<div class="card-image">';
        card += '<img src="' + equipamiento[i].imagenes[0] + '">';
        card += '</div>';
        card += '</div>';
        card += ' <a class="waves-effect waves-light modal-trigger blue2 medio" href="#modal'+ equipamiento[i].id + '">' + equipamiento[i].nombre + '</a>';
        card += '</div>';

        card += '<div id="modal' + equipamiento[i].id + '" class="modal bottom-sheet">';
        card += '<div class="modal-content">';
        card += '<div class="slider fullscreen">';
        card += '<ul class="slides">';
        for (j=0; j<equipamiento[i].imagenes.length; j++){
            card += '<li>';
            card += '<img class ="responsive-img" src="' + equipamiento[i].imagenes[j] + '">';
            card += '</li>';
        }
        card += '</ul>';
        card += '<p class="medio center-align derecha izquierda flow-text blue2">' + equipamiento[i].descripcion +  '</p>';
        card += '</div>';
        card += '</div>';
        card += '<div class="modal-footer">';
        card += '<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat white-text vista"><i class="material-icons large">close</i></a>';
        card += '</div>';
        card += '</div>';

        $('.equipamiento').append(card);
    }

    for (i=0; i<urbanismo.length; i++){

        var card = "";
        card += '<div class="col s12 m4">';
        card += '<div class="card">';
        card += '<div class="card-image">';
        card += '<img src="' + urbanismo[i].imagenes[0] + '">';
        card += '</div>';
        card += '</div>';
        card += ' <a class="waves-effect waves-light modal-trigger blue2 medio" href="#modal'+ urbanismo[i].id + '">' + urbanismo[i].nombre + '</a>';
        card += '</div>';

        card += '<div id="modal' + urbanismo[i].id + '" class="modal bottom-sheet">';
        card += '<div class="modal-content">';
        card += '<div class="slider fullscreen">';
        card += '<ul class="slides">';
        for (j=0; j<urbanismo[i].imagenes.length; j++){
            card += '<li>';
            card += '<img class ="responsive-img" src="' + urbanismo[i].imagenes[j] + '">';
            card += '</li>';
        }
        card += '</ul>';
        card += '<p class="medio center-align derecha izquierda flow-text blue2">' + urbanismo[i].descripcion +  '</p>';
        card += '</div>';
        card += '</div>';
        card += '<div class="modal-footer">';
        card += '<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat white-text vista"><i class="material-icons large">close</i></a>';
        card += '</div>';
        card += '</div>';


        $('.urbanismo').append(card);
    }

    for (i=0; i<edificios.length; i++){
        var card = "";
        card += '<div class="col s12 m4">';
        card += '<div class="card">';
        card += '<div class="card-image">';
        card += '<img src="' + edificios[i].imagenes[0] + '">';
        card += '</div>';
        card += '</div>';
        card += ' <a class="waves-effect waves-light modal-trigger blue2 medio" href="#modal'+ edificios[i].id + '">' + edificios[i].nombre + '</a>';
        card += '</div>';

        card += '<div id="modal' + edificios[i].id + '" class="modal bottom-sheet">';
        card += '<div class="modal-content">';
        card += '<div class="slider fullscreen">';
        card += '<ul class="slides">';
        for (j=0; j<edificios[i].imagenes.length; j++){
            card += '<li>';
            card += '<img class ="responsive-img" src="' + edificios[i].imagenes[j] + '">';
            card += '</li>';
        }
        card += '</ul>';
        card += '<p class="medio center-align derecha izquierda flow-text blue2">' + edificios[i].descripcion +  '</p>';
        card += '</div>';
        card += '</div>';
        card += '<div class="modal-footer">';
        card += '<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat white-text vista"><i class="material-icons large">close</i></a>';
        card += '</div>';
        card += '</div>';

        $('.edificios').append(card);
    }

    for (i=0; i<casas.length; i++){
        var card = "";
        card += '<div class="col s12 m4">';
        card += '<div class="card">';
        card += '<div class="card-image">';
        card += '<img src="' + casas[i].imagenes[0] + '">';
        card += '</div>';
        card += '</div>';
        card += ' <a class="waves-effect waves-light modal-trigger blue2 medio" href="#modal'+ casas[i].id + '">' + casas[i].nombre + '</a>';
        card += '</div>';

        card += '<div id="modal' + casas[i].id + '" class="modal bottom-sheet">';
        card += '<div class="modal-content">';
        card += '<div class="slider fullscreen">';
        card += '<ul class="slides">';
        for (j=0; j<casas[i].imagenes.length; j++){
            card += '<li>';
            card += '<img class ="responsive-img" src="' + casas[i].imagenes[j] + '">';
            card += '</li>';
        }
        card += '</ul>';
        card += '<p class="medio center-align derecha izquierda flow-text blue2">' + casas[i].descripcion +  '</p>';
        card += '</div>';
        card += '</div>';
        card += '<div class="modal-footer">';
        card += '<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat white-text vista"><i class="material-icons large">close</i></a>';
        card += '</div>';
        card += '</div>';


        $('.casas').append(card);
    }


    $(".card").mouseenter(function(e){
        if ($(this).find('> .card-reveal').length) {
            if ($(e.target).is($('.card .activator')) || $(e.target).is($('.card .activator i')) ) {
                // Make Reveal animate up
                $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
            }
        }

        $('.card-reveal').closest('.card').css('overflow', 'hidden');

    });

    $(".card").mouseleave(function(){
        // Make Reveal animate down and display none
        $(this).find('.card-reveal').velocity(
            {translateY: 0},
            {
                duration: 225,
                queue: false,
                easing: 'easeInOutQuad',
                complete: function() {
                    $(this).css({ display: 'none'});
                }
            });
    });

    $('.modal-trigger').leanModal();
    $('.slider').slider({transition:650});
});
/**
 * Created by luisfvargas on 26/08/16.
 */
var proyectos = [
    {
        nombre:"proyecto1",
        descripcion:"Descripción1",
        tipo:"comercial",
        escala:"500",
        estado:"terminado",
        imagenes:[
            "http://www.construyehogar.com/wp-content/uploads/2013/11/Fachada-posterior-de-casa-moderna-de-dos-pisos.jpg",
            "http://www.construyehogar.com/wp-content/uploads/2013/11/Fachada-posterior-de-casa-moderna-de-dos-pisos.jpg",
            "http://www.construyehogar.com/wp-content/uploads/2015/06/Diseño-de-casa-moderna-de-dos-plantas.jpg",
            "http://www.construyehogar.com/wp-content/uploads/2013/11/Fachada-posterior-de-casa-moderna-de-dos-pisos.jpg",
            "http://www.construyehogar.com/wp-content/uploads/2013/11/Fachada-posterior-de-casa-moderna-de-dos-pisos.jpg",
        ]
    },
    {
        nombre:"proyecto2",
        descripcion:" consectetur nulla libero eget turpis. Sed et malesuada nisl, ac rutrum lacus. Aenean sagittis, nisi non mollis luctus, velit ipsum imperdiet enim, eu pulvinar nisl tortor a est. Ut luctus et est a congue. Aenean sollicitudin ante sed nulla porttitor porta. Nunc bibendum tempor urna, eu dignissim m",
        tipo:"salud",
        escala:"500",
        estado:"terminado",
        imagenes:[
            "http://www.construyehogar.com/wp-content/uploads/2013/11/Fachada-posterior-de-casa-moderna-de-dos-pisos.jpg",
            "http://www.construyehogar.com/wp-content/uploads/2013/11/Fachada-posterior-de-casa-moderna-de-dos-pisos.jpg",
            "http://www.construyehogar.com/wp-content/uploads/2015/06/Diseño-de-casa-moderna-de-dos-plantas.jpg",
            "http://www.construyehogar.com/wp-content/uploads/2013/11/Fachada-posterior-de-casa-moderna-de-dos-pisos.jpg",
            "http://www.construyehogar.com/wp-content/uploads/2013/11/Fachada-posterior-de-casa-moderna-de-dos-pisos.jpg",
        ]
    },
    {
        nombre:"proyecto3",
        descripcion:"Descripción3",
        tipo:"salud",
        escala:"500",
        estado:"terminado",
        imagenes:[
            "http://www.construyehogar.com/wp-content/uploads/2013/11/Fachada-posterior-de-casa-moderna-de-dos-pisos.jpg",
            "http://www.construyehogar.com/wp-content/uploads/2013/11/Fachada-posterior-de-casa-moderna-de-dos-pisos.jpg",
            "http://www.construyehogar.com/wp-content/uploads/2013/11/Fachada-posterior-de-casa-moderna-de-dos-pisos.jpg",
            "http://www.construyehogar.com/wp-content/uploads/2013/11/Fachada-posterior-de-casa-moderna-de-dos-pisos.jpg",
            "http://www.construyehogar.com/wp-content/uploads/2015/06/Diseño-de-casa-moderna-de-dos-plantas.jpg",
            "http://www.construyehogar.com/wp-content/uploads/2013/11/Fachada-posterior-de-casa-moderna-de-dos-pisos.jpg",
        ]
    },

]

var comercial =[];
var salud =[];
var museo =[];

function pcomer(){
    for(i=0; i<proyectos.length; i++){
        if(proyectos[i].tipo == "comercial"){
            comercial.push(proyectos[i]);
        }
    }
    return comercial;
}

function psalud(){
    for(i=0; i<proyectos.length; i++){
        if(proyectos[i].tipo == "salud"){
            salud.push(proyectos[i]);
        }
    }
    return salud;
}

$(document).ready(function(){
    pcomer();
    psalud();
    for (i=0; i<salud.length; i++){
        var card = "";
        card += '<li>';
        card += '<div class="card">';
        card += '<div class="card-image">';
        card += '<img class="activator" src="' + salud[i].imagenes[0] + '">';
        card += '</div>';
        card += ' <div class="card-reveal">';
        card += ' <a class="waves-effect waves-light modal-trigger blue2 grande" href="#modal'+ salud[i].nombre + '">' + salud[i].nombre + '</a>';
        card += '</div>';
        card += '</div>';
        card += '</li>';

        card += '<div id="modal' + salud[i].nombre + '" class="modal bottom-sheet">';
        card += '<div class="modal-content">';
        card += '<div class="slider fullscreen">';
        card += '<ul class="slides">';
        for (j=0; j<salud[i].imagenes.length; j++){
            card += '<li>';
            card += '<img src="' + salud[i].imagenes[j] + '">';
            card += '</li>';
        }
        card += '</ul>';
        card += '<p class="medio center-align derecha izquierda flow-text blue2">' + salud[i].descripcion +  '</p>';
        card += '</div>';
        card += '</div>';
        card += '<div class="modal-footer">';
        card += '<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat white-text vista"><i class="material-icons large">close</i></a>';
        card += '</div>';
        card += '</div>';


        $('.salud').append(card);
    }

    for (i=0; i<comercial.length; i++){
        var card = "";
        card += '<li>';
        card += '<div class="card">';
        card += '<div class="card-image">';
        card += '<img class="activator" src="' + comercial[i].imagenes[0] + '">';
        card += '</div>';
        card += ' <div class="card-reveal">';
        card += ' <span class="card-title blue2">' + comercial[i].nombre + '</span>';
        card += '</div>';
        card += '</div>';
        card += '</li>';

        $('.comercial').append(card);
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
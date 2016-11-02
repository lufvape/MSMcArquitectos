/**
 * Created by luisfvargas on 26/08/16.
 */
var proyectos = [
    {
        id: "proyecto1",
        nombre:"Casa Osorio",
        descripcion:"Descripción1",
        tipo:"urbanismo",
        escala:"500",
        estado:"terminado",
        imagenes:[
            "https://www.dropbox.com/s/iy5pzgxbtv21amm/1.jpg?raw=1",
        ]
    },
    {
        id: "proyecto2",
        nombre:"Filadelfia",
        descripcion:" consectetur nulla libero eget turpis. Sed et malesuada nisl, ac rutrum lacus. Aenean sagittis, nisi non mollis luctus, velit ipsum imperdiet enim, eu pulvinar nisl tortor a est. Ut luctus et est a congue. Aenean sollicitudin ante sed nulla porttitor porta. Nunc bibendum tempor urna, eu dignissim m",
        tipo:"urbanismo",
        escala:"530",
        estado:"idea",
        imagenes:[
            "https://www.dropbox.com/s/p62xexbhi8hvpbj/1.jpg?raw=1",
            "https://www.dropbox.com/s/lqlhzjmyrj2agvc/2.jpg?raw=1",
            "https://www.dropbox.com/s/qer35sw4c5m69w1/3.jpg?raw=1",
            "https://www.dropbox.com/s/bm1grgamrww0lny/4.jpg?raw=1",
            "https://www.dropbox.com/s/7f9mo631d0crhg4/5.jpg?raw=1",
        ]
    },
    {
        id: "proyecto3",
        nombre:"Florida III",
        descripcion:"Descripción3",
        tipo:"urbanismo",
        escala:"400",
        estado:"construccion",
        imagenes:[
            "https://www.dropbox.com/s/gsdys69gidr63zz/1.jpg?raw=1",
            "https://www.dropbox.com/s/dn3rucszmsk9z5u/2.jpg?raw=1",
            "https://www.dropbox.com/s/miw733ylk828l6x/3.jpg?raw=1",
            "https://www.dropbox.com/s/jjt4eqcmrm7cd6y/4.jpg?raw=1",
            "https://www.dropbox.com/s/cr86zuve5ulq859/5.jpg?raw=1",
            "https://www.dropbox.com/s/iajt18u6rvspo5h/6.jpg?raw=1",
            "https://www.dropbox.com/s/qkjr13rgudeojif/7.jpg?raw=1",
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
            "https://www.dropbox.com/s/6t8x9dwqsvgdp30/1.jpg?raw=1" +
            "",
            "https://www.dropbox.com/s/el2elpgarcqr3td/2.jpg?raw=1" +
            "",
            "https://www.dropbox.com/s/jasl0b9igv79mkj/3.jpg?raw=1" +
            "",
            "https://www.dropbox.com/s/ht8n2vf9ynfr5e9/4.jpg?raw=1" +
            "",
            "https://www.dropbox.com/s/rf501pajt82mvd8/5.jpg?raw=1" +
            "",
            "https://www.dropbox.com/s/kgy1iql4yom5bvh/6.jpg?raw=1" +
            "",
            "https://www.dropbox.com/s/zbyaivqz7j9y2wy/7.jpg?raw=1" +
            "",
            "https://www.dropbox.com/s/fxsvsh5px3c7mj0/8.jpg?raw=1" +
            "",
            "https://www.dropbox.com/s/96xfqlqy1nn4cf0/9.jpg?raw=1" +
            "",
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
            "https://www.dropbox.com/s/sllmslcfo7v08w1/1.jpg?raw=1" +
            "",
            "https://www.dropbox.com/s/acyqropwtnwvww4/2.jpg?raw=1" +
            "",
        ]
    },

]

var equipamiento =[];
var urbanismo =[];
var casas =[];
var edificios =[];
var quinientos =[];
var mil =[];
var diezmil =[];
var cienmil =[];
var idea =[];
var construccion =[];
var terminado =[];


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

function pqui() {
    for (i = 0; i < proyectos.length; i++) {
        if (proyectos[i].escala == "500") {
            quinientos.push(proyectos[i]);
        }
    }
    return quinientos;
}

function pmil(){
    for(i=0; i<proyectos.length; i++){
        if(proyectos[i].escala == "1000"){
            mil.push(proyectos[i]);
        }
    }
    return mil;
}

function pdiez(){
    for(i=0; i<proyectos.length; i++){
        if(proyectos[i].escala == "10000"){
            diezmil.push(proyectos[i]);
        }
    }
    return diezmil;
}
function pcien(){
    for(i=0; i<proyectos.length; i++){
        if(proyectos[i].escala == "100000"){
            cienmil.push(proyectos[i]);
        }
    }
    return cienmil;
}

function pidea(){
    for(i=0; i<proyectos.length; i++){
        if(proyectos[i].estado == "idea"){
            idea.push(proyectos[i]);
        }
    }
    return idea;
}
function pcons(){
    for(i=0; i<proyectos.length; i++){
        if(proyectos[i].estado == "construccion"){
            construccion.push(proyectos[i]);
        }
    }
    return construccion;
}

function pter(){
    for(i=0; i<proyectos.length; i++){
        if(proyectos[i].estado == "terminado"){
            terminado.push(proyectos[i]);
        }
    }
    return terminado;
}

$(document).ready(function(){
    pcomer();
    pcasas();
    purba();
    pedif();
    pqui();
    pcien();
    pdiez();
    pmil();
    pidea();
    pcons();
    pter();

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
            card += '<img src="' + equipamiento[i].imagenes[j] + '">';
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
            card += '<img src="' + urbanismo[i].imagenes[j] + '">';
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
            card += '<img src="' + edificios[i].imagenes[j] + '">';
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
            card += '<img src="' + casas[i].imagenes[j] + '">';
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

    for (i=0; i<quinientos.length; i++){
        var card = "";
        card += '<li>';
        card += '<div class="card">';
        card += '<div class="card-image">';
        card += '<img class="activator" src="' + quinientos[i].imagenes[0] + '">';
        card += '</div>';
        card += ' <div class="card-reveal">';
        card += ' <a class="waves-effect waves-light modal-trigger txt-abajo blue2 medio" href="#modal'+ quinientos[i].id + '">' + quinientos[i].nombre + '</a>';
        card += '</div>';
        card += '</div>';
        card += '</li>';

        card += '<div id="modal' + quinientos[i].id + '" class="modal bottom-sheet">';
        card += '<div class="modal-content">';
        card += '<div class="slider fullscreen">';
        card += '<ul class="slides">';
        for (j=0; j<quinientos[i].imagenes.length; j++){
            card += '<li>';
            card += '<img src="' + quinientos[i].imagenes[j] + '">';
            card += '</li>';
        }
        card += '</ul>';
        card += '<p class="medio center-align derecha izquierda flow-text blue2">' + quinientos[i].descripcion +  '</p>';
        card += '</div>';
        card += '</div>';
        card += '<div class="modal-footer">';
        card += '<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat white-text vista"><i class="material-icons large">close</i></a>';
        card += '</div>';
        card += '</div>';

        $('.quinientos').append(card);
    }

    for (i=0; i<mil.length; i++){
        var card = "";
        card += '<li>';
        card += '<div class="card">';
        card += '<div class="card-image">';
        card += '<img class="activator" src="' + mil[i].imagenes[0] + '">';
        card += '</div>';
        card += ' <div class="card-reveal">';
        card += ' <a class="waves-effect waves-light modal-trigger txt-abajo blue2 medio" href="#modal'+ mil[i].id + '">' + mil[i].nombre + '</a>';
        card += '</div>';
        card += '</div>';
        card += '</li>';

        card += '<div id="modal' + mil[i].id + '" class="modal bottom-sheet">';
        card += '<div class="modal-content">';
        card += '<div class="slider fullscreen">';
        card += '<ul class="slides">';
        for (j=0; j<mil[i].imagenes.length; j++){
            card += '<li>';
            card += '<img src="' + mil[i].imagenes[j] + '">';
            card += '</li>';
        }
        card += '</ul>';
        card += '<p class="medio center-align derecha izquierda flow-text blue2">' + mil[i].descripcion +  '</p>';
        card += '</div>';
        card += '</div>';
        card += '<div class="modal-footer">';
        card += '<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat white-text vista"><i class="material-icons large">close</i></a>';
        card += '</div>';
        card += '</div>';


        $('.mil').append(card);
    }

    for (i=0; i<diezmil.length; i++){
        var card = "";
        card += '<li>';
        card += '<div class="card">';
        card += '<div class="card-image">';
        card += '<img class="activator" src="' + diezmil[i].imagenes[0] + '">';
        card += '</div>';
        card += ' <div class="card-reveal">';
        card += ' <a class="waves-effect waves-light modal-trigger txt-abajo blue2 medio" href="#modal'+ diezmil[i].id + '">' + diezmil[i].nombre + '</a>';
        card += '</div>';
        card += '</div>';
        card += '</li>';

        card += '<div id="modal' + diezmil[i].id + '" class="modal bottom-sheet">';
        card += '<div class="modal-content">';
        card += '<div class="slider fullscreen">';
        card += '<ul class="slides">';
        for (j=0; j<diezmil[i].imagenes.length; j++){
            card += '<li>';
            card += '<img src="' + diezmil[i].imagenes[j] + '">';
            card += '</li>';
        }
        card += '</ul>';
        card += '<p class="medio center-align derecha izquierda flow-text blue2">' + diezmil[i].descripcion +  '</p>';
        card += '</div>';
        card += '</div>';
        card += '<div class="modal-footer">';
        card += '<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat white-text vista"><i class="material-icons large">close</i></a>';
        card += '</div>';
        card += '</div>';

        $('.diez').append(card);
    }

    for (i=0; i<cienmil.length; i++){
        var card = "";
        card += '<li>';
        card += '<div class="card">';
        card += '<div class="card-image">';
        card += '<img class="activator" src="' + cienmil[i].imagenes[0] + '">';
        card += '</div>';
        card += ' <div class="card-reveal">';
        card += ' <a class="waves-effect waves-light modal-trigger txt-abajo blue2 medio" href="#modal'+ cienmil[i].id + '">' + cienmil[i].nombre + '</a>';
        card += '</div>';
        card += '</div>';
        card += '</li>';

        card += '<div id="modal' + cienmil[i].id + '" class="modal bottom-sheet">';
        card += '<div class="modal-content">';
        card += '<div class="slider fullscreen">';
        card += '<ul class="slides">';
        for (j=0; j<cienmil[i].imagenes.length; j++){
            card += '<li>';
            card += '<img src="' + cienmil[i].imagenes[j] + '">';
            card += '</li>';
        }
        card += '</ul>';
        card += '<p class="medio center-align derecha izquierda flow-text blue2">' + cienmil[i].descripcion +  '</p>';
        card += '</div>';
        card += '</div>';
        card += '<div class="modal-footer">';
        card += '<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat white-text vista"><i class="material-icons large">close</i></a>';
        card += '</div>';
        card += '</div>';


        $('.cien').append(card);
    }

    for (i=0; i<idea.length; i++){
        var card = "";
        card += '<li>';
        card += '<div class="card">';
        card += '<div class="card-image">';
        card += '<img class="activator" src="' + idea[i].imagenes[0] + '">';
        card += '</div>';
        card += ' <div class="card-reveal">';
        card += ' <a class="waves-effect waves-light modal-trigger txt-abajo blue2 medio" href="#modal'+ idea[i].id + '">' + idea[i].nombre + '</a>';
        card += '</div>';
        card += '</div>';
        card += '</li>';

        card += '<div id="modal' + idea[i].id + '" class="modal bottom-sheet">';
        card += '<div class="modal-content">';
        card += '<div class="slider fullscreen">';
        card += '<ul class="slides">';
        for (j=0; j<idea[i].imagenes.length; j++){
            card += '<li>';
            card += '<img src="' + idea[i].imagenes[j] + '">';
            card += '</li>';
        }
        card += '</ul>';
        card += '<p class="medio center-align derecha izquierda flow-text blue2">' + idea[i].descripcion +  '</p>';
        card += '</div>';
        card += '</div>';
        card += '<div class="modal-footer">';
        card += '<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat white-text vista"><i class="material-icons large">close</i></a>';
        card += '</div>';
        card += '</div>';

        $('.idea').append(card);
    }

    for (i=0; i<construccion.length; i++){
        var card = "";
        card += '<li>';
        card += '<div class="card">';
        card += '<div class="card-image">';
        card += '<img class="activator" src="' + construccion[i].imagenes[0] + '">';
        card += '</div>';
        card += ' <div class="card-reveal">';
        card += ' <a class="waves-effect waves-light modal-trigger txt-abajo blue2 medio" href="#modal'+ construccion[i].id + '">' + construccion[i].nombre + '</a>';
        card += '</div>';
        card += '</div>';
        card += '</li>';

        card += '<div id="modal' + construccion[i].id + '" class="modal bottom-sheet">';
        card += '<div class="modal-content">';
        card += '<div class="slider fullscreen">';
        card += '<ul class="slides">';
        for (j=0; j<construccion[i].imagenes.length; j++){
            card += '<li>';
            card += '<img src="' + construccion[i].imagenes[j] + '">';
            card += '</li>';
        }
        card += '</ul>';
        card += '<p class="medio center-align derecha izquierda flow-text blue2">' + construccion[i].descripcion +  '</p>';
        card += '</div>';
        card += '</div>';
        card += '<div class="modal-footer">';
        card += '<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat white-text vista"><i class="material-icons large">close</i></a>';
        card += '</div>';
        card += '</div>';


        $('.construccion').append(card);
    }

    for (i=0; i<terminado.length; i++){
        var card = "";
        card += '<li>';
        card += '<div class="card">';
        card += '<div class="card-image">';
        card += '<img class="activator" src="' + terminado[i].imagenes[0] + '">';
        card += '</div>';
        card += ' <div class="card-reveal">';
        card += ' <a class="waves-effect waves-light modal-trigger txt-abajo blue2 medio" href="#modal'+ terminado[i].id + '">' + terminado[i].nombre + '</a>';
        card += '</div>';
        card += '</div>';
        card += '</li>';

        card += '<div id="modal' + terminado[i].id + '" class="modal bottom-sheet">';
        card += '<div class="modal-content">';
        card += '<div class="slider fullscreen">';
        card += '<ul class="slides">';
        for (j=0; j<terminado[i].imagenes.length; j++){
            card += '<li>';
            card += '<img src="' + terminado[i].imagenes[j] + '">';
            card += '</li>';
        }
        card += '</ul>';
        card += '<p class="medio center-align derecha izquierda flow-text blue2">' + terminado[i].descripcion +  '</p>';
        card += '</div>';
        card += '</div>';
        card += '<div class="modal-footer">';
        card += '<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat white-text vista"><i class="material-icons large">close</i></a>';
        card += '</div>';
        card += '</div>';

        $('.terminado').append(card);
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
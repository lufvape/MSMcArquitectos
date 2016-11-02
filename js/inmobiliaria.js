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
        tipo:"casas",
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
        tipo:"casas",
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
        tipo:"edificios",
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

$(document).ready(function(){

    $("#search").keyup(function(){

        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val();

        // Loop through the comment list
        $(".proyectos .invisible").each(function(){

            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();

                // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();

            }
        });

    });

    for (i=0; i<proyectos.length; i++){
        var card = "";
        card += '<div class="invisible col s12 m4">';
        card += '<div class="card">';
        card += '<div class="card-image">';
        card += '<img src="' + proyectos[i].imagenes[0] + '">';
        card += '</div>';
        card += '</div>';
        card += ' <a class="waves-effect waves-light modal-trigger blue2 medio" href="#modal'+ proyectos[i].id + '">' + proyectos[i].nombre + '</a>';
        card += '<p class="medio center-align derecha izquierda flow-text blue2 inmodes">' + proyectos[i].descripcion +  '</p>';
        card +=  '</div>';

        card += '<div id="modal' + proyectos[i].id + '" class="modal bottom-sheet">';
        card += '<div class="modal-content">';
        card += '<div class="slider fullscreen">';
        card += '<ul class="slides">';
        for (j=0; j<proyectos[i].imagenes.length; j++){
            card += '<li>';
            card += '<img src="' + proyectos[i].imagenes[j] + '">';
            card += '</li>';
        }
        card += '</ul>';
        card += '<p class="medio center-align derecha izquierda flow-text blue2">' + proyectos[i].descripcion +  '</p>';
        card += '</div>';
        card += '</div>';
        card += '<div class="modal-footer">';
        card += '<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat white-text vista"><i class="material-icons large">close</i></a>';
        card += '</div>';
        card += '</div>';
        $('.proyectos').append(card);
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
});

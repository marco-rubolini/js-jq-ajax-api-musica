$(document).ready(function() {
// Esercizio in jquery senza handlebars

// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
// https://flynn.boolean.careers/exercises/api/array/music
// $.ajax({
//
//     url : 'https://flynn.boolean.careers/exercises/api/array/music',
//     method: 'GET',
//     success: function(data){
//         console.log(data.response);
//         // Ciclare quindi i dischi e ottenuti e per ognuno di essi disegnare in pagina una card
//         for (var i = 0; i < data.response.length; i++) {
//             console.log(data.response[i]);
//             var cd = $('.template .cd').clone();
//             cd.find('.author').text(data.response[i].author);
//             cd.find('h3').text(data.response[i].title);
//             cd.find('.year').text(data.response[i].year);
//             cd.find('img').attr('src', data.response[i].poster);
//             cd.find('img').attr('alt', data.response[i].title);
//             cd.find('img').attr('title', data.response[i].title);
//
//             $('.cds-container.container').append(cd);
//         }
//
//     },
//     error: function(){
//         alert('errore')
//     }
// })


// Esercizio con handlebars
var source   = $("#entry-template").html();
var template = Handlebars.compile(source);


// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
// https://flynn.boolean.careers/exercises/api/array/music
$.ajax({
    url : 'https://flynn.boolean.careers/exercises/api/array/music',
    method: 'GET',
    success: function(data){
        console.log(data.response);
        // Ciclare quindi i dischi e ottenuti

        for (var i = 0; i < data.response.length; i++) {
            console.log(data.response[i]);
            // per ognuno di essi disegnare in pagina una card utilizzando handlebars.
            var context = {
                src_image: data.response[i].poster,
                title: data.response[i].title,
                author: data.response[i].author,
                year: data.response[i].year,
                genre: data.response[i].genre
            };
            var html = template(context);

            $('.cds-container.container').append(html);
        }

    },
    error: function(){
        alert('errore')
    }
})
// BONUS: creare una select con i generi dei dischi musicali (pop, rock, metal, jazz), tramite la quale si possono filtrare i dischi visualizzati (ad esempio: se nella tendina si seleziona il genere "metal", nella pagina saranno mostrati solo i dischi con il genere "metal").

$(document).on('change', 'select', function() {
    var genreSelected = $('select').val();
    console.log(genreSelected);
    $('.cd').hide();
    if (genreSelected == 'All') {
        $('.cd').show();
    } else {
        $("[data-genre=" + genreSelected + "]").show();
    }
});

// BONUS utilizando ciclo each

// $(document).on('change', 'select', function() {
//     var genreSelected = $('select').val();
//     console.log(genreSelected);
//     $('.cd').hide();
//     $('.cd').each(function(){
//     var genre = $(this).data('genre');
//     console.log(genre);
//     if ((genreSelected == genre) || (genreSelected == 'All')) {
//         $(this).show();
//     }
// });
// });



})

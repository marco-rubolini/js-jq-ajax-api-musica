$(document).ready(function() {
// Esercizio in jquery senza handlebars
// $.ajax({
//     // Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
//     // https://flynn.boolean.careers/exercises/api/array/music
//     url : 'https://flynn.boolean.careers/exercises/api/array/music',
//     method: 'GET',
//     success: function(data){
//         console.log(data.response);
//         // Ciclare quindi i dischi e ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.
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
var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

$.ajax({
    // Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
    // https://flynn.boolean.careers/exercises/api/array/music
    url : 'https://flynn.boolean.careers/exercises/api/array/music',
    method: 'GET',
    success: function(data){
        console.log(data.response);
        // Ciclare quindi i dischi e ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.

        for (var i = 0; i < data.response.length; i++) {
            console.log(data.response[i]);
            var context = {
                src_image: data.response[i].poster,
                title: data.response[i].title,
                author: data.response[i].author,
                year: data.response[i].year
            };
            var html = template(context);
            $('.cds-container.container').append(html);
        }

    },
    error: function(){
        alert('errore')
    }
})

})
// Ciclare quindi i dischi e ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.

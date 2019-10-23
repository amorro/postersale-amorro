$(function() {
  getPosters();
  $('#cardFilms').show();
  $('#cardSeries').hide();
});

$('#films-tab').click(function(){
    $('#cardFilms').show();
    $('#cardSeries').hide();
})

$('#series-tab').click(function(){
    $('#cardFilms').hide();
    $('#cardSeries').show();
})

function compra(msg) {
  $("#txt-message").html(msg);
  $("#modal-message").modal("show");
}

function getPosters() {
  $.getJSON('./js/posters.json', function(data) {
			    video = data.video;
			    printFilms(video.films);
			    printSeries(video.series);
			  });
}

// function getSeries() {
//   fetch('./js/posters.json')
//     .then(result => result.json())
//     .then((data) => {
//       videos = data.video
//       printSeries(videos.series);
//     });
// }

function printFilms(data) {
  $('#films-tab');
  $.each(data, function(key, val){
    let currentFilm = val;
    let card = `
                <div class="card col-3" style="width: 18rem;">
                  <img src="${currentFilm.cover}" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">${currentFilm.name}</h5>
                    <p class="card-text">Duración: ${currentFilm.duration}</p>
                    <p class="card-text">Director: ${currentFilm.director}</p>
                    <p class="card-text">Género: ${currentFilm.genre}</p>
                    <button onClick="compra()" class="btn btn-primary">Comprar</a>
                  </div>
                </div>
                `;
                $('#cardFilms').append(card);
  });
}

function printSeries(data) {
  $('#series-tab');
  $.each(data, function(key, val){
    let currentFilm = val;
    let card = `
                <div class="card col-3" style="width: 18rem;">
                  <img src="${currentFilm.cover}" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">${currentFilm.name}</h5>
                    <p class="card-text">Duración: ${currentFilm.seasons}</p>
                    <p class="card-text">Director: ${currentFilm.director}</p>
                    <p class="card-text">Género: ${currentFilm.genre}</p>
                    <button onClick="compra()" class="btn btn-primary">Comprar</a>
                  </div>
                </div>
                `;
                $('#cardSeries').append(card);
  });
}

// function printFilms(pelis) {
//   let bodyList = document.getElementById("cardFilms")
//   bodyList.innerHTML = "";
//   pelis.forEach((e) => {
//     let currentFilm = e;
//     bodyList.innerHTML += `
//                 <div class="card col-3" style="width: 18rem;">
//                   <img src="${currentFilm.img}" class="card-img-top">
//                   <div class="card-body">
//                     <h5 class="card-title">${currentFilm.title}</h5>
//                     <p class="card-text">Duración: ${currentFilm.duration}</p>
//                     <p class="card-text">Director: ${currentFilm.director}</p>
//                     <p class="card-text">Género: ${currentFilm.genre}</p>
//                     <button onClick="compra()" class="btn btn-primary">Comprar</a>
//                   </div>
//                 </div>
//                 `;
//   })
// }

// function printSeries(series) {
//   let bodyList = document.getElementById("cardFilms")
//   bodyList.innerHTML = "";
//   pelis.forEach((e) => {
//     let currentFilm = e;
//     bodyList.innerHTML += `
//                 <div class="card col-3" style="width: 18rem;">
//                   <img src="${currentFilm.img}" class="card-img-top">
//                   <div class="card-body">
//                     <h5 class="card-title">${currentFilm.title}</h5>
//                     <p class="card-text">Duración: ${currentFilm.duration}</p>
//                     <p class="card-text">Director: ${currentFilm.director}</p>
//                     <p class="card-text">Género: ${currentFilm.genre}</p>
//                     <button onClick="compra()" class="btn btn-primary">Comprar</a>
//                   </div>
//                 </div>
//                 `;
//   })
// }

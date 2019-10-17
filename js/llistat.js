// import {
//   Peli,
//   Serie
// } from "./clases.js"


$(function() {
  getFilms()
});

function compra(msg) {
  $("#txt-message").html(msg);
  $("#modal-message").modal("show");
}

function getFilms() {
  fetch('./js/posters.json')
    .then(result => result.json())
    .then((data) => {
      printFilms(data);
    });
}

function getSeries() {
  fetch('./js/series.xml')
    .then(result => result.json())
    .then((data) => {
      printSeries(data);
    });
}


function printFilms(pelis) {
  let bodyList = document.getElementById("cardFilms")
  bodyList.innerHTML = "";
  pelis.forEach((e) => {
    let currentFilm = e;
    bodyList.innerHTML += `
                <div class="card col-3" style="width: 18rem;">
                  <img src="${currentFilm.img}" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">${currentFilm.title}</h5>
                    <p class="card-text">Duración: ${currentFilm.duration}</p>
                    <p class="card-text">Director: ${currentFilm.director}</p>
                    <p class="card-text">Género: ${currentFilm.genre}</p>
                    <button onClick="compra()" class="btn btn-primary">Comprar</a>
                  </div>
                </div>
                `;
  })
}

function printSeries(series) {
  let bodyList = document.getElementById("cardFilms")
  bodyList.innerHTML = "";
  pelis.forEach((e) => {
    let currentFilm = e;
    bodyList.innerHTML += `
                <div class="card col-3" style="width: 18rem;">
                  <img src="${currentFilm.img}" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">${currentFilm.title}</h5>
                    <p class="card-text">Duración: ${currentFilm.duration}</p>
                    <p class="card-text">Director: ${currentFilm.director}</p>
                    <p class="card-text">Género: ${currentFilm.genre}</p>
                    <button onClick="compra()" class="btn btn-primary">Comprar</a>
                  </div>
                </div>
                `;
  })
}

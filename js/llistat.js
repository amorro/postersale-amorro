$(function() {
  getFilms();
  getXml();
  $('#cardFilms').show();
  $('#cardSeries').hide();
});

$('#films-tab').click(function() {
  $('#cardFilms').show();
  $('#cardSeries').hide();
})

$('#series-tab').click(function() {
  $('#cardFilms').hide();
  $('#cardSeries').show();
})


function compra(id, nombre, precio) {
  $("#txt-title").html("Póster: " + nombre);
  $("#cantidad").val(1);
  $("#txt-price").html("Precio: " + precio + "€");
  $('#cantidad').change(function() {
    $("#txt-price").html("Precio: " + ($('#cantidad').val() * precio) + "€");
  });
  $("#modal-message").modal("show");
}


function getFilms() {
  $.getJSON('./js/films.json', function(data) {
    json = data.video;
    printFilms(json.films);
    //printSeries(json.series);
  });
}

function getXml() {
  $.ajax({
    type: "GET",
    url: "./js/series.xml",
    dataType: "xml",
    success: function(xml) {
      printXmlJson(xml);
    },
    error: function() {
      alert("error no se han podido leer los datos");
    }
  })
}

function printXmlJson(xml) {
  let listSeries = [];
  $(xml).find('serie').each(function() {
    let serie = {
      "id": $(this).attr("id"),
      "name": $(this).attr("name"),
      "genre": $(this).find('genre').text(),
      "director": $(this).find('director').text(),
      "seasons": $(this).find('seasons').text(),
      "cover": $(this).find('cover').text(),
      "price": $(this).find('price').text(),
      "sinopsis": $(this).find('sinopsis').text(),
      "stars": ""
    };

    let lStars = [];
    $(this).find('star').each(function(){
      lStars.push({"character":$(this).attr('character'), "name":$(this).text()});
    });
    serie.stars=lStars;

    listSeries.push(serie);
  });
  printSeries(listSeries);
}

const printStars = function(listStars) {
  let listaStars = "";
  $.each(listStars, function(key, val) {
    listaStars += `<li class="list-group-item">${val.name}: ${val.character}</li>`
  });
  return listaStars;
}

const sumary = function(sinopsis) {
  if (sinopsis.length > 50) {
    return sinopsis.substr(0, 50) + "...";
  } else if (sinopsis == "undefined" || sinopsis.length == 0) {
    return "sense info";
  } else {
    return sinopsis;
  }
}

function printFilms(data) {
  $('#films-tab');
  $.each(data, function(key, val) {
    let currentFilm = val;
    let card = `
                <div class="card col-3" style="width: 18rem;">
                  <img src="${currentFilm.cover}" class="card-img-top height-auto">
                  <div class="card-body">
                    <h5 class="card-title">${currentFilm.name}</h5>
                    <p class="card-text">Sinopsis: ${sumary(currentFilm.sinopsis)}</p>
                    <p class="card-text">Duración: ${currentFilm.duration}</p>
                    <p class="card-text">Director: ${currentFilm.director}</p>
                    <p class="card-text">Actores:</p>
                    <ul class="list-group">
                    ${printStars(currentFilm.stars)}
                    </ul>
                    <p class="card-text">Género: ${currentFilm.genre}</p>
                    <button onClick="compra(${currentFilm.id}, '${currentFilm.name}', '${currentFilm.price}')" class="btn btn-primary">Comprar</a>
                  </div>
                </div>
                `;
    $('#cardFilms').append(card);
  });
}

function printSeries(data) {
  document.querySelector('#series-tab');
  data.forEach(function(val) {
    let currentFilm = val;
    let card = `
                <div class="card col-3" style="width: 18rem;">
                  <img src="${currentFilm.cover}" class="card-img-top mh-5">
                  <div class="card-body">
                    <h5 class="card-title">${currentFilm.name}</h5>
                    <p class="card-text">Duración: ${currentFilm.seasons}</p>
                    <p class="card-text">Director: ${currentFilm.director}</p>
                    <p class="card-text">Actores:</p>
                    <ul class="list-group">
                    ${printStars(currentFilm.stars)}
                    </ul>
                    <p class="card-text">Género: ${currentFilm.genre}</p>
                    <button onClick="compra(${currentFilm.id}, '${currentFilm.name}', '${currentFilm.price}')" class="btn btn-primary">Comprar</a>
                  </div>
                </div>
                `;
    document.querySelector('#cardSeries').innerHTML += card;
  });
}

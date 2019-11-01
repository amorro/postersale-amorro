$(function(){
  let posterStored = JSON.parse(localStorage.getItem("poster"));
  $('#cart-list');
  $.each(posterStored, function(key, val) {
    let item = `
    <tr>
      <th scope="row"></th>
      <td>${val.name}</td>
      <td>${val.cantidad}</td>
      <td>${val.precio}</td>
    </tr>
                  `;
    $('#cart-item').append(item);
  });
  $("#modal-carrito").modal("show");
});


function eliminar() {
  localStorage.removeItem("poster");
  location.reload();
};

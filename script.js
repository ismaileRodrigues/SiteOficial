let dialogo = document.querySelector('dialog');

function closeDialog(event) {
  if (event.target === dialogo) {
    dialogo.close();
  }
}

function openDialog() {
  dialogo.showModal();
}


// Adicione um evento de clique ao documento inteiro
document.addEventListener('click', closeDialog);


$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});

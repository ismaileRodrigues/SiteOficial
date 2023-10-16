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


const teste = [{
  nome: 'ismaile',
  comentario: 'Ótima qualidade exelente atendimento.',
  nome: 'ismaile',
  comentario: 'Ótima qualidade exelente atendimento.',

}, {
  nome: 'arliene',
  comentario: 'Ótima qualidade',
}
  , {
  nome: 'thomas',
  comentario: 'Ótima qualidade',
}
  , {
  nome: 'ada',
  comentario: 'Ótima qualidade ima qualidade ima qualidade ima qualidade ima qualidade ima qualidade s',
}
  , {
  nome: 'layla',
  comentario: 'Ótima qualidade',
}




]




let inputs = document.querySelectorAll('input')
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch('https://sheetdb.io/api/v1/xo8tzll8jeamf', {
    method: 'POST',
    body: data
  }).then(function (response) {
    alert('Enviado')
    for (let x = 0; x < inputs.length; x++) {
      inputs[x].value = ''

    }

  });
});
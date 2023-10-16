// Criação do campo de entrada

// let pesquisar = document.querySelector('#pesquisar')
// let print = document.querySelector('#print')
// let btnPedidos = document.querySelector('#btnPedidos')
// let itens = document.querySelector('.itens')
// let btnfechar = document.querySelector('#btnfechar')


// btnPedidos.addEventListener('click', () => {
//   print.style.display = 'none'
//   itens.style.display = 'block'
// })

// btnfechar.addEventListener('click', () => {
//   print.style.display = 'block'
//   itens.style.display = 'none'
// })




fetch('https://sheetdb.io/api/v1/xo8tzll8jeamf')
  .then(response => response.json()) // converte a resposta em JSON
  .then(data => {
    for (let i = 0; i < data.length; i++) {

      let feedback = document.querySelector('#feedback-container')
      let comentarios = document.createElement('div')
      comentarios.classList.add('depoimento')
      comentarios.innerHTML = `<h1> ${data[i].nome}</h1> <p>${data[i].comentario}</p>`
      feedback.appendChild(comentarios)

    }
  })
  .catch(error => console.log('Erro:', error));



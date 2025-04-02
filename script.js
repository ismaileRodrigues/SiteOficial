let copy = document.querySelector('#copy');
//copy
let dataAtual = new Date()

let ano = dataAtual.getFullYear()

copy.innerHTML = `Todos os direitos reservados  &#x00A9; ${ano}`

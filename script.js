const toggleButton = document.getElementById("darkModeToggle");
const darkModeIcon = document.getElementById("darkModeIcon");
const body = document.body;

// Verifica se o modo escuro está ativado no localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  darkModeIcon.classList.replace("fa-moon", "fa-sun");
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    darkModeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    localStorage.setItem("darkMode", "disabled");
    darkModeIcon.classList.replace("fa-sun", "fa-moon");
  }
});

// Atualiza o rodapé com o ano atual
let copy = document.querySelector("#copy");
let dataAtual = new Date();
let ano = dataAtual.getFullYear();

copy.innerHTML = `Todos os direitos reservados © Ismaile Rodrigues - ${ano}`;
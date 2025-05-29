function checkPassword() {
  const passwordInput = document.getElementById("password").value.trim();
  const correctDate = "14/02/2023";
  const errorMsg = document.getElementById("error-msg");

  if (passwordInput === correctDate) {
    window.location.href = "frases.html";
  } else {
    errorMsg.textContent = "Fecha incorrecta. Intenta otra vez, mi amor.";
  }
}

let currentIndex = 0;
let frases = [];

function cargarFrases() {
  fetch('frases.json')
    .then(response => response.json())
    .then(data => {
      frases = data;
      mostrarFrase();
    });
}

function mostrarFrase() {
  if (currentIndex < frases.length) {
    document.getElementById("frase").textContent = frases[currentIndex];
    currentIndex++;
  } else {
    document.getElementById("frase").textContent = "¡Ya viste las 100 razones!";
  }
}

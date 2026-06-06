// Contador interactivo
let contador = 0;
const numero = document.getElementById('numero');
const btnMas = document.getElementById('btn-mas');
const btnMenos = document.getElementById('btn-menos');
const btnReset = document.getElementById('btn-reset');

function actualizarNumero() {
  numero.style.transform = 'scale(1.3)';
  numero.textContent = contador;
  setTimeout(() => {
    numero.style.transform = 'scale(1)';
  }, 150);

  // Cambia color según el valor
  if (contador > 0) {
    numero.style.color = '#6C63FF';
  } else if (contador < 0) {
    numero.style.color = '#FF6584';
  } else {
    numero.style.color = '#ffffff';
  }
}

btnMas.addEventListener('click', () => {
  contador++;
  actualizarNumero();
});

btnMenos.addEventListener('click', () => {
  contador--;
  actualizarNumero();
});

btnReset.addEventListener('click', () => {
  contador = 0;
  actualizarNumero();
});

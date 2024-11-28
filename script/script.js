// Función para mostrar la transición
function showTransition() {
  const transition = document.getElementById('transition');
  transition.style.opacity = 1;
  transition.style.pointerEvents = 'auto';
}

// Función para ocultar la transición
function hideTransition() {
  const transition = document.getElementById('transition');
  transition.style.opacity = 0;
  transition.style.pointerEvents = 'none';
}

// Maneja la transición al hacer clic en enlaces
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Evita la navegación inmediata
    const href = this.href;
    showTransition(); // Muestra la transición

    // Navega después de que termine la animación (4 segundos más)
    setTimeout(() => {
      window.location.href = href;
    }, 1900); // 9 segundos (4 segundos más que el GIF original de 5 segundos)
  });
});

// Oculta la transición cuando la página carga
window.onload = hideTransition;
